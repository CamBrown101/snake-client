let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin, conn);
  return stdin;
};

const handleUserInput = (stdin, conn) => {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') { conn.write("Move: up") };
    if (key === 's') { conn.write("Move: down") };
    if (key === 'a') { conn.write("Move: left") };
    if (key === 'd') { conn.write("Move: right") };
  });
};

// conn.write("Move: up");
// conn.write("Move: down");
// conn.write("Move: left");
// conn.write("Move: right");

module.exports = { setupInput };