import { useRouter } from 'next/router';

function Champion() {
  const router = useRouter();
  // 챔피언 이름
  const { champion } = router.query;
  return (
    <>
      <h1># 챔피언 상세보기</h1>
      <p>{champion}</p>
    </>
  );
}

export default Champion;
