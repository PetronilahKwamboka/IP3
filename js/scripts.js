$(document).ready(function(){
  $("div#design-image").click(function(){
    $("div#design-image").toggle();
    $("div#design").toggle();
  });

  $("div#design").click(function(){
    $("#design-image").toggle();
    $("div#design").toggle();
  });
});


$(document).ready(function(){
  $("div#development-image").click(function(){
    $("div#development-image").toggle();
    $("div#development").toggle();
  });

  $("div#development").click(function(){
    $("#development-image").toggle();
    $("div#development").toggle();
  });
});

$(document).ready(function(){
  $("div#product-image").click(function(){
    $("div#product-image").toggle();
    $("div#product").toggle();
  });

  $("div#product").click(function(){
    $("#product-image").toggle();
    $("div#product").toggle();
  });
});


$(document).ready(function(){
  $(".col-md-3 img").mouseover(function(){
    $(".text").show();
  }).mouseout(function(){
    $(".text").hide();
  });
});

$(document).ready(function(){
  $("form#contact-form").submit(function(event){
     var name = $("input#input-name").val();
     var email = $("input#input-email").val();
     var message = $("textarea#comment").val();

     if($("#input-name").val() && $("#input-email").val()){
       alert(name + " we have received your message. Thank you for reaching out to us.")
     }
     else{
       alert("Please enter your name and email.")
     }
  })
})
