var userModel = require('./../models/userModel.js');//Create user model

  module.exports = {
      login: function(req, res, next){//passport does most of this. We just have to send back the response
          res.send();
      },
      getMe: function(req,res) {//Find current user
        if(!req.user){
          return res.send();
      }
      userModel
      .findById(req.user._id)//req.user is a passport functionality
      .exec(function (err, result) {
        if (err) {
          return res.send(err);
        }
        res.send(result);
      });
    },
    logout: function(req,res) {//Logs out current user
      req.logout();//req.logout is a passport functionality
      console.log(req + " has been logged out");
      res.send();
    }
    
  };
