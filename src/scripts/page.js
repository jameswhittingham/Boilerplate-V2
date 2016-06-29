function Page($) {

  var self = this;

  this.init = function() {        
    self.bindEvents();
  };

  this.bindEvents = function() {
		/* Init Bootstrap Tooltips */
		$('[data-toggle="tooltip"]').tooltip();
  };

  this.init();
}

jQuery(document).ready(function($){
    new Page($);
});