// Create web server
http.createServer(function (req, res) {
    var index = fs.readFileSync('index.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'html'});
    res.end(index);
  }).listen(3000);
