var classic_value = 0;

var premium_value = 0;

var royal_value = 0;


function update_base_price(){
  classic_value =  Number(document.getElementById("classic_rd_btn").value);
  premium_value = Number(document.getElementById("premium_rd_btn").value);
  royal_value = Number(document.getElementById("royal_rd_btn").value);
  total_display_price()
}

function total_display_price() {

      // calculation of Classic customers:

      if(document.getElementById("classic_rd_btn").checked == true) {

        tipsCalc(classic_value)
      }

      // calculation of Premium customers:
      else if(document.getElementById("premium_rd_btn").checked == true) {

        tipsCalc(premium_value)
      }

      // calculation of Royal customers:

      else if(document.getElementById("royal_rd_btn").checked == true) {

        tipsCalc(royal_value)
      }
      else alert("Please select the basePrice below");
    }

    //function for total calculation
    function tipsCalc(basePrice){

      var tip_10 = Number(document.getElementById("tips_10_rd_btn").value);
      
      
      var tip_15 = Number(document.getElementById("tips_15_rd_btn").value);
      
      var tip_20 = Number(document.getElementById("tips_20_rd_btn").value);
      
      if(document.getElementById("tips_10_rd_btn").checked == true)
      {

        var total = basePrice * tip_10 + basePrice;
        document.getElementById("total_display").innerHTML = "Total: $"+ total.toFixed(2) ;
      }
      else if(document.getElementById("tips_15_rd_btn").checked == true)
      {
        var total = basePrice * tip_15 + basePrice;
        document.getElementById("total_display").innerHTML =  "Total: $"+total.toFixed(2) ;
      }
      else if(document.getElementById("tips_20_rd_btn").checked == true)
      {
        var total = basePrice * tip_20 + basePrice;
        document.getElementById("total_display").innerHTML =  "Total: $"+total.toFixed(2) ;
      }
      else {
        var total = basePrice 
        document.getElementById("total_display").innerHTML =  "Total: $"+total.toFixed(2) ;
      }

    }
