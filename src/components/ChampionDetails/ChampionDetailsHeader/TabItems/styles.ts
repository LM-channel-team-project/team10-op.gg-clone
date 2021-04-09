import styled from 'styled-components';

export const TabItemList = styled.ul`
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
    cursor: pointer;
    span {
      display: block;
      line-height: 15px;
      font-size: 12px;
      text-decoration: none;
      text-align: center;
      padding-top: 6px;
      padding-bottom: 5px;
      color: inherit;
    }
    span.active {
      fort-weight: bold;
    }
  }
  li.active {
    background-color: #f2f2f2;
    border-color: #f2f2f2;
    color: #28272c;
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
  font-weight: bold;
`;

export const TabItemsCounter = styled.td`
  text-align: right;
  white-space: nowrap;
  line-height: 15px;
  width: 67px;
  font-size: 12px;
  color: #9c9c9c;
  img {
    border: 0;
    margin-left: 4px;
    margin-bottom: -1px;
  }
`;
