$(document).ready(function() {


	var current=()=> $('#textArea').val();
	var clear=()=>{$('#myDiv').html(null)};
	var backup=()=>$('#myDiv').html();
	  $('textArea').on('keydown',function(e){
        current().clear().backup();
        backup().current().clear();
        ////////////////////
        /////////////////
        //////////////
        ///////////
        ///////
        /////
        ///
        //
  }

});

})


