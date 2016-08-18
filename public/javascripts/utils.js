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

// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let o be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of o with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of o with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of o with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}