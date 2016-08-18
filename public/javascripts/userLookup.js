/*Interface Practical Test 1*/
/*Author : Arun Karthic R*/

var employee;

document.getElementById("searchTxt").onkeyup=getData;
fetchData();

document.getElementById("nextBtn").addEventListener("click", function(event){
    event.preventDefault();
});

document.getElementById("prevBtn").addEventListener("click", function(event){
    event.preventDefault();
});

function getData(e){
	
	var queryString= document.getElementById('searchTxt').value.toLowerCase();
	var positions=[];
	var filteredArray=[];
	var flag=false;

	//iterate the entire data set and see if the particular dataset is present
	for(var i=0;i<employee.length;i++){
		if(employee[i]['name'].toLowerCase().indexOf(queryString)>=0){
			flag=true;
			positions.push(i);

		}
	}


	for(var i=0;i<positions.length;i++){
		filteredArray.push(employee[positions[i]]);
	}
	
	var headers=['Name','Age','Shoe size','Title'];
	var fields=['name','age','shoe_size','title'];
	var table=generateTable(filteredArray, headers, fields);
	//alert(table);
	
	var dvTable = document.getElementById("userTable");
	dvTable.innerHTML = "";
	dvTable.appendChild(table);
}


function fetchData(){
	
	getAjaxData('master_data.json', 'get', function(obj){
		
		emp=obj.responseText;
		//console.log(emp);
		
		employee=JSON.parse(emp);
		
		var headers=['Name','Age','Shoe size','Title'];
		var fields=['name','age','shoe_size','title'];
		var table=generateTable(employee, headers, fields);
		//alert(table);

		var dvTable = document.getElementById("userTable");
		dvTable.innerHTML = "";
		dvTable.appendChild(table);
		});	
}



