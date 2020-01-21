const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req, res) => {
    res.send(
        [
          {
          'id':1,
          'image':'https://placeimg.com/64/64/1',
          'name':'홍길동',
          'birthday':'890418',
          'gender':'여자',
          'job':'developer'
        },
        {
          'id':2,
          'image':'https://placeimg.com/64/64/2',
          'name':'리정혁',
          'birthday':'890418',
          'gender':'남자',
          'job':'developer'
        },
        {
          'id':3,
          'image':'https://placeimg.com/64/64/3',
          'name':'손예진',
          'birthday':'890418',
          'gender':'여자',
          'job':'developer'
        },
        ]);
});

app.listen(port,() => console.log(`Listening on port ${port}`));