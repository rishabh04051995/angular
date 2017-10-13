let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/app');
let db = mongoose.connection;

let Data = require('../models/data');



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.post('/insert', function(req, res) {
  var data = new Data();
  data.date = req.body.date;
  data.maxtemp = req.body.maxtemp;
  data.mintemp = req.body.mintemp;

  data.save((err,weather)=>{
    if (err){
      res.send(err);
    }else{
      res.json(weather);
    }
  });
  




/*router.post('/insert', function(req, res, next) {
    Data.create(req.body).then(function(data) {
        res.send(data)
    })*/

})
router.get('/find', (req, res) => {

 Data.find((err, emp) => {
    if(err)
      res.send("error has occured while finding")
    else
    {
  
     res.json(emp)
    }
  });
})

router.delete('/delete/:id', (req, res, next) => {
   Data.remove({ _id: req.params.id }, function(err, weathers) {
       if (err) {
           res.json(err);
       } else {
           res.json(weathers);
       }
   });
});

router.put('/update/:id', (req, res) => {
 Data.update({
     _id: req.params.id
 }, { $set:
     {date: req.body.date,
      maxtemp:req.body.maxtemp,
      mintemp: req.body.mintemp}},
     {upsert: true},
     (err, data) => {
         if(err)
             throw err
         else
         {
             res.json(data)
         }
 })
})
module.exports = router;