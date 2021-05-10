var express = require('express');
var router = express.Router();


const TaskController = require('../controllers/TasksController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/listPendencias',TaskController.getListaPendencia)
router.get('/listFinalizadas',TaskController.getListaFinalizadas)
router.post('/create',TaskController.create)
router.put('/update/:id',TaskController.updateStats)


module.exports = router;
