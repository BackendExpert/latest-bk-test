const { connectMongo } = require('./db/mongo.js');

const app = require('./app.js');
const PORT = process.env.PORT || 5000;

connectMongo().then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
});
