import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  max-width: 624px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 19%);

  .home-search-form-submit-btn {
    flex-basis: 50px;
    flex-shrink: 0;
    height: 30px;
    margin: 0 10px;
    padding: 0;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    background-color: #00a9ff;
  }
`;

const InputContainer = styled.div`
  flex-basis: 100%;
  height: 100%;

  .home-search-input-label {
    overflow: hidden;
    border: 0;
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
  }
  .home-search-input {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    border: none;
    outline: none;
    border-radius: 2px;
    color: #9b9b9b;
    font-size: 0.875rem;
  }
`;
export default { SearchForm, InputContainer };
