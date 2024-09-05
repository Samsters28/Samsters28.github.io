var buttons = document.getElementsById("container");

button.onclick = onbuttonclicked;

function onbuttonclicked(){
    if (onbuttonclicked) {
        button1.style.backgroundColor = "red";
        button1.disabled=true;
    } else {
        button1.style.backgroundColor = "green";
        button1.disabled=false;
      }
    }