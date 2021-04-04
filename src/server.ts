import next from 'next';
import express from 'express';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';

import { IS_PROD } from './constants';

const PORT = IS_PROD ? 3000 : 3000;

async function bootstrap() {
  const app = express();
  const nextApp = next({ dev: !IS_PROD });
  await nextApp.prepare();

  const handle = nextApp.getRequestHandler();

  app.use(
    '/lol',
    createProxyMiddleware({
      target: process.env.API_ENDPOINT,
      changeOrigin: true,
      onProxyReq(proxyRes) {
        proxyRes.setHeader('X-Riot-Token', process.env.RIOT_GAMES_API_KEY as string);
      },
    }),
  );
  app.use(express.json());

  app.all('*', (req, res) => handle(req, res));

  app.listen(PORT, () => {
    console.log(`>Ready on http://localhost:${PORT} -env ${process.env.NODE_ENV}`);
  });
}

bootstrap();
