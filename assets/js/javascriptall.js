$(document).ready(function(){
	/*===========Sticky Menu==========*/
	$(window).scroll(function(){
			if ($(this).scrollTop() > 50){
				$('#navbar').addClass('navbarNew animated fadeInDown')
			}else{
				$('#navbar').removeClass('navbarNew animated fadeInDown');
			}
		});

		$('.nonactive').click(function(){
			 $('.flip').css('transform','rotateY(180deg)');
		});
  		$('.nonactiveS').click(function(){
     		 $('.flip').css('transform','rotateY(0deg)');
    	});
  		$('#login').click(function(){
			 $('.con').css('display','block');
		});

		$('#close').click(function(){
			$('.con').slideUp();
		});

});
	function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
