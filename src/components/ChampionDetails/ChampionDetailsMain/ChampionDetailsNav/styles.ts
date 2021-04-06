import styled from 'styled-components';

export const DetailsNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #dcdcdc;
  ul {
    width: 1080px;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    list-style: none;
    li {
      text-align: -webkit-match-parent;
      cursor: pointer;
      a {
        display: block;
        padding: 12px 20px 10px;
        font-size: 15px;
        color: #777;
        text-decoration: none;
        &:active {
          outline: 1px solid #4990e2;
        }
      }
      a.counter {
        color: #d0011b;
      }
      &.selected {
        font-weight: bold;
        a {
          color: #4990e2;
          border-bottom: 2px solid #4990e2;
        }
      }
    }
  }
`;
