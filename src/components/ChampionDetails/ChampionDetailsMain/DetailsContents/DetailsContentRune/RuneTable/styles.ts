import styled from 'styled-components';

export const ChampionRuneTable = styled.table`
  table-layout: auto;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  thead {
    tr {
      th {
        vertical-align: middle;
        height: 39px;
        background: #fff;
        border-bottom: 1px solid #e9eff4;
        line-height: 17px;
        font-size: 14px;
        color: #b6b6b6;
        font-weight: normal;
        text-align: center;
        width: 95px;
        background-image: url(../images/site/champion/select-over.png);
        background-repeat: no-repeat;
        background-position: right 20px center;
      }
      th.title {
        background-image: none;
        cursor: default;
        width: auto;
        text-align: left;
        font-weight: bold;
        color: #222;
        padding-left: 20px;
      }
      th.sort {
        background-image: url(../images/site/bg-tableSorter.png);
        background-repeat: no-repeat;
        background-position: 90% center;
        cursor: pointer;
        outline: none;
      }
    }
  }
  tbody.rune-tbody {
    tr {
      td.cell-data {
        padding-left: 15px;
        div.summary-rune {
          border-top: 1px solid #e9eff4;
          div.rune-box-wrap {
            margin: 12px 0;
            text-align: left;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 10px;
            font-size: 0;
            div.rune-page {
              display: inline-block;
              vertical-align: bottom;
              max-width: 170px;
              box-sizing: border-box;
              div.rune-page-row {
                display: table;
                width: 100%;
                table-layout: fixed;
                div.rune-item {
                  display: table-cell;
                  padding: 4px 0;
                  text-align: center;
                  img.rune-image {
                    display: block;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: #ededed;
                    margin: 0 auto;
                    overflow: hidden;
                    opacity: 0.5;
                  }
                  img.selected {
                    background-color: black;
                    opacity: 1;
                  }
                }
                div.main-rune {
                  width: 100%;
                }
                div.keystone {
                }
              }
            }
            div.page-divider {
              width: 1px;
              height: 200px;
              background-color: #ddd;
              margin: 0 8px;
            }
            div.fragment-page {
              display: flex;
              align-items: flex-end;
              margin: 0px 8px 4px 4px;
              div.fragment-detail {
                margin-left: 24px;
                div.fragment-row {
                  display: flex;
                  margin-top: 16px;
                  div.fragment {
                    margin-right: 12px;
                    width: 24px;
                    height: 24px;
                    border-radius: 24px;
                    background-color: #e5e5e5;
                    img.fragment-image {
                      display: block;
                      width: 100%;
                      height: 100%;
                    }
                    img.opacity {
                      opacity: 0.5;
                    }
                  }
                }
              }
            }
          }
        }
        div.summary-rune:first-child {
          border-top: none;
        }
      }
      td.item-value {
        text-align: center;
        vertical-align: middle;
        font-size: 13px;
      }
      td.pick-rate {
        font-weight: bold;
        color: #4a4a4a;
        em {
          display: block;
          font-size: 11px;
          color: #999;
          font-style: normal;
        }
      }
      td.win-rate {
        font-weight: normal;
        color: #4a4a4a;
      }
    }
    tr.hide {
      display: none;
    }
    tr:nth-child(even) {
      background: #ebebed;
    }
  }
`;
