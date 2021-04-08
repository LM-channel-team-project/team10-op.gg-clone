import styled from 'styled-components';

export const RankTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const RankTableHead = styled.thead`
  vertical-align: middle;
  text-align: center;
  width: 100%;
  tr {
    vertical-align: inherit;
    width: 100%;
    th {
      height: 47px;
      line-height: 15px;
      font-size: 12px;
      text-align: inherit;
      vertical-align: inherit;
      font-weight: normal;
      color: #777;
    }
  }
`;

export const RankTableBodyContainer = styled.tbody`
  font-family: Helvetica, AppleSDGothic, 'Apple SD Gothic Neo', AppleGothic, Arial, Tahoma;
  tr {
    vertical-align: middle;
    border-color: inherit;
    td {
      background-color: #fff;
      border-top: solid 1px #e6e6e6;
      border-bottom: solid 1px #e6e6e6;
      height: 60px;
      vertical-align: middle;
    }
    td.table-cell-rank {
      border-left: solid 1px #e6e6e6;
      line-height: 18px;
      font-size: 16px;
      font-weight: 300;
      font-style: italic;
      text-align: center;
      color: #8b8b8b;
    }
    td.table-cell-shift {
      line-height: 14px;
      font-family: Helvetica, AppleSDGothic, 'Apple SD Gothic Neo', AppleGothic, Arial, Tahoma;
      font-size: 12px;
      text-align: left;
      color: #b6b6b6;
      img {
        display: inline-block;
        vertical-align: middle;
        margin-top: -2px;
      }
      span {
        margin-left: 2px;
      }
      span.down {
        color: #d0021b;
      }
      span.up {
        color: #1da900;
      }
    }
    td.table-cell-champion-meta {
      width: 100%;
      article.rank-table-body__champion-article {
        display: flex;
        align-items: center;
        cursor: pointer;
        div.champion-article__info {
          margin-left: 5px;
          p.champion-article__info__name {
            color: #4a4a4a;
            line-height: 15px;
            font-size: 12px;
            text-align: left;
          }
          p.champion-article__info__position {
            line-height: 15px;
            font-size: 12px;
            text-align: left;
            margin-top: 2px;
            color: #b6b6b6;
          }
        }
      }
    }
    td.table-cell-rate {
      text-align: center;
      font-weight: 300;
      font-size: 12px;
      color: #b6b6b6;
    }
    td.blue {
      font-weight: bold;
      color: #4a90e2;
    }
    td.table-cell-tier-badge {
      text-align: center;
      vertical-align: middle;
      padding-top: 5px;
    }
    td.border-right {
      border-right: solid 1px #e6e6e6;
    }
  }
`;
