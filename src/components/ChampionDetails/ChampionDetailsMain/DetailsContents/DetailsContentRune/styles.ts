import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 1080px;
  margin: 10px auto 0;
`;

export const ContentMain = styled.div`
  width: 318px;
`;

export const ContentSide = styled.div`
  width: 752px;
  margin-left: 8px;
`;

export const ChampionBox = styled.div`
  margin-top: 10px;
  background-color: #f9f9fa;
  border: solid 1px #e6e6e6;
  div.champion-box-header {
    position: relative;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    text-align: left;
    h4 {
      padding: 12px 0 11px 20px;
      line-height: 17px;
      font-size: 14px;
      color: #222;
      letter-spacing: -0.2px;
      font-weight: bold;
    }
  }
`;

export const ChampionBoxContent = styled.div`
  background: #fafafa;
  overflow: hidden;
  ul.filter {
    li.filter-item {
      border-left: 8px solid transparent;
      padding: 13px 0 13px 22px;
      background-color: #f9f9fa;
      border-top: solid 1px #e9eff4;
      cursor: pointer;
      img.rune {
        display: inline-block;
        border-radius: 50%;
        vertical-align: bottom;
      }
      img.keystone {
        background: #000;
        margin-bottom: -1px;
        margin-left: -9px;
      }
      img.sub-rune {
        margin-left: 13px;
      }
      div.item-value {
        display: table;
        margin-top: 10px;
        div.rate {
          display: table-row;
          line-height: 15px;
          span {
            padding-top: 5px;
            display: table-cell;
            font-size: 12px;
          }
          b {
            display: table-cell;
            padding-top: 4px;
            padding-left: 10px;
            font-size: 13px;
            font-weight: normal;
            color: #222;
          }
        }
        div.rate:first-child {
          b {
            font-weight: 600;
          }
        }
      }
    }
    li.filter-item:first-child {
      border-top: none;
    }
    li.filter-item.active {
      border-left-color: #3c8eec;
      background: #fff;
    }
  }
`;
