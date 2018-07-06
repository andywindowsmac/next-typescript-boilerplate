import React, { SFC } from 'react';

import { Head } from './';

interface ILayoutOwnProps {
  title: string;
};

const Layout: SFC<ILayoutOwnProps> = ({ title, children }) =>
  <React.Fragment>
    <Head title={title} />
    {children}
  </React.Fragment>


export default Layout;