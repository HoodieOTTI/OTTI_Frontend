// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axiosInstance from '../../../libs/AxiosInstance';
// import * as S from './CommunityDetail.Style';
// import CommunityPost from '../../../components/Community/CommunityPost/CommunityPost';
// import AddComment from '../../../components/Community/Comment/AddComment';
// import CommentList from '../../../components/Community/Comment/CommentList';
// import JoinBtn from '../../../components/common/JoinBtn/JoinBtn';
// import NewTopBar from '../../../components/TopBar/NewTopBar';

// interface CommentUserInfo {
//   userName: string;
//   userprofilePhotoUrl: string;
// }

// interface Comment {
//   id: number;
//   text: string;
//   createdDate: string;
//   userInfo: CommentUserInfo;
// }

// interface Post {
//   id: number;
//   username: string;
//   createdAt: string;
//   title: string;
//   content: string;
//   potId: number;
//   comments: Comment[];
// }

// const defaultProfileImage =
//   'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

// const CommunityDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [post, setPost] = useState<Post | null>(null);
//   const [comments, setComments] = useState<Comment[]>([]);
//   const postId = Number(id);
//   const [lastCommentId, setLastCommentId] = useState(0);

//   // console.log(comments);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await axiosInstance.get(`/api/post/${postId}`);
//         setPost(response.data);
//         setComments(response.data.comments || []);

//         response.data.comments?.forEach((comment: Comment) => {});
//       } catch (error) {
//         console.error('Failed to fetch post', error);
//       }
//     };

//     if (postId) {
//       fetchPost();
//     }
//   }, [postId, lastCommentId]);

//   const handleAddComment = async (content: string) => {
//     try {
//       const response = await axiosInstance.post('/api/post/comment', {
//         text: content,
//         post: postId,
//       });
//       // console.log(response);

//       // const newComment: Comment = {
//       //   id: response.data.id,
//       //   text: response.data.text,
//       //   createdDate: response.data.createdDate,
//       //   userInfo: {
//       //     userName: response.data.userInfo.userName,
//       //     userprofilePhotoUrl:
//       //       response.data.userInfo.userprofilePhotoUrl || defaultProfileImage,
//       //   },
//       // };

//       // console.log('New Comment:', newComment);
//       // setComments([...comments, newComment]);

//       // console.log('Updated Comments:', [...comments, newComment]);
//       setLastCommentId(lastCommentId + 1);
//     } catch (error) {
//       console.error('Failed to add comment', error);
//     }
//   };

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <S.Container>
//       <S.TitleWrapper>
//         <NewTopBar title="커뮤니티" />
//       </S.TitleWrapper>
//       <S.PageWrapper>
//         <S.CommunityPostWrapper>
//           <CommunityPost postId={postId} />
//           <JoinBtn potId={post.potId} />
//         </S.CommunityPostWrapper>
//         <AddComment postId={postId} onAddComment={handleAddComment} />
//         <CommentList comments={comments} />
//       </S.PageWrapper>
//     </S.Container>
//   );
// };

// export default CommunityDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../libs/AxiosInstance';
import * as S from './CommunityDetail.Style';
import CommunityPost from '../../../components/Community/CommunityPost/CommunityPost';
import AddComment from '../../../components/Community/Comment/AddComment';
import CommentList from '../../../components/Community/Comment/CommentList';
import JoinBtn from '../../../components/common/JoinBtn/JoinBtn';
import NewTopBar from '../../../components/TopBar/NewTopBar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CommentUserInfo {
  userName: string;
  userprofilePhotoUrl: string;
}

interface Comment {
  id: number;
  text: string;
  createdDate: string;
  userInfo: CommentUserInfo;
}

interface Post {
  id: number;
  username: string;
  createdAt: string;
  title: string;
  content: string;
  potId: number;
  comments: Comment[];
}

const defaultProfileImage =
  'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

const CommunityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const postId = Number(id);
  const [lastCommentId, setLastCommentId] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosInstance.get(`/api/post/${postId}`);
        setPost(response.data);
        setComments(response.data.comments || []);
      } catch (error) {
        toast.error('게시물을 불러오는 데 실패했습니다.'); // 오류 메시지
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId, lastCommentId]);

  const handleAddComment = async (content: string) => {
    try {
      const response = await axiosInstance.post('/api/post/comment', {
        text: content,
        post: postId,
      });

      const newComment: Comment = {
        id: response.data.id,
        text: response.data.text,
        createdDate: response.data.createdDate,
        userInfo: {
          userName: response.data.userInfo.userName,
          userprofilePhotoUrl:
            response.data.userInfo.userprofilePhotoUrl || defaultProfileImage,
        },
      };

      setComments((prevComments) => [...prevComments, newComment]);
      setLastCommentId(lastCommentId + 1);
      toast.success('댓글이 추가되었습니다!'); // 성공 메시지
    } catch (error) {
      toast.error('댓글 추가에 실패했습니다.'); // 오류 메시지
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <S.TitleWrapper>
        <NewTopBar title="커뮤니티" />
      </S.TitleWrapper>
      <S.PageWrapper>
        <S.CommunityPostWrapper>
          <CommunityPost postId={postId} />
          <JoinBtn potId={post.potId} />
        </S.CommunityPostWrapper>
        <AddComment postId={postId} onAddComment={handleAddComment} />
        <CommentList comments={comments} />
      </S.PageWrapper>
    </S.Container>
  );
};

export default CommunityDetail;
