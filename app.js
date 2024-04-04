const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response) {
    console.log('client request URL: ', request.url);

    // below is to render favorite movies:
    if(request.url === '/movies') {
        fs.readFile('./views/favmovies.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    //below is to render theater location page:
    else if(request.url === '/theaters') {
        fs.readFile('./views/theater_location.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    //below is to render form page
    else if(request.url === '/movies/new') {
        fs.readFile('./views/new_movie.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // Below conditions are for rendering images in favourite movies page
    else if(request.url === "/Images/perfume.jpg") { 
        fs.readFile('./Images/perfume.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    } 
    else if(request.url === "/Images/extraction.jpg") {
        fs.readFile('./Images/extraction.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/avatar.jpg") {
        fs.readFile('./Images/avatar.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/crawdads.jpg") {
        fs.readFile('./Images/crawdads.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/miracle.jpg") {
        fs.readFile('./Images/miracle.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/interstellar.jpg") {
        fs.readFile('./Images/interstellar.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/into_wild.jpg") {
        fs.readFile('./Images/into_wild.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/pandora.jpg") {
        fs.readFile('./Images/pandora.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/train_busan.jpg") {
        fs.readFile('./Images/train_busan.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    // below conditions are for rendering images in theater page:
    else if(request.url === "/Images/ayala_cinema.jpg") {
        fs.readFile('./Images/ayala_cinema.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/sm_cinema.jpg") {
        fs.readFile('./Images/sm_cinema.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/fairview_cinema.jpg") {
        fs.readFile('./Images/fairview_cinema.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/century_cinema.jpg") {
        fs.readFile('./Images/century_cinema.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/fisher_cinema.jpg") {
        fs.readFile('./Images/fisher_cinema.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Images/newport_cinema.jpg") {
        fs.readFile('./Images/newport_cinema.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    // below is for rendering stylesheet
    else if(request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
    });
    }
    else {
        response.end('File not found!!!');
    }
});

// tell your server which port to run on
const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});