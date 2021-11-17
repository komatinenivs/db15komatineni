const icecream = require("../models/icecream");
var fan = require("../models/icecream");

// List of all Costumes
exports.icecream_list = async function (req, res) {
  try {
    theicecream = await icecream.find();
    res.send(theicecream);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific Costume. 
exports.icecream_detail = async function(req, res) { 
  console.log("detail"  + req.params.id) 
  try { 
      result = await icecream.findById( req.params.id) 
      res.send(result) 
  } catch (error) { 
      res.status(500) 
      res.send(`{"error": document for id ${req.params.id} not found`); 
  } 
}; 

// Handle Costume create on POST.
exports.icecream_create_post = async function (req, res) {
  console.log(req.body);
  let document = new icecream();
  document.flavor = req.body.flavor;
  document.size = req.body.size;
  document.price = req.body.price;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Costume delete form on DELETE.
exports.icecream_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: icecream delete DELETE " + req.params.id);
};

// Handle Costume update form on PUT.
exports.icecream_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: icecream update PUT" + req.params.id);
};

// VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function (req, res) {
  try {
    theicecream = await Costume.find();
    res.render("icecream", { title: "icecream Search Results", results: theicecream });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
