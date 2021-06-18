import styled from 'styled-components';

const AutoCompleteGroup = styled.ul`
  width: 100%;
`;

const AutoCompleteItem = styled.li<{ type: 'summoners' | 'champions'; isFocused: boolean }>`
  width: 100%;
  padding: 7px 17px;
  cursor: pointer;
  background-color: ${({ isFocused, type }) => {
    if (isFocused) return '#e8f5fe';
    return type === 'summoners' ? '#ffffff' : '#f9fafc';
  }};

  &:hover {
    background-color: #e8f5fe;
  }
  .autocomplete-anchor {
    display: flex;

    color: #666666;
    &:visited,
    &:link {
      color: #666666;
    }
  }
  .autocomplete-icon {
    border-radius: ${({ type }) => (type === 'summoners' ? '40px' : '0')};
  }
  .autocomplete-contents {
    margin-left: 14px;
    line-height: 1.3;
  }
  .autocomplete-name {
    font-size: 0.875rem;
    color: #d53f3f;
  }
  .autocomplete-info {
    margin-top: 2px;
    font-size: 0.75rem;
  }
`;

const AutoCompleteError = styled.div`
  display: flex;
  justify-content: center;
  align-items: centere;
  width: 100%;
  padding: 7px 17px;
  font-size: 0.75rem;
  font-weight: bold;
  color: #d53f3f;
`;

const AutoCompleteSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: centere;
  width: 100%;
  padding: 7px 17px;

  .spinner {
    animation: rotate 2s linear infinite;
    width: 32px;
    height: 32px;

    & .path {
      stroke: hsl(210, 70%, 75%);
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default { AutoCompleteGroup, AutoCompleteItem, AutoCompleteError, AutoCompleteSpinner };
