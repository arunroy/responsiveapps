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
	var throbber=document.getElementById('throbber');
	throbber.style.display='inline';
	
	getAjaxData('queryData?'+queryString, 'get', function(obj){

			var filteredArray = JSON.parse(obj.responseText);

			var headers=['Name','Age','Shoe size','Title'];

			var table=generateTable(filteredArray, headers, 'userTbl');

			var dvTable = document.getElementById("userTableDiv");
			dvTable.innerHTML = "";
			dvTable.appendChild(table);
			throbber.style.display='none';

	});
		
}


function fetchData(){
	
	getAjaxData('users_data.json', 'get', function(obj){
		
		emp=obj.responseText;

		employee=JSON.parse(emp);
		
		var headers=['Name','Age','Shoe size','Title'];
	
		var table=generateTable(employee, headers, 'userTbl');

		var dvTable = document.getElementById("userTableDiv");
		dvTable.innerHTML = "";
		dvTable.appendChild(table);
		});	
}



