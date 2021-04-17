import { useRouter } from 'next/router';
import React from 'react';

function Summoner() {
  const router = useRouter();
  const { summoner } = router.query;
  return (
    <>
      <h1># 유저 상세보기</h1>
      <p>{summoner}</p>
    </>
  );
}

export default Summoner;
