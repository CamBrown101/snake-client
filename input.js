const constants = require('./constants');
let conn;

const setupInput = (connection) => {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  const actions = constants.actions[key];
  if (actions) {
    conn.write(actions);
  }
};

module.exports = { setupInput };

