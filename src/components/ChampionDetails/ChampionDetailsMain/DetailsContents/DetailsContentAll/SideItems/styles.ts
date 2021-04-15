import styled from 'styled-components';

export const ChampionBox = styled.div`
  background-color: #f9f9fa;
  border: solid 1px #e6e6e6;
`;

export const ChampionBoxHeader = styled.div`
  display: flex;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  div {
    a {
      text-decoration: none;
      h4 {
        padding: 12px 0 11px 20px;
        line-height: 17px;
        font-size: 14px;
        color: #222;
        letter-spacing: -0.2px;
        font-weight: bold;
      }
    }
  }
  div.more {
    position: absolute;
    right: 0;
    a {
      display: block;
      margin-top: 5px;
      margin-right: 14px;
      padding: 6px;
      img {
        display: block;
      }
    }
  }
`;
