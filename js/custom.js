/*======================================================

	Javascript custom functions
	
Date:11-17-2019	
=======================================================*/
jQuery(document).ready(function ($) {
	'use strict'

	
	if($(".kode-selecter").length){
		$(".kode-selecter").chosen()
	}


	var doc = new jsPDF();
	var specialElementHandlers = {
	    '#editor': function (element, renderer) {
	        return true;
	    }
	};

	$('#cmd').click(function () {
	    doc.fromHTML($('#content').html(), 15, 15, {
	        'width': 1170,
	            'elementHandlers': specialElementHandlers
	    });
	    doc.save('sample-file.pdf');
	});
	
    if($(".table-blog").length){
	   $('.table-blog').DataTable();
	  }
});

/**=======================--tooltip--======================================================-**/
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();   
  });