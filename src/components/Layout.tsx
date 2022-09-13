import { Fragment, PropsWithChildren } from 'react';

import MainNav from './MainNav';

const Layout = (props: PropsWithChildren) => {
  return (
    <Fragment>
      <MainNav />
      <main className="h-screen text-black ">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
