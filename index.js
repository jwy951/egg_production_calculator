function production() {
    var chicken_coop_A =(document.getElementById("chicken_coop_A").value);
    var chicken_coop_B =(document.getElementById("chicken_coop_B").value);
    var chicken_coop_C=(document.getElementById("chicken_coop_C").value);
    var chicken_coop_D =(document.getElementById("chicken_coop_D").value);
    chicken_coop_A = parseFloat(chicken_coop_A);
    chicken_coop_B = parseFloat(chicken_coop_B);
    chicken_coop_C = parseFloat(chicken_coop_C);
    chicken_coop_D = parseFloat(chicken_coop_D);
        var total=chicken_coop_A+chicken_coop_B+chicken_coop_C+chicken_coop_D;
        document.getElementById("chicken_coop_a").innerHTML=chicken_coop_A;
        document.getElementById("chicken_coop_b").innerHTML=chicken_coop_B;
        document.getElementById("chicken_coop_c").innerHTML=chicken_coop_C;
        document.getElementById("chicken_coop_d").innerHTML=chicken_coop_D;
        document.getElementById("total").innerHTML = total;
    }
    function evaluation(){
     var rate=(document.getElementById("buying_rate").value);
     var alleggs=(document.getElementById("totaleggs").value);
     
       rate =parseFloat(rate);
       alleggs =parseFloat(alleggs);
      var weekly=rate*alleggs*7;
      var monthly=rate*alleggs*30;
      var yearly=rate*alleggs*365;
      document.getElementById("weekly").innerHTML=weekly;
      document.getElementById("monthly").innerHTML=monthly;
      document.getElementById("yearly").innerHTML=yearly;
    }
   function annual(){
    var whole=(document.getElementById("eggs").value);
      whole =parseFloat(whole);
      var dailyincome=whole*45;
    var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days= [ 31,29,31,30,31,30,31,31,30,31,30,31];
    for (i = 0; i<months.length; i++){
      result = days[i] * dailyincome;
      document.getElementById("year").innerHTML+=("Your income for " + months[i] +  "is  Ksh  " + result + "</p>");
    }
   }