(function ( $ ) {
 
    $.fn.tab = function( options ) {
		let getTabContent = [];
		let getAllTab = $(options.tabContent["0"]).children();
		$(options.tabContent["0"]).children().each(function(index){
			if(index > 0){
				$(this).hide();
			}
			getTabContent.push(this.id);
		});
 
		init(this,getTabContent,getAllTab);
 
    };

	function init(el,getTabContent,getAllTab){
		console.log(getTabContent);
		el.children().each(function(index){
			$(this).on('click',function(){
				el.find('li.is-active').removeClass('is-active');
				$(this).addClass('is-active');
				let tabname = $(this).data('tab');
				if(tabname == getTabContent[index]){
					$(getAllTab).hide()
					$(getAllTab[index]).show()
				}
			})
		});
	}
 
}( jQuery ));