import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = 1245;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

export default app;
