import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const router = express.Router();
const environment = process.env.NODE_ENV;

router.get('/*', async (_, res) => {
  const data = {
    environment,
    manifest: await parseManifest(),
  };

  res.render('index.html.ejs', data);
});

const parseManifest = async () => {
  if (environment !== 'production') return {};

  const manifestPath = path.join(path.resolve(), 'build', 'manifest.json');
  const manifestFile = await fs.readFile(manifestPath);

  return JSON.parse(manifestFile.toString());
};

 export default router;