import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 1080px;
  margin: 10px auto 0;
`;

export const ContentMain = styled.div`
  width: 228px;
`;

export const ContentSide = styled.div`
  width: 842px;
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
      ul.skill-list {
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

  table {
    width: 100%;
    table-layout: fixed;
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
    tbody {
      tr {
        table {
          margin: 10px 0;
          max-width: 485px;
        }
        td.cell-skill {
          vertical-align: middle;
          height: 62px;
          background: #f5f5f5;
          text-align: center;
          font-size: 13px;
          color: #666;
        }
        td.cell-data {
          padding-left: 30px;
          text-align: left;
        }
        td.cell-pick-rate {
          font-weight: bold;
          color: #4a4a4a;
          em {
            display: block;
            font-size: 11px;
            color: #999;
            font-style: normal;
          }
        }
        td.cell-win-rate {
          font-weight: normal;
          color: #4a4a4a;
        }
      }
      tr:nth-child(even) {
        td.cell-skill {
          background: #ebebed;
        }
      }
    }
  }
`;
