import React from 'react';

import S from './style';

interface HomeRegionLangRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label: string;
  name: string;
  imagePath?: string;
}

function HomeRegionLangRadio({ id, label, name, imagePath, ...props }: HomeRegionLangRadioProps) {
  return (
    <S.ModalRadionContainer imagePath={imagePath} checked={props.checked}>
      <input type="radio" id={id || label} name={name} {...props} className="region-lang-radio" />
      <label htmlFor={id || label} className="region-lang-block">
        <span className="region-lang-label">{label}</span>
      </label>
    </S.ModalRadionContainer>
  );
}

export default React.memo(HomeRegionLangRadio);
