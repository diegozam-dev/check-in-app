'use client';
import { users } from '@/mock/data';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const user = users[0];

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${user.username}`);
  });
};

export default Home;
