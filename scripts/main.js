 var movies = [
    {
    
    	title: 'The Terminator',
    	actor: 'Arnold'
    },
    {
    	title: 'The Last Stand',
    	actor: 'Arnold'
    },
    

    ];

movies.forEach(function(){
	$.ajax({
   url : 'http://small-tiyfe.herokuapp.com/collections/arnold',
   type: "POST",
   // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
   data : movies[i],
   // data:  movies[0],
   dataType: 'html',
   success: function(data) {
       console.log('Success!');
   },
   error: function () {
        console.log('Error!');
   },
   complete: function() {
       console.log('Finished Running.');
   }
});
});

// $.ajax({
//    url : 'http://small-tiyfe.herokuapp.com/collections/arnold',
//    type: "POST",
//    // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//    data : movies[i],
//    // data:  movies[0],
//    dataType: 'html',
//    success: function(data) {
//        console.log('Success!');
//    },
//    error: function () {
//         console.log('Error!');
//    },
//    complete: function() {
//        console.log('Finished Running.');
//    }
// });
		 // $.ajax(ajaxSettings);	
    

   