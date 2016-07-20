var PostModel = require('./../models/postModel.js');


module.exports = {

	create: function(require, response, next){
			var post = new PostModel(require.body);
			post.save(function(error, result){
				if(error){
					response.send(error);
				} else {
					response.send(result);
				}
			});

	},
	read: function(require, response, next){
		PostModel
		.find()
		.populate('user')
		.exec(function(error, result){
			if(error){
				response.send(error);
			}else{
				response.send(result);
			}	
		});	
	},
	readById: function(require, response, next){
		PostModel.findById(require.params.id, function(error, result){
			if(error){
				response.send(error)
			}else{
				response.send(result)
			}
		})

	},
	update: function(require, response, next){
		PostModel.findByIdAndUpdate(require.params.id, require.body, function (error, result){
			if(error){
					response.send(error)
				} else {
					response.send(result)
				}
		});
	},

	delete: function(require, response, next){
		PostModel.findByIdAndRemove(require.params.id, require.body, function(error, result){
			if(error){
				response.send(error)
			} else {
				response.send(result)
			}
		});
	}

};