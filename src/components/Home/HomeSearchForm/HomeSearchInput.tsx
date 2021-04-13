import React from 'react';

import S from './style';

interface HomeSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function HomeSearchInput({ label, ...props }: HomeSearchInputProps) {
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
