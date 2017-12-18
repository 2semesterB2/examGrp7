<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Rate Us</title>
<link href="styletiles.css" rel="stylesheet" type="text/css">	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
<script src="leaderboard.js"></script>
</head>

	             <img id="color" src="image/color.jpg";>
	
<section id="leader">
	
    <h1>Leaderboard list </h1>
	
<p id="player1">    
   Player one:
    </p>
<p id="player2">    
   Player two:
    </p>
<p id="player3">    
   Player three:
    </p>
<p id="player4">    
   Player four:
    </p>
<p id="player5">    
   Player five:
    </p>
<p id="player6">    
   Player six:
    </p>	
<p id="player7">    
   Player seven:
    </p>
<p id="player8">    
   Player eight:
    </p>
	
	<button class="button">Next</button>

	</section>
	<section id="rating">
		<?php 
		# New Object
$rating = new ratings($_POST['widget_id']);
 
# either return ratings, or process a vote
isset($_POST['fetch']) ? $rating->get_ratings() : $rating->vote();
		class ratings {
     
    private $data_file = './ratings.data.txt';
    private $widget_id;
    private $data = array();
        
function __construct($wid) {
     
    $this->widget_id = $wid;
 
    $all = file_get_contents($this->data_file);
     
    if($all) {
        $this->data = unserialize($all);
    }
}
			public function get_ratings() {
    if($this->data[$this->widget_id]) {
        echo json_encode($this->data[$this->widget_id]);
    }
    else {
        $data['widget_id'] = $this->widget_id;
        $data['number_votes'] = 0;
        $data['total_points'] = 0;
        $data['dec_avg'] = 0;
        $data['whole_avg'] = 0;
        echo json_encode($data);
    } 
}
			public function vote() {
    # Get the value of the vote
    preg_match('/star_([1-5]{1})/', $_POST['clicked_on'], $match);
    $vote = $match[1];
				$ID = $this->widget_id;
# Update the record if it exists
if($this->data[$ID]) {
    $this->data[$ID]['number_votes'] += 1;
    $this->data[$ID]['total_points'] += $vote;
}
# Create a new one if it does not
else {
    $this->data[$ID]['number_votes'] = 1;
    $this->data[$ID]['total_points'] = $vote;
}
				 $this->data[$ID]['dec_avg'] = round( $this->data[$ID]['total_points'] / $this->data[$ID]['number_votes'], 1 );
    $this->data[$ID]['whole_avg'] = round( $this->data[$ID]['dec_avg'] );
           
    file_put_contents($this->data_file, serialize($this->data));
    $this->get_ratings();
}
		?>
	<div class='game'>
    Rate: Basegame
    <div id="r2" class="rate_widget">
        <div class="star_1 ratings_stars"></div>
        <div class="star_2 ratings_stars"></div>
        <div class="star_3 ratings_stars"></div>
        <div class="star_4 ratings_stars"></div>
        <div class="star_5 ratings_stars"></div>
        <div class="total_votes">vote data</div>
    </div>
</div>
	</section>
	
<body>
</body>
</html>