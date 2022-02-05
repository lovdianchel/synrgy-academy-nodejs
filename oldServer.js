const Http = require('http');
const fs = require('fs')

let dataJSON = {
    name: "josua",
    umur: 19
}

const onRequest = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile('./index.html', null, (err, data) => {
        if (err) {
            response.writeHead(400)
            response.write("file not found")
        } else {
            response.write(data)
        }

        response.end()
    })
}

const onJSON = (reqest, response) => {
    response.writeHead(200, {"Content-Type": "application/json"})
    response.end(JSON.stringify(dataJSON))
}

const PORT = 1337

console.log("Server is running in port:" + PORT)
Http.createServer(onRequest).listen(PORT)