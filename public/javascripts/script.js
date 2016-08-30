        function displayNextItem(){
			document.getElementById('lookupDiv').style.display = 'block';
			document.getElementById('pivotTableDiv').style.display = 'none';
		}
				
	    function displayPrevItem(){			
				document.getElementById('lookupDiv').style.display = 'none';
				document.getElementById('pivotTableDiv').style.display = 'block';
        }
		
		function focusSearchBox(){
				document.getElementById('searchTxt').value='';
			    document.getElementById('searchTxt').className="searchTxtActive";
		}
		
		function blurSearchBox(){
				document.getElementById('searchTxt').value='Search';
			    document.getElementById('searchTxt').className="searchTxt";
		}