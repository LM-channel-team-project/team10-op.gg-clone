import styled from 'styled-components';

export const RankTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  thead {
    vertical-align: middle;
    text-align: center;
    width: 100%;
    tr {
      vertical-align: inherit;
      width: 100%;
    }
  }
`;

export const TableHeader = styled.th`
  height: 47px;
  line-height: 15px;
  font-size: 12px;
  text-align: inherit;
  vertical-align: inherit;
  font-weight: normal;
  color: #777;
`;
