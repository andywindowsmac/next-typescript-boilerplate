/*
  Load data on the server side
*/
import React from 'react';
import axios from 'axios';
import NextLink from 'next/link';

import { Head, Counter, DataFetch } from '../components';

interface IDataFetchPage {
  stars?: string;
}

class DataFetchPage extends React.PureComponent<IDataFetchPage> {
  static async getInitialProps() {
    const { data } = await axios.get('https://api.github.com/repos/zeit/next.js');
    return { stars: data.stargazers_count }
  }

  render() {
    return (
      <div>
        <Head title="Data Fetch" />
        <DataFetch stars={this.props.stars} />
        <NextLink href="/">
          <div>DataFetch</div>
        </NextLink>
        <Counter />
      </div>
    );
  }
}

export default DataFetchPage;
