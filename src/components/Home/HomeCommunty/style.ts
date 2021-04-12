import styled from 'styled-components';
import palette from '@/lib/styles/palette';

const HomeCommunityContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  background-color: ${palette.white};
  .home-community-anchor {
    padding: 18px 20px;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1;
    &:link,
    &:visited {
      text-decoration: none;
      color: ${palette.black};
    }
  }
  .content-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 204px;
  }
  @media only screen and (max-width: 640px) {
    width: auto;
    .content-list {
      height: auto;
      li:nth-child(n + 1):nth-child(-n + 5) {
        border-right: none;
      }
    }
  }
`;

const CommnityItem = styled.li<{ index: number }>`
  display: flex;
  flex-basis: 68px;
  align-items: center;
  width: 50%;
  min-width: 320px;
  overflow: hidden;
  border-top: 1px solid #f0f0f0;
  &:hover {
    background-color: #fbfbfb;
    .community-title {
      text-decoration: underline;
      color: #0475b8;
    }
  }
  &:nth-child(n + 1):nth-child(-n + 5) {
    border-right: 1px solid #f0f0f0;
  }
  @media only screen and (max-width: 640px) {
    &:nth-child(n + 1):nth-child(-n + 5) {
      border-right: none;
    }
  }

  .community-anchor {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 6px 0;
    font-weight: 300;
    color: #879292;
    &:link,
    &:visited {
      text-decoration: none;
    }
  }

  .community-index {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    font-size: 1.125rem;
    font-style: italic;
    color: ${({ index }) => (index < 4 ? '#1ab80c' : '#989898')};
  }
  .community-image {
    width: 100px;
    height: 100%;
    overflow: hidden;
    img {
      width: 100px;
      transform: translateY(-25%);
    }
  }
  .community-title {
    margin-left: 20px;
    color: #000000;
    font-size: 0.875rem;
  }
`;

export default { HomeCommunityContainer, CommnityItem };
