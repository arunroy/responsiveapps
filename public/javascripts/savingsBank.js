/*Interface Practical Test #2!*/

var product;

getAjaxData('savings_data.json', 'get', function(obj){

	product=JSON.parse(obj.responseText);
	product.activeIndex=0;

	var headers=['Product','Interest Rate','Minimum Deposit','Interest Type'];
	var fields=['product','interest_rate','minimum_deposit','interest_type'];
	
	/*Generate table dynamically from the object and add to the interface*/
	var table=generateTable(product, headers, fields,'productTable');

	var dvTable = document.getElementById("prodTable");
	dvTable.innerHTML = "";
	dvTable.appendChild(table);

	updateProductMinTable(false,1); //update data in mobile view version of the product table

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
			}
		}
		else{
			if(product.activeIndex>0){
				product.activeIndex--;
			}
		}
	}
	
	/*	Update the next and previous buttons to navigate to other products
		visible in mobile view */
	if(product.activeIndex>0){
		document.getElementById('prevBtn').innerHTML='&lt'+product[product.activeIndex-1].product;
	}
	if(product.activeIndex<product.length-1){
		document.getElementById('nextBtn').innerHTML=product[product.activeIndex+1].product+'&gt';
	}
	
	/*Update the product table to display the item corresponding to the active index */
	var table = document.getElementById('productTableMin');
	var fields=['product','interest_rate','minimum_deposit','interest_type'];
	var index=product.activeIndex;
	
	for(var i=0;i<fields.length;i++){
		table.rows[i].cells[0].innerHTML=product[index][fields[i]]; //update each row of the product table(mobile view)
	}

}