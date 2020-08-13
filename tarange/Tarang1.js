

function validateform(){  
    
    var name=document.getElementById("username").value;  
    var password=document.getElementById("pass").value;  
      
    if (name.length >= 3 && name.length <= 12 ) {  

    }
    else if( name.string = "@" ){
        alert("not accepted"); 
        return false;
    }
    else if( "@"  in password){

        alert("not accepted"); 
        return false;
    }
    else if (password.length >= 5 && password.length <= 12){

    }
    else{

        alert("not accepted"); 
        return false;
    }

}













