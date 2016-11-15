$(document).ready(function() {
    checkWidth();
    $(window).resize(checkWidth);
});


function checkWidth() {
        var doc_window = $(window);
        var windowsize = doc_window.width();
        if (windowsize > 768 && $('.second_section').children().first().is('h2')) {
            morphSecondSectionSM();
            structureContactSM();
            linksRight();
        } else if (windowsize < 768 && $('.secondary_text_wrapper').children().first().is('h2')) {
            morphSecondSectionXS();
            structureContactXS();
            linksLeft();
        }
        
    }


    function morphSecondSectionXS(){
        $('.secondary_text_wrapper h2').remove();
        $('.second_section').prepend('<h2 class="text-center">Redefining the web</h2>');
        $('.secondary_text_wrapper').addClass('text-center');
    }

    function morphSecondSectionSM(){
        $('.second_section h2').remove();
        $('.secondary_text_wrapper').prepend('<h2>Redefining the web</h2>');
        $('.secondary_text_wrapper').removeClass('text-center');
    }

    function structureContactXS(){
        $('#form_container').addClass('text-center');
        $('textarea').attr('rows', 3);
    }

    function structureContactSM(){
        if($('#form_container').hasClass('text-center')) {
            $('#form_container').removeClass('text-center');
            $('textarea').attr('rows', 5);
        }
    }

    function linksRight(){
        $('#my_links').addClass('pull-right');
    }

    function linksLeft(){
        $('#my_links').removeClass('pull-right');
    }
