const admin = require('firebase-admin');
const serviceAccount = require('./experts1-a54cb-dc6d5be7ec36.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;