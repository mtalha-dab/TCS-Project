var express  = require("express")
var teacherRouter = require('./routes/teacherRouter');
var headRouter = require('./routes/headRouter');
var adminRouter = require('./routes/adminRouter');
var mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()

connection.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/head', headRouter);
app.use('/teacher', teacherRouter);
app.use('/admin', adminRouter);


app.listen(5000,()=>{
    console.log("Server running on Port 5000")
}) 