import { SFC } from 'react';

import NextHead from 'next/head';

interface IHeadOwnProps {
  title: string;
}

const Head: SFC<IHeadOwnProps> = ({ title }): JSX.Element => (
  <NextHead>
    <title>{title}</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  </NextHead>
);

export default Head;
