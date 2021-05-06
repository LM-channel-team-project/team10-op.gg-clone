import Link from 'next/link';
import styled from 'styled-components';

import palette from '@/lib/styles/palette';

function NotFound() {
  return (
    <SectionBlock>
      <h1>404</h1>
      <p>이런! 찾으시는 페이지가 없는 거 같아요 :(</p>
      <Link href="/">
        <a>홈으로 돌아가기</a>
      </Link>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  display: flex;
  width: 100%;
  height: 70vh;
  padding: 40px;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    line-height: 1;
    margin-top: 10vh;
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 32px;
    font-size: 1.25rem;
    font-weight: 400;
  }
  a {
    padding: 12px 24px;
    border-radius: 8px;
    color: #eeeeee;
    font-weight: 400;
    line-height: 1;
    background-color: ${palette.background_blue};

    &:visited,
    &:link {
      color: #eeeeee;
    }

    &:hover {
      color: #ffffff;
      background-color: ${palette.background_blue}D9;
    }
  }
`;

export default NotFound;
