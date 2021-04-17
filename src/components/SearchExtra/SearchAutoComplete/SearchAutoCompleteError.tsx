import React from 'react';

import S from './style';

type ErrorStatus = 402 | 403 | 404 | 429 | 502 | 503 | 504;

function SearchAutoCompleteError({ status }: { status?: number }) {
  if (!status) return null;
  return <S.AutoCompleteError>{errorMessage[status as ErrorStatus]}</S.AutoCompleteError>;
}

const errorMessage: Record<ErrorStatus, string> = {
  402: '다음에 다시 이용해주세요.',
  403: '다음에 다시 이용해주세요.',
  404: '존재하지 않은 사용자입니다.',
  429: '잠시 후 다시 이용해주세요',
  502: '라이엇 서버 오류',
  503: '라이엇 서버 오류',
  504: '라이엇 서버 오류',
};

export default React.memo(SearchAutoCompleteError);
