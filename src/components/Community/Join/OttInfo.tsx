import React from 'react';
import * as S from './OttInfo.Style';

interface OttProps {
  image: string;
  name: string;
  ratePlan: string;
  price: number;
  memberCount: number;
}

interface OttInfoProps {
  ott: OttProps; // ott 정보를 props로 받음
  ratePlan: string;
}

const OttInfo = ({ ott, ratePlan }: OttInfoProps) => {
  return (
    <S.OttInfoWrap>
      <S.Header>
        <S.OttImage src={ott.image} alt={`${ott.name} 로고`} />
        <S.OttName>{ott.name}</S.OttName>
      </S.Header>
      <S.OttDetails>
        <S.DetailRow>
          <S.Label>요금제</S.Label>
          <S.OttText>{ott.ratePlan}</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>가격</S.Label>
          <S.OttText>{ott.price}원</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>납부일</S.Label>
          <S.OttText>{ratePlan}</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>현재 팟 인원</S.Label>
          <S.OttText>{ott.memberCount}명</S.OttText>
        </S.DetailRow>
      </S.OttDetails>
    </S.OttInfoWrap>
  );
};

export default OttInfo;
