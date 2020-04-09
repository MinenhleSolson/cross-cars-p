//making interractive selectors for MAKE and  MODEL
alert("This is a Computer Version :)")
$(document).ready(function () {
    $('#make').val("0");
    
    $('#make').change(function () {
      selectVal = $('#make').val();
     //if no make has been selected the MODEL select will remain disable
      if (selectVal == 0) {
         $('#Model').prop("disabled", true);
      }
      //when the user select MAKE, the MODEL select will be enabled and view options depending on the user's MAKE selection
      //it will replace the disabled selected 
      else if(selectVal == '1') {
        $('#Model').prop("disabled", false).html('<select><option disabled selected hidden>Select Model</option><option value="pages/Audi/a1/a1-views.html">A1</option><option value="pages/Audi/a3/a3-views.html">A3</option><option value="pages/Audi/a4/a4-views.html">A4</option><option value="pages/Audi/a5/a5-views.html">A5</option><option value="pages/Audi/a7/a7-views.html">A7</option><option value="pages/Audi/Q3/q3Views.html">Q3</option><option value="pages/Audi/Q5/q5Views.html">Q5</option><option value="pages/Audi/Q7/q7Views.html">Q7</option><option value="pages/Audi/R8/R8Views.html">R8</option><option value="pages/Audi/s3/S3Views.html">S3</option><option value="pages/Audi/s4/S4Views.html">S4</option><option value="pages/Audi/s5/s5Views.html">S5</option></select>')
      }

      else if(selectVal == '2') {
        $('#Model').prop("disabled", false).html('<select><option disabled selected hidden>Select Model</option><option value="pages/BMW/1-Series/1seriesViews.html">1 Series</option><option value="pages/BMW/2-Series/2seriesViews.html">2 Series</option><option value="pages/BMW/3-Series/3seriesViews.html">3 Series</option><option value="pages/BMW/4-Series/4seriesViews.html">4 Series</option><option value="pages/BMW/7-Series/7seriesViews.html">7 Series</option><option value="pages/BMW/M2/m2Views.html">M2</option><option value="pages/BMW/M3/m3Views.html">M3</option><option value="pages/BMW/M4/m4Views.html">M4</option><option value="pages/BMW/M5/m5Views.html">M5</option><option value="pages/BMW/X1/x1Views.html">X1</option><option value="pages/BMW/X5/x5Views.html">X5</option><option value="pages/BMW/X6/x6Views.html">X6</option></select>')
      }
     
      else if(selectVal == '3') {
        $('#Model').prop("disabled", false).html('<select><option disabled selected hidden>Select Model</option><option value="pages/Dodge/challenger/challengerViews.html">Challenger</option><option value="pages/Dodge/charger/chargerViews.html">Charger</option><option value="pages/Dodge/journey/journeyViews.html">Journey</option></select>')
      }
     
      else if(selectVal == '4') {
        $('#Model').prop("disabled", false).html('<select><option disabled selected hidden>Select Model</option><option value="pages/Jaguar/E-pace/EpaceViews.html">E-Pace</option><option value="pages/Jaguar/F-pace/fpaceViews.html">F-Pace</option><option value="pages/Jaguar/F-type/ftypeViews.html">F-Type</option><option value="pages/Jaguar/XF/xfViews.html">XF</option></select>')
      }
      else if(selectVal == '5') {
        $('#Model').prop("disabled", false).html('<select><option disabled selected hidden>Select Model</option><option value="pages/Lexus/LX/LxViews.html">LX</option><option value="pages/Lexus/UX/uxViews.html">UX</option></select>')
      }
      else if(selectVal == '6') {
        $('#Model').prop("disabled", false).html('<select><option disabled selected hidden>Select Model</option><option value="pages/Mercedes-benz/Aclass/aclassViews.html">A-Class</option><option value="pages/Mercedes-benz/C-class/cclassViews.html">C-Class</option><option value="pages/Mercedes-benz/E-class/eclassViews.html">E-Class</option><option value="pages/Mercedes-benz/G-class/gclassViews.html">G-Class</option><option value="pages/Mercedes-benz/GLE/gleViews.html">GLE</option><option value="pages/Mercedes-benz/S-class/sclassViews.html">S-Class</option><option value="pages/Mercedes-benz/X-class/xclassViews.html">X-Class</option></select>')
      }
      else if(selectVal == '7') {
        $('#Model').prop("disabled", false).html('<select><option disabled selected hidden>Select Model</option><option value="pages/Toyota/avanza/avanzaViews.html">Avanza</option><option value="pages/Toyota/corolla/corollaViews.html">Corolla</option><option value="pages/Toyota/etios/etiosViews.html">Etios</option><option value="pages/Toyota/hilux/hiluxViews.html">Hilux</option><option value="pages/Toyota/land-cruiser/landcruiserViews.html">Land Cruiser</option><option value="pages/Toyota/quantum/quantumViews.html">Quantum</option><option value="pages/Toyota/RAV4/Rav4Views.html">RAV4</option><option value="pages/Toyota/supra/supraViews.html">Supra</option><option value="pages/Toyota/yaris/yarisViews.html">Yaris</option></select>')
      }
      else if(selectVal == '8') {
        $('#Model').prop("disabled", false).html('<select><option disabled selected hidden>Select Model</option><option value="pages/Volkswagen/amarok/amarokViews.html">Amarok</option><option value="pages/Volkswagen/Arteon/arteonViews.html">Arteon</option><option value="pages/Volkswagen/golf/golfViews.html">Golf</option><option value="pages/Volkswagen/jetta/jettaViews.html">Jetta</option><option value="pages/Volkswagen/kombi/kombiViews.html">Kombi</option><option value="pages/Volkswagen/passat/passatViews.html">Passat</option><option value="pages/Volkswagen/polo/poloViews.html">Polo</option><option value="pages/Volkswagen/scirocco/sciroccoViews.html">Scirocco</option><option value="pages/Volkswagen/tiguan/tiguanViews.html">Tiguan</option></select>')
      }
      //when the user click the search button it will view what the user has selected

      $("#searchBtn").click(function(){ 
        window.location = $('#Model').val();
        });
    
    });
});