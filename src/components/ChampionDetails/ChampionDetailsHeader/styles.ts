import styled from 'styled-components';

export const DetailsHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 265px;
  position: relative;
  overflow: hidden;
  color: #fff;
  background: #292e38;
`;

export const DetailsHeaderPosition = styled.div`
  position: relative;
  width: 1080px;
  margin: 0 auto;
  ul {
    position: relative;
    width: 1080px;
    margin-top: 30px;
    list-style: none;
    li {
      display: inline-block;
      margin-right: 10px;
      min-width: 200px;
      height: 40px;
      border-radius: 2px;
      background: #414650;
      color: #c7c7c7;
      list-style: none;
      cursor: pointer;
      a {
        display: block;
        padding: 8px 20px 8px 16px;
        text-decoration: none;
        line-height: 24px;
        color: inherit;
      }
    }
  }
`;

export const DetailsHeaderMain = styled.div`
  margin: 0 auto;
  width: 1080px;
`;

export const DetailsHeaderInfo = styled.div`
  float: left;
  margin-top: 30px;
  margin-bottom: 24px;
  width: 610px;
`;

interface InfoChampionImageProps {
  championImageUrl: string;
}

export const InfoChampionImage = styled.div<InfoChampionImageProps>`
  position: relative;
  float: left;
  margin-right: 20px;
  div {
    width: 140px;
    height:140px;
    border: 4px solid #fff;
    box-sizing: border-box;
    background: url(${(props) => props.championImageUrl});
    background-size:contain;
    }
  }
`;

export const InfoChampionName = styled.h1`
  margin-top: 35px;
  line-height: 29px;
  font-size: 24px;
  letter-spacing: -0.9px;
  text-align: left;
  color: #fff;
  font-weight: normal;
`;

export const InfoChampionTier = styled.div`
  margin-top: 7px;
  line-height: 18px;
  font-size: 14px;
  color: #9c9c9c;
  b {
    color: #ffb503;
    font-weight: normal;
  }
`;

export const InfoChampionSkills = styled.div`
  margin-top: 10px;
  div {
    position: relative;
    float: left;
    border: 1px solid #000;
    border-radius: 2px;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: url('assets/champions/champion82.png');
    background-position-y: -82px;
    a {
      color: inherit;
      img {
        display: block;
        width: 100%;
        border: 0;
      }
    }
  }
`;

export const DetailsHeaderMatchup = styled.div`
  float: right;
  margin-top: 20px;
  width: 335px;

  }
`;
