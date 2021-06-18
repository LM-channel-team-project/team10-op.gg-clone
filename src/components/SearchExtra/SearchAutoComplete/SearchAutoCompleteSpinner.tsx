import S from './style';

function SearchAutoCompleteSpinner() {
  return (
    <S.AutoCompleteSpinner>
      <svg className="spinner" viewBox="0 0 32 32">
        <circle className="path" cx="16" cy="16" r="12" fill="none" strokeWidth="3"></circle>
      </svg>
    </S.AutoCompleteSpinner>
  );
}

export default SearchAutoCompleteSpinner;
