const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routers = require('./routers/routes');

app.use(express.static('./client/dist'));
app.use(bodyParser.json());

app.use('/api', routers);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
