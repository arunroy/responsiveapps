/*Common utilities used for both the tests*/
/*Author : Arun Karthic R*/

/*This function handles asynchronours data download from the server*/
function getAjaxData(url, method, callback, params) {
	 var obj;
	 try {   
	  obj = new XMLHttpRequest();  
	 } catch(e){   /*for older browsers that do not support XMLHttpRequest object*/
				   try {     
					 obj = new ActiveXObject("Msxml2.XMLHTTP");  
				   } 
		 		   catch(e) {     
					 try { 
					   obj = new ActiveXObject("Microsoft.XMLHTTP");
					 } catch(e) {       
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

/*Custom function to dynamically generate a HTML Table object from the parameters passed
Returns HTML DOM Table object
Used by lookup.js and savingsBank.js*/

function generateTable(srcArray, headers, fields, id){

	var table = document.createElement("TABLE");
	table.id=id;
		var row = table.insertRow(-1);
	
		/*generate the header from the header elements list passed*/
		for(var i=0;i<headers.length;i++){
			var header=document.createElement('TH');
			header.innerHTML=headers[i];
			header.className='col-'+i;
			header.setAttribute('class','col-'+i);
			row.appendChild(header);
		}
	
			/*Add the data rows.*/
			for (var i = 0; i < srcArray.length; i++) {
					
					row = table.insertRow(-1);
				
					for(var j=0;j<fields.length;j++){
						var cell = row.insertCell(-1);
						cell.innerHTML = srcArray[i][fields[j]];
						cell.className='col-'+j;
						//cell.setAttribute('class','col-'+j+1);//class for applying style to have specific columns displayed on small devices
					}
			
			}
	
	return table;
			
}
