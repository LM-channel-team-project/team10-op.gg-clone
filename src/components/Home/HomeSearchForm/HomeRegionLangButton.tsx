import React from 'react';
import styled from 'styled-components';

interface HomeRegionLanguageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  currentRegion: string;
}

function HomeRegionLangButton({ currentRegion, ...props }: HomeRegionLanguageButtonProps) {
  return (
    <StyledButton {...props}>
      <span className="current-Region">{currentRegion}</span>
      <span className="btn-icon">&#x25BE;</span>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding: 10px 6px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  span {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
  }

  .current-Region {
    background-color: #788185;
    height: 16px;
    padding: 0 7px;
    color: #ffffff;
    font-size: 0.6875rem;
    font-weight: 500;
    margin-right: 14px;
  }
  .btn-icon {
    color: #788185;
  }
`;

export default React.memo(HomeRegionLangButton);
