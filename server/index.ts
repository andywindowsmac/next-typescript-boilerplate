
import * as express from 'express';
import * as next from 'next'

import Cache from './Cache';

const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: 'app', dev });
const handle = app.getRequestHandler();
const renderAndCache = Cache(app);

(async () => {
  await app.prepare();
  const server = express();

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/', null);
  })

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;

    console.log('Run on port > ', PORT);
  });
})();
