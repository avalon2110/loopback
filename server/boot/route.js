const db = require('./../db');
module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/users_info', (req, res) => {
    db.query('SELECT my_func()')
      .then(data => res.send(data.rows))
  });
  app.use(router);
}
