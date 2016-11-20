<?php
$titre = "Mon super blog";
//include_once "header.php";
function writeHeader($titre){
    //global $titre;
    return '<header class="header">'.$titre."</header>";
}
$header = writeHeader($titre);
//require_once "footer.php";
$footer = '<footer><a href="mailto:toto@gmail.com">contact</a></footer>';
$articles = [
  [
    "titre"=> "article1",
    "contenu"=> "lorem ipsum 1"
  ],
  [
    "titre"=> "article2",
    "contenu"=> "lorem ipsum 2"
  ],
  [
    "titre"=> "article3",
    "contenu"=> "lorem ipsum 3"
  ]
];
$articleListes = "<h3>Derniers articles</h3><ul>";
for( $i = 0; $i < count($articles);$i++){
  $article = $articles[$i];
  // chaque lien doit permettre de passer l'id de l'article via l'url
  //blog.php?pageId=1
  $articleUrl = "blog.php?pageId=".$i;
  $articleListes .= "<li><a href=\"$articleUrl\">".$article['titre']."</a></li>";
}
$articleListes .= "</ul>";
 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><?php echo $titre; ?></title>
    <style media="screen">
      body{
        margin:0;
        font-family:Arial,sans-serif;
        background-color:#ccc;
      }
      header{
        background-color:#aaa;
        color:white;
      }
    </style>
  </head>
  <body>
    <?php echo $header; ?>
    <div class="contenu">
      <?php echo $articleListes; ?>
    </div>
    <hr>
    <?php
        if( isset($_GET['pageId']) ){
            $articleId = $_GET['pageId'];
            $selectedArticle = $articles[$articleId];
        ?>

          <h3><?php echo $selectedArticle['titre']; ?></h3>
          <p><?php echo $selectedArticle['contenu']; ?></p>

        <?php
        }
      ?>
    <?php echo $footer; ?>
  </body>
</html>
