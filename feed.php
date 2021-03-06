<?php
include_once 'config/database.php';
?>

<html>
<head>
    <link rel="stylesheet" href="styling.css"/>
</head>
<body>
<?php include 'includes/header.php' ?>

<div id="content">
<?php
    try {
        $conn = new PDO("mysql:host=$DB_DSN;dbname=$DB_NAME", $DB_USER, $DB_PASSWORD);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
            $sql = "USE ".$DB_NAME;
        $sql = "SELECT * FROM pictures_table";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $number_of_results = $stmt->rowCount();
        $result_per_page = 5;
        $number_of_pages = ceil($number_of_results / $result_per_page);
        $page = 1;
        if(!isset($_GET['page'])){
            $page = 1;
        }else{
            if (is_numeric($_GET['page'])) {
                $page = $_GET['page'];
            }
            else{
                $page = 1;
            }
        }
        
        $start_limit_number = ($page - 1) * $result_per_page;

        $con = new PDO("mysql:host=$DB_DSN;dbname=$DB_NAME", $DB_USER, $DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
            $sql = "USE ".$DB_NAME;
                    $sql = "SELECT * FROM pictures_table  ORDER BY photo_id DESC LIMIT $start_limit_number, $result_per_page";
                    $stmt = $con->prepare($sql);
                    $stmt->execute();

      while( $res = $stmt->fetch()){
          echo "<div id='img_div'>";
          echo "<div onclick=location.href='imagepage.php?id=".$res['photo_id']."'>";
          echo "<img src='img_gallery/".$res['image']."'>";
          echo "</div>";
      }
      echo "<br><br>";
      for($page = 1; $page <= $number_of_pages; $page++){
        echo "<a href= 'gallery.php?page=" .$page . "'>" .  " " . $page . "</a>";
      }
    }catch(PDOException $e)
    {
        echo $stmt . "<br>" . $e->getMessage();
    }
?>
</div>
    <div class="footer">
        <?php include 'includes/footer.php' ?>
        </div>
</body>
</html>