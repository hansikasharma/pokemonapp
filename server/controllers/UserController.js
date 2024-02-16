const User = require('./../models/UserModel');
exports.login = async (req, res) => {
	try{// if(!user.validPassword(req.body.password))
		const user = await User.findOne({username: req.body.username}).exec();
       if(!user){
        res.status(400).json({
            status: 'fail',
            error:true,
            message: 'user not found please Register'
            })
            return
       }
        if(!user.validPassword(req.body.password)){
            res.status(400).json({
                status: 'fail',
                error:true,
                message: 'passwords not matched'
                })
        }
        else{
                res.status(200).json({
                    status: 'success',
                    error:false,
                    userdata: {
                        user
                    }})
            }


        
		
		
		} catch (err){
            console.log(err)
		res.status(400).json({
			status: 'fail',
            error:true,
			message: 'some error occured'		})
	}
};
exports.signup = async (req, res) => {
	
    try{
		var user = new User({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email

        });
        user.password = user.generateHash(req.body.password);
       await user.save()
       res.status(201).json({
        status: 'success',
        error:false,
        userdata: {
             user
        }
    });
        }catch(err){
        if(err.code===11000){
            res.status(201).json({
                status: 'fail',
                error: true,
                message: 'User Already Exists'
            });
            
            return;
        }
            res.status(201).json({
                status: 'fail',
                error: true,
                message: 'some error occured'
            });
            console.log(err)
            return;
        }

        
    }
exports.sayHi = async (req,res) => {
    res.status(200).json({
        status: 'success',
        error:false,
        data:{
            message: 'Hello to the bakend of pokemon app, this place makes it work'
        }
    });
};
