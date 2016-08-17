function getAjaxData(url, method, callback, params) {
	 var obj;
	 try {   
	  obj = new XMLHttpRequest();  
	 } catch(e){   
				   try {     
					 obj = new ActiveXObject("Msxml2.XMLHTTP");  
				   } 
		 		   catch(e) {     
					 try { 
					   obj = new ActiveXObject("Microsoft.XMLHTTP");
					 } catch(e) {       
					   alert("Your browser does not support Ajax.");       
					   return false;       
					 }     
				   }   
	 }
	 obj.onreadystatechange = function() {
	  if(obj.readyState == 4) {
		 callback(obj);
	  } 
	 }
	 obj.open(method, url, true);
	 obj.send(params);
	 return obj; 
 }


function generateTable(srcArray, headers, fields){

	var table = document.createElement("TABLE");
		var row = table.insertRow(-1);
	
		
		for(var i=0;i<headers.length;i++){
			var header=document.createElement('TH');
			header.innerHTML=headers[i];
			header.setAttribute('class','col-'+(i+1));
			row.appendChild(header);
		}
	
			//Add the data rows.
			for (var i = 0; i < srcArray.length; i++) {
					
					row = table.insertRow(-1);
				
					for(var j=0;j<fields.length;j++){
						var cell = row.insertCell(-1);
						cell.innerHTML = srcArray[i][fields[j]];
						cell.setAttribute('class','col-'+j);
					}
			
			}
	
	return table;
			
}