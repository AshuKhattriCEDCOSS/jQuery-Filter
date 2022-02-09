
var a = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

$(document).ready(function () {
   
    display();
   
$("#brand").on("change",function(){

    if($("#brand").val()=="default")
    {
        display();
    }
    else{
    temp=0;
    var values=$("#brand").val();
    check_by_brand(temp,values);
    }
});
$("#os").on("change",function(){
    if($("#os").val()=="default")
    {
        display();
    }
    else{
    temp=0;
    var values=$("#os").val();
    check_by_os(temp,values);
    }
});  

$("#data").on("click",".hide",function(){
    temp=0;
    var values=$(this).attr("data-hide");
    $("#row_"+values).css("display","none");

});  


});
function search()
{
    var temp=0;f=0;
    var values=$("#searchrecord").val();
    for(var i = 0; i < a.length; i++) {
        if(values==a[i].id || values==a[i].name){
        temp +=
          "<tr id='row_"+a[i].id+"'><td>" +
          a[i].id +
          "</td><td>" +
          a[i].name +
          "</td><td>" +
          a[i].brand +
          "</td><td>" +
          a[i].os +
          "</td><td><input type='button' class='hide' value='X' data-hide='"+a[i].id+"'></td></tr>";
          f=1;
        }
    }
    if(f==0)
    {
        alert("No Record Found!!");
    }
    $("#data").html(temp);
}
function check_by_brand(temp,values){
  
    for(var i = 0; i < a.length; i++) {
        if(values==a[i].brand){
        temp +=
          "<tr id='row_"+a[i].id+"'><td>" +
          a[i].id +
          "</td><td>" +
          a[i].name +
          "</td><td>" +
          a[i].brand +
          "</td><td>" +
          a[i].os +
          "</td><td><input type='button' class='hide' value='X' data-hide='"+a[i].id+"'></td></tr>";
        }
    }
    $("#data").html(temp);
}
function check_by_os(temp,values){
   
    for(var i = 0; i < a.length; i++) {
        if(values==a[i].os){
        temp +=
          "<tr id='row_"+a[i].id+"'><td>" +
          a[i].id +
          "</td><td>" +
          a[i].name +
          "</td><td>" +
          a[i].brand +
          "</td><td>" +
          a[i].os +
          "</td><td><input type='button' class='hide' value='X' data-hide='"+a[i].id+"'></td></tr>";
        }
    }
    $("#data").html(temp);
}
function display(){
    var temp = 0;
    console.log("bjasbd");
    for(var i = 0; i < a.length; i++) {
      temp +=
        "<tr id='row_"+a[i].id+"'><td>" +
        a[i].id +
        "</td><td>" +
        a[i].name +
        "</td><td>" +
        a[i].brand +
        "</td><td>" +
        a[i].os +
        "</td><td><input type='button' class='hide' value='X' data-hide='"+a[i].id+"'></td></tr>";
  
  }
  $("#data").html(temp);
}