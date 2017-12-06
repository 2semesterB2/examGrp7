<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Rate Us</title>
<link href="stylesheet.css" rel="stylesheet" type="text/css">	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="javascript.js"></script>
</head>
<body>
    
<h1>  RATE US  </h1>
    
    <a href="#" >   <button id="menu" class="button button2"> MENU </button></a>
    <div class="movie_choice">
    Rate this game
    <div id="r1" class="rate_widget">
        <div class="star_1 ratings_stars"></div>
        <div class="star_2 ratings_stars"></div>
        <div class="star_3 ratings_stars"></div>
        <div class="star_4 ratings_stars"></div>
        <div class="star_5 ratings_stars"></div>
        <div class="total_votes">vote data</div>
    </div>
</div>
# New Object
$rating = new ratings($_POST['widget_id']);
 
# either return ratings, or process a vote
isset($_POST['fetch']) ? $rating->get_ratings() : $rating->vote();
</body>
    
    
    
    <!-- wurzer,E., 2010, Building a 5 Star Rating System With jQuery, AJAX and PHP, [Online] Kan findes på: <https://code.tutsplus.com/tutorials/building-a-5-star-rating-system-with-jquery-ajax-and-php--net-11541> [Tilgået 6. December 2017]. -->
</html>
