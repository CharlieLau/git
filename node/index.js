const express = require('express')
const corsProxy = require('@isomorphic-git/cors-proxy/middleware.js')

const app = express()
const options = {
    authorization: (req, res, next) => {
        res.append('Access-Control-Allow-Headers', '*');
        return next()
    }
}

app.use(corsProxy(options))

app.listen(9889, () => {
    console.log('Accepting connections on port 9889')
})


//  cors-proxy start -p 9889