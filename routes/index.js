var express=require('express');
var router=express.Router();

var fs = require('fs');
var file;

	fs.readFile('public/users_data.json','utf8',function(err, contents){
	
	if(err==undefined)
	{
		file=JSON.parse(contents);
		console.log('Master file read on server');
	}
	else{
		console.log('File read error!');
		console.log(err)
	}
	});


router.get('index',function(req, res){
	res.render('index',{title : 'Express'});
});

router.get('/',function(req, res){
	res.render('index',{title : 'Express'});
});

router.get('/queryData?:queryString',function(req, res){
		
	var queryString= req._parsedOriginalUrl.query;
	var positions=[];
	var filteredArray=[];
	var flag=false;
	
	console.log('Recieved request for query string  : ' + queryString);
	
	/* Experimental delay for throbber animation */
	setTimeout(function(){

		//iterate the entire data set and see if the particular dataset is present
		for(var i=0;i<file.length;i++){
			if((file[i]['name'].toLowerCase().indexOf(queryString)>-1)||
			   (file[i]['age'].toString().indexOf(queryString)>-1)||
			   (file[i]['shoe_size'].toString().indexOf(queryString)>-1)||
			   (file[i]['title'].toLowerCase().indexOf(queryString)>-1)
			  ){
				flag=true;
				positions.push(i);
			}
		}


		for(var i=0;i<positions.length;i++){
			filteredArray.push(file[positions[i]]);
		}
		
		res.json(filteredArray);

	},1000);
	
});

module.exports=router;

