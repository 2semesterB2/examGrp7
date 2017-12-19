<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Rate Us</title>
<link href="stylesheet.css" rel="stylesheet" type="text/css">	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
<script src="javascript.js"></script>
</head>
<body>
    
	<div class="h1">
	 <h1>  RATE US  </h1> </div>
<button id="playagain" onclick="window.location.href='../players/players.php'">Play again</button>	
<!--
Sisson,T., 2017, [Online] PHP mail() Function Code to Send Emails from a Form. Kan finde på: 
<https://www.inmotionhosting.com/support/website/sending-email-from-site/using-the-php-mail-function-to-send-emails> [Tilgået 19. December 2017]
-->
	<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "jonesfrahgs@gmail.com";
  $email = $_REQUEST['email'];
  $comment = $_REQUEST['comment'];
  
  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);
  
  //Email response
  echo "Thank you for contacting us!";
  }
  
  //if "email" variable is not filled out, display the form
  else  {
?>

 <form method="post">

  Email: <input name="email" type="text" />

  kommentarer:

  <textarea name="comment" rows="15" cols="40"></textarea>

  <input type="submit" value="Submit" />
  </form>
  
<?php
  }
?>
<!-- 
<div class="stars">
  <form action="collect.php" method="post">
    <input class="star star-5" id="star-5" type="radio" name="star"/>
    <label class="star star-5" for="star-5"></label>
    <input class="star star-4" id="star-4" type="radio" name="star"/>
    <label class="star star-4" for="star-4"></label>
    <input class="star star-3" id="star-3" type="radio" name="star"/>
    <label class="star star-3" for="star-3"></label>
    <input class="star star-2" id="star-2" type="radio" name="star"/>
    <label class="star star-2" for="star-2"></label>
    <input class="star star-1" id="star-1" type="radio" name="star"/>
    <label class="star star-1" for="star-1"></label>
	<input type="submit" value="send"/>
  </form>
</div>
	-->
<a href="#"> </a> <button class="button button2">Return to start</button>
    
	</body>  
    <!-- https://codepen.io/kanduvisla/pen/NqdbZP -->
</html>
