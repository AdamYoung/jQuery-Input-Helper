/********************************
* jQuery Input Helper Plugin v0.1
* Author: Adam Young 
********************************/
(function( $ ){
 $.fn.inputHelp = function() {   
   this.bind("focus",function(){ 
     var $this = $(this);
     if(this.value==$this.attr("alt")){ 
	   this.value=""; 
	   $this.removeClass("inputHelp");
    } 
    })
    .bind("blur",function(){ 
     var $this = $(this);
      if(this.value==""){
        this.value=$this.attr("alt");
	    $this.addClass("inputHelp");
	  }
   });
   this.each(function(){ 
     var $this = $(this);
      if(this.value=="")
        this.value=$this.attr("alt");
	 if(this.value==$this.attr("alt") && $this.attr("alt")!="")
	   $this.addClass("inputHelp");
   });
   
   // Replace input help value with blank before submitting forms
   var vFirst = true;
   var vSelector = this.selector;
   if(vFirst){
     $("form").bind("submit",function(){ 
       $(this).find(vSelector).each(function(){ 
         if(this.value==$(this).attr("alt")) 
           this.value=""; 
       });
     });
     vFirst=false;
   }

  };
})( jQuery );
