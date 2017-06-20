/**
 * Created by shangkuikui on 2017/6/19.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('/index.html'); //这个地方填写dist/index.html的路径
})
app.listen(4000)