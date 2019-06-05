<?php
$servername = "remotemysql.com";
$username = "ZAnv1xiTfb";
$password = "SNT9wJ6k0k";
$dbname = "ZAnv1xiTfb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT JSON FROM antwoorden";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $resultString = $row["JSON"];
    }
} else {
    echo "0 results";
}

//$jsonData = json_encode($resultString);
echo $resultString;

//echo $resultString;

$conn->close();
?>