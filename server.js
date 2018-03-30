const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const app = express();
const Server_Port = process.env.PORT || 2222;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'public', 'img')));

const CatagoryPicStorage = multer.diskStorage(({
    destination: './public/img/catagory',
    filename: nameThatBitch
}));

const postPicStorage = multer.diskStorage(({
    destination: './public/img/posts',
    filename: nameThatBitch
}));

const uploadCatagoryPic = multer({
    storage: CatagoryPicStorage,
    // limits: {fileSize: 10},  // Unit Bytes
    fileFilter: checkFileType
}).single('profilePic');

const uploadPostPic = multer({
    storage: postPicStorage,
    // limits: {fileSize: 10},  // Unit Bytes
    fileFilter: checkFileType
}).single('postPic');

function nameThatBitch(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
}

function checkFileType(req, file, cb) {
    const allowedFileTypes = /jpeg|jpg|png|svg/i;
    const isExtensionValid = allowedFileTypes.test(path.extname(file.originalname));
    const isMimeValid = allowedFileTypes.test(file.mimetype);
    if (isExtensionValid && isMimeValid) {
        cb(null, true);
    } else {
        cb('Err: Image Only', false);
    }
}

app.use('/api/catagory', (req, res, next) => {
    uploadCatagoryPic(req, res, err => {
        if (err) {
            console.log(err);
        }
        next();
    });
});

app.use('/api/posts', (req, res, next) => {
    uploadPostPic(req, res, err => {
        if (err) {
            console.log(err);
        }
        next();
    });
});


app.use('/', express.static(path.join('public')));
app.use('/api', require('./routes/api').route);

app.listen(Server_Port, () => console.log('Server started at http://localhost:2222'));