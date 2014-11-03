var dict_iterate = {
	alert_vk: function(obj){
		$.each(obj, function(key, value) {
   			//alert(key + ' PLUS ' + value);
				$('#p_result').append(key + " NEXT KEY ");
		});
	}
}

/*
function valueChanged()
{
    if($('.coupon_question').is(":checked"))   
        $("#summary").removeClass("hide_summary");

    else
			$("#summary").addClass("hide_summary");
}
*/

function slideItIn()
{
    if($('.coupon_question').is(":checked"))   
        $("#summary").slideDown();
    else
			$("#summary").slideUp();
}


function testAlert() {
	alert("Is this called?");
	$("#hide_p").removeClass("hide_summary")
}


$(document).ready(function() {
	$('#search_btn').click(function(){
		//$("#summary").removeClass("hide");
		$.get('/query_folketinget/test/', function(data){
			var obj = jQuery.parseJSON(data);
			dict_iterate.alert_vk(obj)
		});
  });
	//valueChanged();
});

