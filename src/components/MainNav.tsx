import Link from 'next/link';

function MainNav() {
  return (
    <header>
      <Link href="/">
        <a>
          <div>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/auth">Login</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
