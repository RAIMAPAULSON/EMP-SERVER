//import json-server
const jsonServer = require('json-server')
// create server for employee management
const EMPServer = jsonServer.create()
// create middleware
const middleware = jsonServer.defaults()
// setup route for json file in server
const route = jsonServer.router('db.json')
// set up port for running server app
const PORT = 3000 || process.env.PORT


EMPServer.use(middleware)
EMPServer.use(route)
EMPServer.listen(PORT,()=>{
    console.log(`Employee Management Server Started at port ${PORT} and waiting for client request`);
})
