
// object - string, boolean
export const arePasswordsValid = (password1, password2) => { 
    const resultObj = { result:'', isValid: false };
    if(password1.length > 0 && password2.length > 0){
        if(password1.length === password2.length){
            if(password1.length >= 6){
                if (password1 === password2){
                    resultObj.result = '';
                    resultObj.isValid = true;
                }else {
                    resultObj.result = `Passwords must be the same!`;
                    resultObj.isValid = false;
                }
            } else {
                resultObj.result = `Password's length must be at least 6 characters`;
                resultObj.isValid = false;
            }
        } else {
            resultObj.result = `Passwords must be the sam`;
            resultObj.isValid = false;
        }
    } else {
        resultObj.result = `Fill all inputs!`;
        resultObj.isValid = false;
    }
    return resultObj;
};

export const isEmailValid = (email) => {
    const resultObj = { result:'', isValid: false };
    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //figure it out
    if ( email.match(validRegex) ) {
        resultObj.result = '';
        resultObj.isValid = true;
    } else {
        resultObj.result = `Email is not valid`;
        resultObj.isValid = false;
    }

    return resultObj;
}

