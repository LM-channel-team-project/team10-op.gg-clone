import { useRouter } from 'next/router';
import React from 'react';

function User() {
  const router = useRouter();
  const { user } = router.query;
  return (
    <>
      <h1># 유저 상세보기</h1>
      <p>{user}</p>
    </>
  );
}

export default User;
