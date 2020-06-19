// ********* JS code for tooltip
// $(document).ready(function() {
//     $('[data-toggle="tooltip"]').tooltip();     // whenever there is any attribute of this kind(data-toggle=tooltip), turn on tooltip 
// })

// ******** JQuery code for carousel controls(play and pause)
// $(document).ready(function() {
//     $('#mycarousel').carousel({ interval: 2000 });      // set the interval of 2000ms
//     $('#carousel-pause').click(function() {             // on click of pause button pauses the carousel
//         $('#mycarousel').carousel('pause');
//     });
//     $('#carousel-play').click(function() {              // on click of pause button resumes the carousel
//         $('#mycarousel').carousel('cycle');
//     });
// });

//Functioning of combined PLAY PAUSE Button
//ALSO INSERT Z-INDEX in CSS FILE for play pause functioning in single button
$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });      // set the interval of 2000ms
    $('#carouselButton').click(function() {             // on click of button
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {   // if the button is in pause state
            $('#mycarousel').carousel('pause');     // the carousel is paused
            $('#carouselButton').children('span').removeClass('fa-pause');  // remove the class fa-pause
            $('#carouselButton').children('span').addClass('fa-play');      // add the class fa-play
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    // onclick of login button toggles login button modal
    $('#loginButton').click(function() {
        $('#loginModal').modal('toggle');
    });

    //onclick of reserve table button toggles reserve table modal
    $('#reserveButton').click(function() {
        $('#reserveModal').modal('toggle');
    });

    //onclick of x and cancel button closes the modal
    $('#dismissButton').click(function() {
        $('#loginModal').modal('hide');
    });
    $('#cancelButton').click(function() {
        $('#loginModal').modal('hide');
    });

    //onclick of x and cancel button closes the modal
    $('#dismissReserveButton').click(function() {
        $('#reserveModal').modal('hide');
    });
    $('#cancelReserveButton').click(function() {
        $('#reserveModal').modal('hide');
    });
});

