//인가 코드 프론트에서 추출하는 로직
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import LoadingPage from '../Loading/LoadingPage';

const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code'); // 인가 코드 추출

  useEffect(() => {
    if (code) {
      // Step 1: 인가 코드를 이용해 백엔드에서 카카오 액세스 토큰 요청 (GET 방식)
      axiosInstance

        .get('/api/oauth/kakao', { params: { code } }) //인가 코드 보내기
        .then((response) => {
          const kakaoToken = response.data.accessToken; // 백엔드에서 받은 카카오 토큰

          // Step 2: 카카오 액세스 토큰을 이용해 백엔드에서 JWT 토큰을 요청 (Post)
          return axiosInstance.post('/api/oauth/login', { kakaoToken });
        })
        .then((response) => {
          const data = response.data;

          // 서버로부터 받은 액세스 토큰을 로컬 스토리지에 저장
          localStorage.setItem('access_token', data.access_token); // 백엔드 서버 액세스 토큰
          navigate('/main'); // 로그인 성공 후 홈 페이지로 리다이렉트
        })
        .catch((error) => {
          console.error('로그인 실패', error);
        });
    } else {
      console.error('인가 코드를 찾을 수 없음');
    }
  }, [code, navigate]);

  return <LoadingPage />;
};

export default RedirectHandler;
