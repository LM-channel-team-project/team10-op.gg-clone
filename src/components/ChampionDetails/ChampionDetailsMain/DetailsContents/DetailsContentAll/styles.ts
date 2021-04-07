import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const AllTable = styled.table`
  width: 100%;
  background-color: #f5f5f5;
  border: solid 1px #e6e6e6;
  border-collapse: collapse;
  th {
    height: 40px;
    background: #fff;
    border-bottom: solid 1px #e6e6e6;
    vertical-align: middle;
    line-height: 17px;
    font-size: 14px;
    letter-spacing: -0.2px;
    color: #777;
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
  }
  tbody {
    tr {
      border-top: 1px solid #e6e6e6;
      td {
        padding: 10px 0 10px 20px;
        ul {
            display: flex;
              font-size: 0;
              list-style: none;
              margin: 0;
              padding: 0;
            li {
              position: relative;
              img {
                border: 1px solid #000;
                border-radius: 2px;
                display: block;
                width: 42px;
                height: 42px;
                box-sizing: border-box;
              }
            }
            li.arrow {
              width: 20px;
              height: 42px;
              line-height: 42px;
              text-align: center;
            }
          }
        }
      }
    }
        tr:first-child{
        border-top:none;
    }
  }
`;

export const DetailsContentAllMain = styled.div`
  width: 734px;
`;

export const DetailsContentAllSide = styled.div``;
