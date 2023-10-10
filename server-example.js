const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    // console.log('Request method', req.method)
    // console.log('Request url', req.url)

    // res.end('Hello from server!!')

    if (req.method === 'GET') {
        const content = await fs.readFile(path.join(basePath, 'index.html'));
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(content)
    } else if (req.method === 'POST') {
        const body = [];
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        req.on('data', data => {
            body.push(Buffer.from(data))
        });

        req.on('end', () => {
            // console.log('End', body.toString().split('=')[1].replaceAll('+', ' '))
            const title = body.toString().split('=')[1].replaceAll('+', ' ');

            addNote(title);
        
            res.end(`Title = ${title}`)
        })
    }
})