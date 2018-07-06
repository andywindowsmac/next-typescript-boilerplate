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
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css'
      integrity='sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy'
      crossOrigin='anonymous'
    />
    <style>{`
      body {
        min-height: 100vh;
      }
    `}</style>
  </NextHead>
);

export default Head;
