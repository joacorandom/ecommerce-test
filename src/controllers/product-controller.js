const { OK } = require('http-status-codes');

function search(req, res) {
  return res.status(OK).json({});
}

module.exports = {
  search,
};
