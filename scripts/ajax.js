$(function() {    
    
    $("#action").click(function() {
                                       
        let apiUrl = 'https://dog.ceo/api/breeds/image/random';    
        
        $.get(apiUrl, function(content) {

                $("#dogImg").html("");

                $("<img>").attr("src", content.message).appendTo($("#dogImg"));                
            });        
    });
});