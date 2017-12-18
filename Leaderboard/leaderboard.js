// JavaScript Document
$('.ratings_stars').hover(
            // Handles the mouseover
            function() {
                $(this).prevAll().andSelf().addClass('ratings_over');
                $(this).nextAll().removeClass('ratings_vote'); 
            },
            // Handles the mouseout
            function() {
                $(this).prevAll().andSelf().removeClass('ratings_over');
                set_votes($(this).parent());
            }
        );
$('.rate_widget').each(function(i) {
            var widget = this;
            var out_data = {
                widget_id : $(widget).attr('id'),
                fetch: 1
            };
            $.post(
                'ratings.php',
                out_data,
                function(INFO) {
                    $(widget).data( 'fsr', INFO );
                    set_votes(widget);
                },
                'json'
            );
        });
 {
            "widget_id"     : "r1",
            "number_votes"  : 129,
            "total_points"  : 344,
            "dec_avg"       : 2.7,
            "whole_avg"     : 3
        }
$('#one_of_your_widgets).data('fsr').widget_id;
   function set_votes(widget) {
        
            var avg = $(widget).data('fsr').whole_avg;
            var votes = $(widget).data('fsr').number_votes;
            var exact = $(widget).data('fsr').dec_avg;
            
            $(widget).find('.star_' + avg).prevAll().andSelf().addClass('ratings_vote');
            $(widget).find('.star_' + avg).nextAll().removeClass('ratings_vote'); 
            $(widget).find('.total_votes').text( votes + ' votes recorded (' + exact + ' rating)' );
        }
  $('.ratings_stars').bind('click', function() {
            var star = this;
            var widget = $(this).parent();
            
            var clicked_data = {
                clicked_on : $(star).attr('class'),
                widget_id : widget.attr('id')
            };
            $.post(
                'ratings.php',
                clicked_data,
                function(INFO) {
                    widget.data( 'fsr', INFO );
                    set_votes(widget);
                },
                'json'
            ); 
        });