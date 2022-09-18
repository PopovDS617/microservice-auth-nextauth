import UserProfile from '../components/UserProfile';
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import { getSession } from 'next-auth/client';

const ProfilePage = () => {
  return <UserProfile />;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return { redirect: { destination: '/auth', permanent: false } };
  }

  return {
    props: { session },
  };
};

export default ProfilePage;
