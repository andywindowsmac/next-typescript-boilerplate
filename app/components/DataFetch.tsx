import { SFC } from 'react';

interface IDataFetchOwnProps {
  stars: string;
}

const DataFetch: SFC<IDataFetchOwnProps> = ({ stars }): JSX.Element => (
  <div>
    {stars} ⭐
  </div>
);

export default DataFetch;
