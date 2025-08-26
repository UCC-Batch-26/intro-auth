import bodyParser from 'body-parser';
import express from 'express';
import process from 'node:process';
import authRoutes from './modules/auth/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.set('port', PORT);

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
