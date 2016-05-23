/**
 * Created by Origin on 2016/5/23.
 */
var express = require('express');
var multer = require('multer');
var router = express.Router();


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.render('index', {});
});
router.post('/', function (req, res) {
    res.send();
});

router.get('/upload', function (req, res) {
    res.render('upload', {});
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, 'Orange' + '-' + Date.now() + file.originalname.match(/\.[^\.]+$/)[0]);
    }
});
router.post('/upload', function (req, res) {
    var upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            if (file.mimetype.match(/^[^\/]+/)[0] == 'image') {
                cb(null, true);
            } else {
                cb(new Error('I don\'t have a clue!'));
                cb(null, false);
            }
        },
        limits: {fileSize: 1024 * 1024 * 2}
    }).single('photo');

    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return;
        }
        console.log(req.file);
        res.status(204).end();
        // Everything went fine
    });
});
module.exports = router;