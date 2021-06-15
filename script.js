$(document).ready(function(){
    var stringset1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var stringset2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var stringset3 = ["1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0"];
    var stringset4 = ["!","@","#","$","%","&","*","/","?","-"];
    $(".generateButton").click(function() {
        var stringUsed = stringset1
        if(document.getElementById('sel1').checked){
            stringset2.forEach(e => {
                stringUsed.push(e);
            });
        }
        if(document.getElementById('sel2').checked){
            stringset3.forEach(e => {
                stringUsed.push(e);
            });
        }
        if(document.getElementById('sel3').checked){
            stringset4.forEach(e => {
                stringUsed.push(e);
            });
        }
        console.log(stringUsed)
        var instances = $(".sel4").val();
        var password = "";
        if(instances >= 8 && instances <= 12){
            for(var i = 0; i < instances; i++){
                var passchar = stringUsed[Math.floor(Math.random()*stringUsed.length)];
                password = password + passchar;
            }
            console.log(password)
            $(".password").text(password)
        }
    })
})