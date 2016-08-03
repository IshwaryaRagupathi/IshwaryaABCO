
   function display(str) {
   // var str = document.getElementById("ename").value;
    if (str.length == 0) { 
        document.getElementById("p1").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("p1").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "example.php?q=" + str, true);
        xmlhttp.send();
    }
}
$(document).ready(function(){
    $("input").keyup(function(){
        var str = $("input#ename").val();
        display(str);
    });
});
