import express from 'express';
import bodyParser from 'body-parser';


const app = express()
const port = process.env.PORT || 1000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/v1', (req, res) => res.status(200).send({
    status: 'connection successful',
    message: 'Welcome to JokeTown!',
  }));
  
  
  app.use('*', (req, res) => {
    res.status(404).json({ message: 'Page Not Found. Please go to /api/v1 to use our api' });
  });

app.listen(port, () => console.log(`JokeTown is running on http://localhost ${port}`));

export default app;