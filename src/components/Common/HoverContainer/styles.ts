import styled from 'styled-components';

interface HoverContentProps {
  top?: string;
  left?: string;
}

export const HoverContent = styled.div<HoverContentProps>`
  position: absolute !important;
  display: none !important;
  width: 300px;
  padding: 10px !important;
  top: ${(props) => (props.top ? props.top : '-87px')} !important;
  left: ${(props) => (props.left ? props.left : '-131px')} !important;
  background-color: #111;
  color: white;
  font-size: 12px;
  text-align: left;
  z-index: 9999;
  &:after {
    position: absolute;
    border-top: 10px solid #111;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0 solid transparent;
    content: '';
    bottom: -10px;
    left: 130px;
    z-index: 9998;
  }
  p.title {
    font-weight: bold;
    color: #ffc659;
  }
`;
export const Container = styled.div`
  position: relative !important;
  &:hover {
    ${HoverContent} {
      display: block !important;
    }
  }
`;
