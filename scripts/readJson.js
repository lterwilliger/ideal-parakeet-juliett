
$('#btnLoadData').click(function() {
//  import {isChecked} from './script.js';
    console.log("clicked");

//     let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

//    let jsonURL = "demo.json";

   let jsonURL = "https://lterwilliger.github.io/fictional-octo-spoon-india/demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.username);

            //loads first name into my first input box (in example #1)
            $("#username").val(data.username);

            $('input:radio[name="radioDefault"]').each(function () {
                // if (data.radioDefault === $(this).val())
                // {
                  $(this).prop('checked', true)
                    console.log("Checked function call: ",$(this));
                      isChecked();
               // }
               return false;
            });
            //console.log (sList);

            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                //$("#dataContainer").append(key + " " + val);
                $(`#${key}`).val(val);

            });

        }
    });

    return false;
});
