const restify = require('restify');

const data = require('./data');

const server = restify.createServer();

server.use(restify.CORS());
server.use(restify.bodyParser());

server.get('/adverts', (req, res, next) => {
  res.send(data);
  next();
});

server.post('/adverts', (req, res, next) => {
  data.push(req.body);
  res.send(data);
  next();
});


server.listen(3000, () => {
  console.log('%s listening at %s', server.name, server.url);
});
