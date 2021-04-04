import client from '@/api/client';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    const a = async () => {
      const response = await client.get('/lol/clash/v1/tournaments');
      console.log(response.data);
    };
    a();
  }, []);
  return (
    <>
      <h1># 검색 메인페이지</h1>
    </>
  );
}
