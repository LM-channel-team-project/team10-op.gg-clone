import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const OverviewTable = styled.table`
  width: 100%;
  background-color: #f5f5f5;
  border: solid 1px #e6e6e6;
  border-collapse: collapse;
  margin-top: 10px;
  thead {
    th {
      height: 40px;
      background: #fff;
      border-bottom: solid 1px #e6e6e6;
      vertical-align: middle;
      line-height: 17px;
      font-size: 14px;
      letter-spacing: -0.2px;
      color: #777;
      text-align: center;
      a {
        text-decoration: none;
        color: inherit;
        h2 {
          line-height: 17px;
          font-size: 14px;
          padding-left: 20px;
          font-weight: bold;
          text-align: left;
          color: #222;
        }
      }
      span {
        text-align: center;
        font-weight: 600;
      }
    }
  }
  tbody {
    th {
      background: #f9f9fa;
      border-top: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
      line-height: 16px;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: -1.1px;
      text-align: center;
      color: #4a4a4a;
      vertical-align: middle;
      a {
        text-decoration: none;
        img {
          border: 0;
        }
      }
    }
    tr {
      border-top: 1px solid #e6e6e6;
      td {
        vertical-align: middle;
        text-align: center;
        padding: 10px 0 10px 20px;
        ul {
          display: flex;
          font-size: 0;
          list-style: none;
          li {
            position: relative;
            width: 42px;
            height: 42px;
            img {
              width: 100%;
              border: 1px solid #000;
              border-radius: 2px;
              display: block;
              box-sizing: border-box;
            }
          }
          li.arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 42px;
            img {
              width: 6px;
              height: 11px;
              vertical-align: middle;
              border: 0;
            }
          }
          li.arrow:last-child {
            display: none;
          }
        }
      }
      td.pick-rate {
        padding: 0 10px;
        strong {
          display: block;
          line-height: 16px;
          font-family: 'Helvetica Neue', Helvetica, AppleSDGothic, 'Apple SD Gothic Neo',
            AppleGothic, Arial, Tahoma;
          font-size: 13px;
          font-weight: bold;
          color: #4a4a4a;
        }
        span {
          display: block;
          margin-top: 3px;
          line-height: 15px;
          font-family: 'Helvetica Neue', Helvetica, AppleSDGothic, 'Apple SD Gothic Neo',
            AppleGothic, Arial, Tahoma;
          font-size: 13px;
          color: #777;
        }
      }
      td.win-rate {
        padding: 0 10px;
        strong {
          display: block;
          line-height: 15px;
          font-family: 'Helvetica Neue', Helvetica, AppleSDGothic, 'Apple SD Gothic Neo',
            AppleGothic, Arial, Tahoma;
          font-size: 13px;
          color: #777;
        }
      }
      td.rune-tab {
        vertical-align: inherit;
        display: table-cell;
        padding: 0;
      }
    }
    tr:first-child {
      border-top: none;
    }
  }
`;

export const DetailsContentAllMain = styled.div`
  width: 734px;
`;

export const DetailsContentAllSide = styled.div`
  margin-top: 10px;
  margin-left: 8px;
  width: 336px;
`;
