import AuthForm from '../components/AuthForm';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const AuthPage = () => {
  const [isLoading, setisLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } else {
        setisLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p className="text-center text-2xl">Loading ...</p>;
  } else {
    return <AuthForm />;
  }
};

export default AuthPage;
