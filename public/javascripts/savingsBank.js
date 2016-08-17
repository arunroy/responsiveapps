	var product;

	getAjaxData('savings_data.json', 'get', function(obj){

			product=JSON.parse(obj.responseText);
			product.activeIndex=0;
			
			console.log(product);
		
		
			var headers=['Product','Interest Rate','Minimum Deposit','Interest Type'];
			var fields=['product','interest_rate','minimum_deposit','interest_type'];
			var table=generateTable(product, headers, fields,'productTable');
			
			console.log(table);
			var dvTable = document.getElementById("prodTable");
			dvTable.innerHTML = "";
			dvTable.appendChild(table);
		
			updateProductMinTable(false,1);
		
		});	


/*Function to update product table rendered on small devices
	updateIndc - if false, updates the table for initial load
				if true, updates the table for next or previous items
  directionIndc - if 1 then update next item
  					if 0 then update previous item
*/
function updateProductMinTable(updateIndc,directionIndc){
	
	if(updateIndc){
		if(directionIndc==1){
			if(product.activeIndex<product.length-1){
				product.activeIndex++;
			} else{
			console.log('Index out of bounds');
			}
		}
		else{
			if(product.activeIndex>0){
				product.activeIndex--;
			}
		}
	}
	
	if(product.activeIndex>0){
		document.getElementById('prevBtn').innerHTML='&lt'+product[product.activeIndex-1].product;
	}
	if(product.activeIndex<product.length-1){
		document.getElementById('nextBtn').innerHTML=product[product.activeIndex+1].product+'&gt';
	}
	
	console.log(product);
	
	var table = document.getElementById('productTableMin');
	
	var fields=['product','interest_rate','minimum_deposit','interest_type'];
	var index=product.activeIndex;
	
	for(var i=0;i<fields.length;i++){
		table.rows[i].cells[0].innerHTML=product[index][fields[i]];
	}

}