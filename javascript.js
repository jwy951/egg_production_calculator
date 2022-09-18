function eggsfunction() {
  var coop1 =(document.getElementById("firstcoop").value);
  var coop2 =(document.getElementById("secondcoop").value);
  var coop3 =(document.getElementById("thirdcoop").value);
  var coop4 =(document.getElementById("forthcoop").value);

  if(coop1.length === 0 || coop2.length === 0 || coop3.length === 0 || coop4.length === 0) {
    //check whether the user has typed something

      alert("Fill all the filds!");
    }
  
    else {
      //convert the strings to numbers
      coop1 = parseInt(coop1);
      coop2 = parseInt(coop2);
      coop3 = parseInt(coop3);
      coop4 = parseInt(coop4);
      var totaleggs=coop1+coop2+coop3+coop4;
      document.getElementById("hidden").style.display = 'block';
      document.getElementById("coop1").innerHTML=coop1;
      document.getElementById("coop2").innerHTML=coop2;
      document.getElementById("coop3").innerHTML=coop3;
      document.getElementById("coop4").innerHTML=coop4;
      document.getElementById("totaleggs").innerHTML = totaleggs;
  }
}
function reset() {
    location.reload();
  }
  function projection(selling_price,time){
   var production=(document.getElementById("eggs").value);
   if(production.length===0){
     alert("Empty fields not allowed");
   }else{
     production =parseFloat(production);
    var weekly=45*production*7;
    var monthly=45*production*30;
    var yearly=45*production*365;
    document.getElementById("hidden2").style.display = 'block';
    document.getElementById("weekly").innerHTML=weekly;
    document.getElementById("monthly").innerHTML=monthly;
    document.getElementById("yearly").innerHTML=yearly;
   }
  }
 function revenue(){
  var total=(document.getElementById("total").value);
  if(total.length===0){
    alert("Empty fields not allowed");
  }else{
    total =parseFloat(total);
    var incomePerDay=total*45;
  var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days= [ 31,29,31,30,31,30,31,31,30,31,30,31];
  for (i = 0; i<months.length; i++){
    output = days[i] * incomePerDay;
    document.getElementById("hidden3").style.display = 'block';
    document.getElementById("hidden3").innerHTML+=("Your income for " + months[i] +  "is  Ksh  " + output + "</p>");
  }
}
 }