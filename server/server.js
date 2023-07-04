import express from 'express';
import path from 'path';
import pageRouter from './pageRouter.js';

const PORT  = process.env.NODE_ENV === 'production' ? 80 : 8080;

const app = express();

app.use('/public/', express.static(path.join(path.resolve(), 'public'), {extensions: ['svg']}));
app.use('/', express.static(path.join(path.resolve(), 'build')));

app.get('/api/test', (_, res) => {
  res.json({
    result: 'Hello world!'
  });
});

app.use(pageRouter);

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});