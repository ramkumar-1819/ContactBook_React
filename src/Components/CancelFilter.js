export  function CancelFilter(){
    //Deselecting the checkboxes
    const allCheckbox=document.querySelectorAll(".chkbox");
          for(var boxes of allCheckbox){
              boxes.checked=false
        }
        //removing the Appliedsort 
        const radio=document.getElementsByName("sortby");
        for(var button of radio){                            
            button.checked=false
        }
        //Hiding the delete option
        document.getElementsByClassName("delete")[0].style.display="none";
}