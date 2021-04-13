import styled from 'styled-components';
import palette from '@/lib/styles/palette';

const FooterContainer = styled.footer<{ currentPath: string }>`
  padding: 40px 0;
  width: 100%;
  max-width: 1080px;
  font-size: 0.75rem;
  color: ${({ currentPath }) => (currentPath === '/' ? palette.white : palette.black)};

  .footer-address {
    display: flex;
    flex-wrap: wrap;
  }
  .footer-body {
    display: flex;
  }

  .footer-copyright {
    margin: 8px 20px 0 0;
    font-size: 0.6875rem;
    line-height: 1.5;
  }
`;

const FooterItemLink = styled.a<{ currentPath: string }>`
  white-space: nowrap;
  &.sns-icon {
    align-self: flex-end;
  }

  &:link,
  &:visited {
    color: ${({ currentPath }) => (currentPath === '/' ? palette.white : palette.black)};
  }

  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-left: 20px;
  }

  &.sns-icon + &.sns-icon {
    margin-left: 10px;
  }

  svg {
    fill: ${({ currentPath }) => (currentPath === '/' ? palette.white : '#889498')};
    vertical-align: bottom;
  }
`;

export default { FooterContainer, FooterItemLink };
