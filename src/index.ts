import express from 'express';

const main = (): void => {
  const app = express();

  app.listen(8000, () => {
    // eslint-disable-next-line no-console
    console.log('server is listening at http://localhost:8000');
  });
};

main();
