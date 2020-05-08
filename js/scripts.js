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
