const path = require('path');

module.exports = function (app, express) {
   app.get('*', (req, res, next) => {
    res.sendFile(path.resolve('client/index.html'));
  });
};