var fs = require('fs');
var fileObj;

var readData = function(filepath){
	fs.readFile(filepath,'utf8',function(err, contents){
	
	if(err==undefined)
	{
		fileObj=JSON.parse(contents);
		console.log(contents);
		console.log("Name is " + fileObj[0].name);
		console.log('Type of object is ' + typeof(fileObj));
	}
	else{
		console.log('File read error!');
		console.log(err)
	}
	
	return fileObj;
});

}

module.exports = readData;
