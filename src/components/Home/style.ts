import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  .main-page-logo {
    display: flex;
    padding: 32px 0 24px;
  }
`;

const HomeAdsBannerContainer = styled.aside`
  display: flex;
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 728px;
    height: 90px;
    background-color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export default { Container, HomeAdsBannerContainer };
