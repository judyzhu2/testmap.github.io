var search_input = document.querySelector("#search_input");

search_input.addEventListener("keyup", function(e){
  var span_items = document.querySelectorAll(".table_body .name span");
  var table_body = document.querySelector(".table_body ul");
  var search_item = e.target.value.toLowerCase();

 span_items.forEach(function(item){
   if(item.textContent.toLowerCase().indexOf(search_item) != -1){
      item.closest("li").style.display = "block";
   }
   else{
     item.closest("li").style.display = "none";
     }
 })
});

var search_input = document.querySelector("#search_input1");

search_input.addEventListener("keyup", function(e){
  var span_items = document.querySelectorAll(".table_body .phone span");
  var table_body = document.querySelector(".table_body ul");
  var search_item = e.target.value.toLowerCase();

 span_items.forEach(function(item){
   if(item.textContent.toLowerCase().indexOf(search_item) != -1){
      item.closest("li").style.display = "block";
   }
   else{
     item.closest("li").style.display = "none";
     }
 })
});

// var locationSearch = '';
// document.getElementById('0').addEventListener("click", function(){
//    var locationSearch = '0';
//    export { locationSearch };
//    document.getElementById('0').innerHTML = locationSearch;
// });
// document.getElementById('1').addEventListener("click", function(){
//    var locationSearch = '1';
//    document.getElementById('1').innerHTML = locationSearch;
// });
// document.getElementById('2').addEventListener("click", function(){
//    var locationSearch = '2';
//    document.getElementById('2').innerHTML = locationSearch;
// });
// document.getElementById('3').addEventListener("click", function(){
//    var locationSearch = '3';
//    document.getElementById('3').innerHTML = locationSearch;
// });
// document.getElementById('4').addEventListener("click", function(){
//    var locationSearch = '4';
//    document.getElementById('4').innerHTML = locationSearch;
// });
// document.getElementById('5').addEventListener("click", function(){
//    var locationSearch = '5';
//    document.getElementById('5').innerHTML = locationSearch;
// });
// document.getElementById('6').addEventListener("click", function(){
//    var locationSearch = '6';
//    document.getElementById('6').innerHTML = locationSearch;
// });
// document.getElementById('7').addEventListener("click", function(){
//    var locationSearch = '7';
//    document.getElementById('7').innerHTML = locationSearch;
// });
// document.getElementById('8').addEventListener("click", function(){
//    var locationSearch = '8';
//    document.getElementById('8').innerHTML = locationSearch;
// });
// document.getElementById('9').addEventListener("click", function(){
//    var locationSearch = '9';
//    document.getElementById('9').innerHTML = locationSearch;
// });
// document.getElementById('10').addEventListener("click", function(){
//    var locationSearch = '10';
//    document.getElementById('10').innerHTML = locationSearch;
// });
// document.getElementById('11').addEventListener("click", function(){
//    var locationSearch = '11';
//    document.getElementById('11').innerHTML = locationSearch;
// });
// document.getElementById('12').addEventListener("click", function(){
//    var locationSearch = '12';
//    document.getElementById('12').innerHTML = locationSearch;
// });
// document.getElementById('13').addEventListener("click", function(){
//    var locationSearch = '13';
//    document.getElementById('13').innerHTML = locationSearch;
// });
// document.getElementById('14').addEventListener("click", function(){
//    var locationSearch = '14';
//    document.getElementById('14').innerHTML = locationSearch;
// });
// document.getElementById('15').addEventListener("click", function(){
//    var locationSearch = '15';
//    document.getElementById('15').innerHTML = locationSearch;
// });
// document.getElementById('16').addEventListener("click", function(){
//    var locationSearch = '16';
//    document.getElementById('16').innerHTML = locationSearch;
// });
// document.getElementById('17').addEventListener("click", function(){
//    var locationSearch = '17';
//    document.getElementById('17').innerHTML = locationSearch;
// });
// document.getElementById('18').addEventListener("click", function(){
//    var locationSearch = '18';
//    document.getElementById('18').innerHTML = locationSearch;
// });
// document.getElementById('19').addEventListener("click", function(){
//    var locationSearch = '19';
//    document.getElementById('19').innerHTML = locationSearch;
// });
// document.getElementById('20').addEventListener("click", function(){
//    var locationSearch = '20';
//    document.getElementById('20').innerHTML = locationSearch;
// });
// document.getElementById('21').addEventListener("click", function(){
//    var locationSearch = '21';
//    document.getElementById('21').innerHTML = locationSearch;
// });
// document.getElementById('22').addEventListener("click", function(){
//    var locationSearch = '22';
//    document.getElementById('22').innerHTML = locationSearch;
// });
// document.getElementById('23').addEventListener("click", function(){
//    var locationSearch = '23';
//    document.getElementById('23').innerHTML = locationSearch;
// });
// document.getElementById('24').addEventListener("click", function(){
//    var locationSearch = '24';
//    document.getElementById('24').innerHTML = locationSearch;
// });
// document.getElementById('25').addEventListener("click", function(){
//    var locationSearch = '25';
//    document.getElementById('25').innerHTML = locationSearch;
// });
// document.getElementById('26').addEventListener("click", function(){
//    var locationSearch = '26';
//    document.getElementById('26').innerHTML = locationSearch;
// });
