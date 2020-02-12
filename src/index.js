const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.get('/', (req, res) => { res.send('Express Application'); })
app.post("/", (req, res) => {
    let data;
    let data1;
    let data2;
    let a;
    a=':'
    data=req.body.data;
    data1=data.split(':');
    data2=data1[0];
    data2=data2.slice(0,3);
    data=data1[1];
    console.log(data2)
    console.log(data1[1])
    console.log(data2+a+data1[1])
 });

app.post("/", (req, res) => {console.log(req.body); res.json({status: "execusted" });});

app.listen(port, () => { console.log(`server running on ${port}`)});

