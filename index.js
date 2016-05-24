var express = require('express');
var app = express();
var router = require('./routers/main');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/', router);

app.listen(app.get('port'), function () {
    console.log('Exprese started on http://localhost/:' + app.get('port') + ';press Ctrl+C to terminate!');
});