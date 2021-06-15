"use strict";


//Create a tip calculator based on 15%, 18%, and 20% using a drop down menu

document.getElementById("sub-button").onclick= tipCalculator;

// Function to create variables to hold user in and use those variables to calculate tip and total bill
  function tipCalculator () { 
      var bill= Number(document.getElementById("bill2").value);
      var tipPercent= Number(document.getElementById("tip").value);
      var totalTipAmt= Number((bill*tipPercent).toFixed(2));
      var totalBill= Number(bill + totalTipAmt);
            document.getElementById("tipamt").innerHTML="Tip amount = $" + totalTipAmt;
            document.getElementById("totalbill").innerHTML= "Total bill with tip = $" + totalBill.toFixed(2);           
        }; 
                   

           
            