<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>prime numbers</title>
</head>
<style>
    body{
        background-color: #333232;
    }

    h1{
        color: #f6b622;
    }
</style>
<body>
    <h1 id="h1"></h1>


    <script>
        const number = (prompt("Enter a positive number: "));
       let isPrime = true;

       if (number === 1) {
        document.getElementById("h1").innerText= "1 is neither prime nor composite";
       }

       else if (number > 1) {
        for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.getElementById("h1").innerText  = "is a prime number";
    } else {
        document.getElementById("h1").innerText  = "is a not prime number";
    }
}
else {
 document.getElementById("h1").innerText  = "The number is not a prime number.";
}


    </script>
</body>
</html>