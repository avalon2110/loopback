const db = require('./../db');
module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/api/users_info', (req, res) => {
    db.query('SELECT * FROM my_func();')
      .then(data => res.send(data.rows))
  });
  app.use(router);
}
