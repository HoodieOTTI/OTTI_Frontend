// import React from 'react';
// import * as S from './Search.Style';

// const Search = () => {
//   return (
//     <S.SearchCont>
//       <S.SearchInp placeholder="원하시는 OTT를 입력해보세요." />
//     </S.SearchCont>
//   );
// };

// export default Search;

// import React, { useState } from 'react';
// import { IoIosSearch } from 'react-icons/io';
// import * as S from './Search.Style';

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   // 검색어 입력 시 상태 업데이트
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // 검색 버튼 클릭 시 동작
//   const handleSearch = () => {
//     if (searchQuery.trim() !== '') {
//       // 검색 로직 추가 (ex. API 호출)
//       console.log('검색어:', searchQuery);
//     } else {
//       alert('검색어를 입력해주세요.');
//     }
//   };

//   return (
//     <S.SearchCont>
//       <S.SearchInp
//         placeholder="원하시는 OTT를 입력해보세요."
//         value={searchQuery}
//         onChange={handleInputChange}
//       />
//       <S.SearchBtn onClick={handleSearch}>
//         <IoIosSearch size={25} color="#757575" />
//       </S.SearchBtn>
//     </S.SearchCont>
//   );
// };

// export default Search;

import React, { useState } from 'react';
import axiosInstance from '../../libs/AxiosInstance';
import { IoIosSearch } from 'react-icons/io';
import * as S from './Search.Style';
import CommunityList, {
  Post,
} from '../../components/Community/CommunityList/CommunityList';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  // 검색어 입력 시 상태 업데이트
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // 검색 버튼 클릭 시 동작
  const handleSearch = async () => {
    if (searchQuery.trim() !== '') {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/api/post/search`, {
          params: {
            title: searchQuery,
            page: 1,
            size: 11,
          },
        });

        // Ensure that response.data is an array of Post objects
        const fetchedPosts = Array.isArray(response.data) ? response.data : [];

        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch search results', error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('검색어를 입력해주세요.');
    }
  };

  return (
    <>
      <S.SearchCont>
        <S.SearchInp
          placeholder="원하시는 OTT를 입력해보세요."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <S.SearchBtn onClick={handleSearch}>
          <IoIosSearch size={25} color="#757575" />
        </S.SearchBtn>
      </S.SearchCont>

      {loading ? <div>Loading...</div> : <CommunityList posts={posts} />}
    </>
  );
};

export default Search;
