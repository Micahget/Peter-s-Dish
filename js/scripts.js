  // these are the functions which is going to be implemented whenever the stated action is performed
  $(document).ready(function() {
    // // this one is for the pause button 
    // $('#mycarousel').carousel({interval:2000});
    // $('#carousel-pause').click(function(){
    //     $('#mycarousel').carousel('pause');
    // });

    // // this one is for the play button 

    // $('#mycarousel').carousel({interval:200});
    // $('#carousel-play').click(function(){
    //     $('#mycarousel').carousel('cycle');
    // });

    // this one is for one button to perform both play and pause 
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $('#reserveButton').click(function(){
$('#reserveModal').modal('show');
    });
    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });

});