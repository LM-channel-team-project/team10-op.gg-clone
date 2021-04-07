import styled from 'styled-components';

export const TabHeaderContainer = styled.div`
  ul {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    li.content-side__tab-header__item {
      display: table-cell;
      vertical-align: center;
      background-color: #f9f9fa;
      border: solid 1px #e9eff4;
      cursor: pointer;
      a {
        display: block;
        padding: 11px 0 10px;
        text-decoration: none;
        text-align: center;
        line-height: 15px;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: -1px;
        color: #b6b6b6;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    li.selected {
      background-color: #fff;
      a {
        color: #4a4a4a;
      }
    }
  }
`;
