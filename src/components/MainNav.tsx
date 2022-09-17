import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

const MainNav = () => {
  const { data: session, status } = useSession();

  const router = useRouter();
  const currentPath = router.pathname;

  const logoutHandler = () => {
    signOut({ redirect: false });
    router.replace('/auth');
  };

  return (
    <header className="w-full h-20 flex justify-between items-center bg-emerald-900 text-white text-2xl">
      <Link href="/">
        <a className="w-3/12 ml-5">
          <div>next-auth microservice</div>
        </a>
      </Link>
      <nav>
        <ul className="w-9/12 mr-10 flex justify-center items-center gap-5">
          {!session && status !== 'loading' && (
            <li
              className={`p-2  rounded-lg hover:bg-emerald-100 hover:text-emerald-900 ${
                currentPath === '/auth'
                  ? 'bg-white text-emerald-900  hover:bg-white'
                  : ''
              }`}
            >
              <Link href="/auth">Login</Link>
            </li>
          )}

          {session && (
            <li
              className={`p-2  rounded-lg  hover:bg-emerald-100 hover:text-emerald-900 ${
                currentPath === '/profile'
                  ? 'bg-white text-emerald-900 hover:bg-white'
                  : ''
              }`}
            >
              <Link href="/profile">Profile</Link>
            </li>
          )}

          {session && (
            <li
              className={`p-2  rounded-lg  hover:bg-emerald-100 hover:text-emerald-900`}
            >
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
