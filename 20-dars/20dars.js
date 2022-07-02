 
 document.querySelector('.valyuta').addEventListener('change',function(event){
   var val = event.target.value;

   var httpSorov = new XMLHttpRequest();

     httpSorov.onreadystatechange = function () {
         if (httpSorov.readyState == 4 && this.status == 200) {
          var natija = JSON.parse(this.responseText);
            console.log(natija [0].CcyNm_UZ);
            console.log(natija [0].Date);
            console.log(natija [0].Rate); 
         }
    
     }

     httpSorov.open("GET", "https://cbu.uz/ru/arkhiv-kursov-valyut/json/RUB/2022-02-07/", true);
     httpSorov.send()

 }); 