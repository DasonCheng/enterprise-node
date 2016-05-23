/**
 * Created by Origin on 2016/5/23.
 */
var express = require('express');
var multer = require('multer');
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect('mongodb://banmagou:yhetgamebanmagou@localhost:27017/banmagou');

var goodsSchema = mongoose.Schema({
    id: Number,
    image: String,
    name: String,
    price: Number,
    brokerage: Number,
    salesCount: Number
}, {collection: 'goods'});
var items = mongoose.model('items', goodsSchema);
/*
items.find().limit(10).exec(function(err, goods) {
    if (err) return console.error(err);

});*/

router.use(function timeLog(req, res, next) {
    items.find().limit(10).exec(function (err, goods) {
        if (err) return console.error(err);
        console.log(goods);
    });
    console.log('Time: ', Date.now());
    next();
});
router.get('/date', function (req, res) {
    res.send("goods");
    // items.find().limit(10).exec(function (err, goods) {
    //     if (err) return console.error(err);
    // });
});


router.get('/', function (req, res) {
    res.render('index', {});
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