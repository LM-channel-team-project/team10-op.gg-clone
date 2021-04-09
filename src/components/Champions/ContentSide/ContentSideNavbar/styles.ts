import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-bottom: solid 1px #e9eff4;
  display: flex;
  justify-content: space-between;
  h2.content-side__navbar__title {
    line-height: 17px;
    font-size: 14px;
    font-weight: bold;
    color: #222;
    padding: 17px 0 16px 21px;
  }
  ul.content-side__navbar__items {
    display: flex;
    margin-right: 10px;
    li {
      a {
        display: inline-block;
        min-width: 40px;
        vertical-align: middle;
        text-align: center;
        line-height: 17px;
        font-size: 14px;
        text-align: left;
        color: #777;
        padding: 16px 5px 14px;
        cursor: pointer;
      }
      a:active {
        box-shadow: 0 0 0 1px #4990e2 inset;
      }
    }
    li.tier {
      a > div {
        display: inline-block;
        width: 14px;
        height: 17px;
        background: url('assets/champions/icon-champion-n.png') no-repeat;
        vertical-align: middle;
        margin-top: -2px;
        margin-right: 4px;
      }
    }
    li.common::before {
      content: '';
      display: inline-block;
      margin: 0 10px;
      border-left: 1px solid #f2f3f5;
      height: 14px;
      vertical-align: middle;
    }
    li.selected {
      a {
        font-weight: bold;
        color: #4990e2;
        border-bottom: 2px solid #4990e2;
      }
      a > div {
        background: url('assets/champions/icon-champion-p.png') no-repeat;
      }
    }
  }
`;
