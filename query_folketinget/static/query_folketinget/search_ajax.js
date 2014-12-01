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

$(document).ready(function() {
	$("#btn_predict").click(function() {
		var title = $("#title").val();
		var p_party = $("#proposing_party").val();
		var c_category = $("#case_category").val();
        var p_type = $("#proposal_type").val();
        var sum = $("#resume").val();
        alert("Hallo");
			$.ajax({
					url : "/query_folketinget/predict", 
					type : "POST",
                    cache : false,
					dataType: "text", 
					data : {
							title: title,
							proposing_party : p_party,
							case_category : c_category,
                            proposal_type : p_type,
                            summary : sum,
							csrfmiddlewaretoken: csrftoken
							},
					success : function(data) {
							$('#prediction_results').html(data);
					},
					error : function(xhr,errmsg,err) {
									alert(xhr.status + ": " + xhr.responseText);
					}
			});
			return false;
	});
});

