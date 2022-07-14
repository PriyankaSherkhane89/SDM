var exp=require("express");
var ex=exp();
ex.get('/login.html',function(req,res){
	res.sendFile(__dirname+"/login.html");
   });

ex.get('/loginverify',function(req,res){
	   if(req.query.uid == 'object' && req.query.pwd == 'knowit')
	    {
		   res.send("Successful Login");
		   res.end();
	    }
		else
		{
			res.send("failed to login....");
			 res.end();
		}
	    
     });


ex.listen(9000,function(){
	console.log("RUNNING WITH EXPRESS JS");
  });