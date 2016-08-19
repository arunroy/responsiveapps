/*product datafile script*/

[
  '{{repeat(20, 1)}}',
  {
    
    product: '{{random("SMS","RMS","SNRMS","NetSuite","Direct","Fixed Saver","Flex Saver","Offset saver")}}',
    interest_rate: function (tags, index) { return "£"+ tags.integer(500,1000); },
    minimum_deposit : '{{integer()}}',   
    interest_type : '{{random("Fixed","Tracker","Flex")}}'
  }
]

/*users datafile script*/
[
  '{{repeat(2, 1)}}',
  {
    
    name: '{{firstName()}} {{surname()}}',
	age: '{{integer(20, 40)}}',
    shoe_size : '{{integer()}}',   
    gender: '{{gender()}}'
  }
]