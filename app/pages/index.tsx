import React from 'react';
import NextLink from 'next/link';

import { Layout, Counter } from '../components';

const IndexPage: React.StatelessComponent = (): JSX.Element => (
  <Layout title="Home Page">
    <div>Hello Nexjs User</div>
    <NextLink href="/dataFetch">
      <div>DataFetch</div>
    </NextLink>
    <Counter />
  </Layout>
);

export default IndexPage;
