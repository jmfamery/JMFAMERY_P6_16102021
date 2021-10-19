const http = require('http');
const appliExpress = require('./applications');

// Connection au serveur
function portValide(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

const port = portValide(process.env.PORT || '3000');
appliExpress.set('port', port);

const portErreur = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const addresse = serveur.address();
  const bind = typeof addresse === 'string' ? 'pipe ' + addresse : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const serveur = http.createServer(appliExpress);

serveur.on('error', portErreur);
serveur.on('listening', () => {
  const addresse = serveur.address();
  const bind = typeof addresse === 'string' ? 'pipe ' + addresse : 'port ' + port;
  console.log('Listening on ' + bind);
});

serveur.listen(port);
