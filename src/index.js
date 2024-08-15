const config = require('./config/config.js');
const server = require('./server.js');
require('./service/email');

const enviornment =
  config.environment.active === 'production'
    ? config.environment.production
    : config.environment.development;

const { port: PORT } = enviornment;

(async () => {
  server.listen(PORT, () => {
    console.log(`Server Running...`);
  });
})();
