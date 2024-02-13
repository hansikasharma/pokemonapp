const User = require('./../models/UserModel');
exports.login = async (req, res) => {
	try{// if(!user.validPassword(req.body.password))
		const user = await User.findOne({username: req.body.username}).exec();
        if(!user.validPassword(req.body.password)){
            res.status(400).json({
                status: 'fail',
                message: 'passwords not matched'
                })
        }
        else{
                res.status(200).json({
                    status: 'success',
                    userdata: {
                        user
                    }})
            }


        
		
		
		} catch (err){
            console.log(err)
		res.status(400).json({
			status: 'fail',
			message: err
		})
	}
};
exports.signup = async (req, res) => {
	console.log(req.body)
    try{
		var new_user = new User({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email

        });
        new_user.password = new_user.generateHash(req.body.password);
       try{ 
        try{
          await new_user.save()
        }catch(err){
            res.status(201).json({
                status: 'fail',
                data: {
                    err:err
                }
            });
            return;
        }

        res.status(201).json({
			status: 'success',
			data: {
				user: new_user
			}
		});
    }catch(err){
        res.status(400).json({
			status: 'failed',
			message: err
		});
       
    }
       
       
	}catch(err){
        res.status(400).json({
			status: 'failed',
			message: err
		});
        console.log(err);
    }
}
exports.sayHi = async (req,res) => {
    res.status(200).json({
        status: 'success',
        data:{
            message: 'hello'
        }
    });
};
