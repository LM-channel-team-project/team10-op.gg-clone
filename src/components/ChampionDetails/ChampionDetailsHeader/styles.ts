import styled from 'styled-components';

export const DetailsHeaderContainer = styled.div`
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

export const InfoChampionImage = styled.div`
  position: relative;
  float: left;
  margin-right: 20px;
  div {
    width: 140px;
    height:140px;
    border: 4px solid #fff;
    box-sizing: border-box;
    background: url('assets/champions/champion82.png');
    background-position-y: -200px
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
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-right: 4px;
      margin-bottom: 11px;
      float: left;
      width: 150px;
      margin-left: 4px;
      border-radius: 2px;
      border: solid 1px #979797;
      color: #9c9c9c;
      background: none;
      a {
        display: block;
        line-height: 15px;
        font-size: 12px;
        text-decoration: none;
        text-align: center;
        padding-top: 6px;
        padding-bottom: 5px;
        color: inherit;
      }
    }
  }
`;

export const TabItems = styled.table`
  width: 100%;
  color: #fff;
  tr {
    cursor: pointer;
    height: 40px;
    td {
      padding: 1px;
    }
  }
`;

export const TabItemsChampionInfo = styled.td`
  line-height: 15px;
  font-size: 13px;
  width: 156px;
  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-right: 12px;
    border-radius: 16px;
  }
`;

export const TabItemsWinRate = styled.td`
  line-height: 17px;
  font-size: 13px;
  text-align: center;
  width: 106px;
`;

export const TabItemsCounter = styled.td`
  text-align: right;
  white-space: nowrap;
  line-height: 15px;
  width: 67px;
  font-size: 12px;
  color: #9c9c9c;
`;
