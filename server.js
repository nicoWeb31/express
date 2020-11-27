const app = require('./app')



//-------------port--------------------------------
const port = process.env.PORT || 3002;
//-----------------server---------------------------
const server = app.listen(port, () => {
    console.log(`app run well on port ${port}.... 🙂 `);
});