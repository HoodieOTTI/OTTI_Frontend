import React, { useState } from 'react';
import * as S from './WritePost.Style';

const WritePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <S.WritePost>
      <S.TitleWrapper>
        <S.Input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </S.TitleWrapper>
      {/* <S.TextWrapper> */}
      <S.TextArea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {/* </S.TextWrapper> */}
    </S.WritePost>
  );
};

export default WritePost;