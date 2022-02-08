const http = require('http');
const fs  = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if( url === '/'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></html>')
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="Username"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
    }

    
    if(url === '/create-user' && method === 'POST'){
        const body = []
        req.on('data', (chunk)=>{
            body.push(chunk)
        });
            return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            console.log(message)
            fs.writeFile('message.txt',message, (err)=>{
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            });
                
        })
    }
});

server.listen(5000)