const SMTPServer = require('smtp-server').SMTPServer;
const emailConfig = require('./config/config').email.development;
const simpleParser =  require('mailparser').simpleParser

const server = new SMTPServer({
  onAuth(auth, session, cb) {
    if (
      auth.username !== emailConfig.user ||
      auth.password !== emailConfig.pass
    ) {
      return cb(new Error('Not Authorized'));
    }
    cb(null, { user: auth.username });
  },
  onConnect(session, cb) {
    if (!session.id) {
      return cb(new Error('Unable to connect'));
    }
    console.log('Connection Created', session.id);
    cb(null);
  },
  onMailFrom(address, session, cb) {
    if (!address.address) {
      return cb(new Error(`Sender's address not Found`));
    }
    console.log('MailFrom', address.address);
    cb(null);
  },
  onRcptTo(address, session, cb) {
    if (!address.address?.length) {
      return cb(new Error(`Recipients list not Found`));
    }
    console.log("Recipients List",address.address)
    cb(null);
  },
  onData(stream, session, cb) {
    simpleParser(stream).then((parsed)=>{
      console.log('Email Data',parsed)
      cb(null)
    }).catch((err)=>{
      cb(new Error(err.message))
    })
  },
  onClose(session) {
    console.log('Closing Connection');
  },
});

module.exports = server;
