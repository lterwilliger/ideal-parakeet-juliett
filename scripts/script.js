function isChecked(){
  console.log($('input[name="radioDefault"]:checked').val());
  if ($('input:radio[name="radioDefault"]').is(':checked') && $('input:radio[name="radioDefault"]:checked').val() == 'first' ) {
    var frs = document.getElementById("firstTime");
    var again = document.getElementById("againTime");
    console.log("first is checked");
      if (frs.style.display === "none") {
        frs.style.display = "block";
        again.style.display = "none";
      } else {
        frs.style.display = "none";
      }
      return false;
  }
  else if ($('input:radio[name="radioDefault"]').is(':checked') && $('input:radio[name="radioDefault"]:checked').val() == 'return' ) {
    var frs = document.getElementById("firstTime");
    var again = document.getElementById("againTime");
    console.log("return is checked");
    if (again.style.display === "none") {
      again.style.display = "block";
      frs.style.display = "none";
    } else {
      again.style.display = "none";
    }
  }
  else {
    console.log("Something else");
  }
  return false;
}
// Clear element by type

$(document).ready(function() {
    console.log("document is ready!");
    // Get element info
    var frst = document.getElementById("firstTime");
    var retr = document.getElementById("againTime");
    var box = document.getElementById("boxOutput");
    frst.style.display = "none";
    retr.style.display = "none";
    box.style.display = "none";

    let alphaRegex = /^[a-zA-Z]*$/;
    var el = document.getElementById("submitButton");
    var elName = document.getElementById("username");
    isChecked();
// clear button function calls
    $('#btnClear').click(function(){
            clearElement("#username", "input");
            clearElement("#phone", "input");
            clearElement("#checkIn", "input");
            clearElement("#checkOut", "input");
            clearElement("#password", "input");
            clearElement("#email", "input");
            clearElement("#nameOut","html");
            clearElement("#infoOut","html");
            clearElement("#return","");
            clearElement("#first","");


            return false;
      });
      $('input:radio[name="radioDefault"]').change(
        function(){
          // console.log($('input:radio[name="radioDefault"]').val());
          isChecked();
          return false;

      });


    $('#submitButton').click(function() {

        if ($('#username').val()) {
            console.log("there is something in this text box");
            nameOutput = "Thank you for booking, ";
            nameOutput+= $('#username').val();
            nameOutput+="!";
            // final set val
            $(nameOut).html(nameOutput);

            infoOutput = "You booked from ";
            infoOutput += $('#checkIn').val();
            infoOutput += " to ";
            infoOutput += $('#checkOut').val();
            infoOutput += ".";
            infoOutput += "<br> Hope you enjoy your stay!";

            $(infoOut).html(infoOutput);
            box.style.display = "block";
            //$('#noSpaces').removeClass("error")
        } else {
            console.log("there is NOTHING in this text box");
            //$('#noSpaces').removeClass("success").addClass("error").focus();
            //bring focus to it
            //change the placeholder text
        }
        return false;

    });
    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html("");
        }
        else if(elementType=="input"){
            $(elementId).val("");
        }
        else {
          $(elementId).prop("checked", false);
          frst.style.display = "none";
          retr.style.display = "none";
        }
        box.style.display = "none";
        return false;
    }


//export {isChecked};
});
