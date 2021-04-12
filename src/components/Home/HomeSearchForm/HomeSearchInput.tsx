import React from 'react';

import S from './style';

interface HomeSearchInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function HomeSearchInput({ label, ...props }: HomeSearchInput) {
  return (
    <S.InputContainer>
      <label htmlFor={label} className="home-search-input-label">
        {label}
      </label>
      <input id={label} name={label} type="text" className="home-search-input" {...props} />
    </S.InputContainer>
  );
}

export default HomeSearchInput;
