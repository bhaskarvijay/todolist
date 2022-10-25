const date = new Date();
const day = date.getDay();


dayMessage(day);


function dayMessage(day){
  if (day === 0 || day === 6){
    $("h1").text("holiday");
  }else{
    $('h1').html("workday");
  }
}
