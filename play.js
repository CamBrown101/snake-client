// PORT: 50542
// HOST: 135.23.222.131

const net = require('net');
//Establish connection with game server

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  //interpret incoming data as text
  conn.setEncoding('utf8')
  conn.on('data', (data) => {
    console.log('Message from server: ', data);
  });
  return conn;
}

console.log('Connecting...')
connect()