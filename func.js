
let display_f = document.getElementById("display_form");
    let popup1 = document.getElementById("popup");
  
  
    function open_popup() {
      var cardno = document.card_details.Card_No.value;
      var Month = document.card_details.Month.value;
      var Year = document.card_details.Year.value;
      var CVC = document.card_details.CVC.value;
      
      if (cardno==null || cardno==""){  
        document.getElementById("cardno_error").innerHTML ="Wrong format, only numbers";
        return false;
      }
      else if (Month==null || Month==""){  
        document.getElementById("Date_error").innerHTML ="Can't be empty";
        return false;
      }
      else if (Year==null || Year==""){  
        document.getElementById("Date_error").innerHTML ="Can't be empty";
        return false;
      }
      else if (CVC==null || CVC==""){  
        document.getElementById("CVC_error").innerHTML ="Can't be empty";
        return false;
      }
      display_f.classList.add("display_popup");
      popup1.classList.add("display_pop");
    }

    function close_popup() {
      display_f.classList.remove("display_popup");
      popup1.classList.remove("display_pop");
    }
