import { Fragment, PropsWithChildren } from 'react';

import MainNav from './MainNav';

const Layout = (props: PropsWithChildren) => {
  return (
    <Fragment>
      <MainNav />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
