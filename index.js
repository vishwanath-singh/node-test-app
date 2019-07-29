const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/';
const currDate = require('./currDate');

// app.use('/static', express.static(__dirname + '/'));

router.use((req, res, next) => {
  console.log('/' + req.method);
  next();
});

router.get('/', (req, res) => {
  const html = `<html>
  <body>
  <a href="/Page1">Page 1</a>
  <a href="/Page2">Page 2</a>
 </body>
  </html>`;

  res.send(html);
});

router.get('/Page1', (req, res) => {
  const html = `<html>
<body>
  <p id="Page1"></p>
  <p>${currDate.PageOne()}</p>
  <h3>Page 1</h3>
  <a href="/Page2">Page 2</a>
  
</body>
</html>`;

  res.send(html);
});

router.get('/Page2', (req, res) => {
  const html = `<html>
  <body>
    <p id="Page2"></p>
    <p>${currDate.PageTwo()}</p>
    <h3>Page 2</h3>
    <a href="/Page1">Page 1</a>
   
  </body>
</html>`;

  res.send(html);
});

app.use('/', router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
