import styled from 'styled-components';

export const Td = styled.td`
  vertical-align: inherit;
  display: table-cell;
  padding: 0;
`;

export const RuneTableHeader = styled.div`
  margin: 10px auto 0;
  display: table;
  white-space: nowrap;
  div.tab {
    display: table-cell;
    min-width: 320px;
    min-height: 66px;
    background-color: #f9f9fa;
    border: solid 1px #e9eff4;
    a {
      display: block;
      padding: 11px 12px;
      text-decoration: none;
      div.rune-image {
        float: left;
        font-size: 0;
        img {
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
      }
      div.rune-name {
        margin-top: 6px;
        margin-left: 120px;
        line-height: 16px;
        font-size: 14px;
        color: #777;
      }
      div.rune-rate {
        display: block;
        margin-top: 6px;
        line-height: 15px;
        font-size: 12px;
        margin-left: 120px;
        white-space: nowrap;
        span {
          letter-spacing: -1.1px;
          color: #777;
          display: inline-block;
          margin-left: 10px;
        }
        span:first-child {
          margin-left: 0;
        }
        strong {
          display: inline-block;
          margin-left: 10px;
          color: black;
          font-weight: bold;
        }
      }
    }
  }
  div.tab.active {
    background: #fff;
  }
`;

export const RuneTableMain = styled.tbody`
  tr {
    border-top: 1px solid #e6e6e6;
    td {
      padding: 10px 0 10px 20px;
      display: table-ceil;
      vertical-align: inherit;
      div.rune-box-wrap {
        text-align: left;
        font-size: 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 10px;
        div.rune-box {
          display: inline-block;
          vertical-align: bottom;
          max-width: 170px;
          box-sizing: border-box;
          div.rune-box-row {
            display: table;
            width: 100%;
            table-layout: fixed;
            div.rune-box-item {
              display: table-cell;
              padding: 4px 0;
              text-align: center;
              div.rune-image {
                display: block;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: #ededed;
                margin: 0 auto;
                overflow: hidden;
                img {
                  display: block;
                  width: 100%;
                  height: 100%;
                  opacity: 0.5;
                }
              }
            }
            div.rune-box-mark {
              width: 100%;
              img.rune-image {
                display: block;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: #ededed;
                margin: 0 auto;
                overflow: hidden;
              }
            }
            div.rune-box-item.active {
              rune-image {
                background: #000;
                img {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 200px;
  background-color: #ddd;
  margin: 8px;
`;

export const FragmentBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0px 8px 4px 4px;
  div.fragment-detail {
    margin-left: 24px;
  }
`;

export const FragmentRow = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const Fragment = styled.div`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: #e5e5e5;
  div {
    width: 24px;
    height: 24px;
    background-color: #e5e5e5;
    display: block;
    border-radius: 50%;
    background: #ededed;
    margin: 0 auto;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background-color: #e5e5e5;
    }
  }

  .last-child {
    margin-right: 0;
  }
`;

export const RuneRatio = styled.td`
  text-align: center;
  display: table-cell;
  span {
    display: block;
    margin-top: 3px;
    line-height: 15px;
    font-family: 'Helvetica Neue', Helvetica, AppleSDGothic, 'Apple SD Gothic Neo', AppleGothic,
      Arial, Tahoma;
    font-size: 13px;
    color: #777;
  }
  strong {
    display: block;
    line-height: 16px;
    font-family: 'Helvetica Neue', Helvetica, AppleSDGothic, 'Apple SD Gothic Neo', AppleGothic,
      Arial, Tahoma;
    font-size: 13px;
    font-weight: bold;
    color: #4a4a4a;
  }
  span.win-rate {
    margin-top: 32px;
  }
`;
