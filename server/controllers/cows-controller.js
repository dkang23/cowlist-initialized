var { create, getAll } = require('../db/index.js');

var get = (req, res) => {
  getAll()
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

var post = (req, res) => {
  create(req.body)
    .then((data) => {
      console.log(data);
      res.status(200).send(req.body);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { get, post };
