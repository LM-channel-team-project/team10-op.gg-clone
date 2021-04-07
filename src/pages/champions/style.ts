import styled from 'styled-components';

import palette from '@/lib/styles/palette';

export const ContentSection = styled.section`
  width: 1080px;
  margin: 15px auto 0;
  justify-content: space-between;
  background-color: rgb(234, 234, 234);
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  p.message__left {
    float: left;
    line-height: 18px;
    font-size: 12px;
    color: #9b9b9b;
  }
  p.message__right {
    float: right;
    line-height: 18px;
    font-size: 12px;
    text-align: right;
    color: #4a4a4a;
    img {
      vertical-align: middle;
      margin-right: 9px;
    }
  }
`;