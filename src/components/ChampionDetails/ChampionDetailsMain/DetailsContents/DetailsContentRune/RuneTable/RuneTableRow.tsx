import React from 'react';

interface PropsType {
  line: string[];
}

export const KeystoneRow = ({ line }: PropsType) => {
  const runeRow = line.map((item, i) => (
    <div key={i} className="rune-item">
      <img
        src={item}
        alt="키스톤"
        className={item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'}
      />
    </div>
  ));

  return <div className="rune-page-row">{runeRow}</div>;
};

export const RuneRow = ({ line }: PropsType) => {
  const runeRow = line.map((item, i) => (
    <div key={i} className="rune-item">
      <img
        src={item}
        alt="키스톤"
        className={item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'}
      />
    </div>
  ));

  return <div className="rune-page-row">{runeRow}</div>;
};

export const FragmentRow = ({ line }: PropsType) => {
  const fragmentRow = line.map((item, i) => (
    <div key={'fragFirstLine' + i} className="fragment">
      <img
        src={item}
        className={item.includes('image=c_scale') ? 'fragment-image opacity' : 'fragment-image'}
        alt="스탯"
      />
    </div>
  ));

  return <div className="fragment-row">{fragmentRow}</div>;
};
