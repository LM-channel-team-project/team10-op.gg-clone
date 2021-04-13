import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 10px;
  margin-right: 0;
  table-layout: fixed;
  white-space: nowrap;
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    tr {
      border-top: 1px solid #e6e6e6;
      th {
        background: #fff;
        border: solid 1px #ced2d5;
        line-height: 12px;
        font-family: 'Helvetica Neue', Helvetica, AppleSDGothic, 'Apple SD Gothic Neo', AppleGothic,
          Arial, Tahoma;
        font-size: 11px;
        letter-spacing: -0.4px;
        color: #777;
        width: 29px;
        height: 29px;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
      }
      td {
        position: relative;
        background: #f9f9fa;
        border: solid 1px #ced2d5;
        line-height: 14px;
        font-family: 'Helvetica Neue', Helvetica, AppleSDGothic, 'Apple SD Gothic Neo', AppleGothic,
          Arial, Tahoma;
        font-size: 12px;
        letter-spacing: -0.5px;
        text-align: center;
        color: #4a4a4a;
        width: 29px;
        height: 29px;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0;
      }
    }
  }
`;
