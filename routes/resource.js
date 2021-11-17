var express = require('express');
const icecream_controllers= require('../controllers/icecream');  
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var icecream_controller = require('../controllers/icecream'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
router.get('/', icecream_controllers.icecream_view_all_Page );  
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/icecream', icecream_controller.icecream_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/icecream/:id', icecream_controllers.icecream_delete); 
 
// PUT request to update Costume. 
router.put('/icecrfeam/:id', 
icecream_controllers.icecream_update_put); 
 
// GET request for one Costume. 
router.get('/icecream/:id', icecream_controllers.icecream_detail); 
 
// GET request for list of all Costume items. 
router.get('/icecream', icecream_controllers.icecream_list); 
 
module.exports = router; 
