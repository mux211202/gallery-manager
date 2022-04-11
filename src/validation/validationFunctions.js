// object with string and boolean value
export const checkPasswordLength = (password, minLength) => {
    const resultObj = { result:'', isValid: false };
    if (password.length < minLength){
        resultObj.result = `Password's length must be at least ${minLength} characters`;
        resultObj.isValid = false;
    }else {
        resultObj.result = password;
        resultObj.isValid = true;
    }
    return resultObj;
};

// object - string, boolean
export const arePasswordsEaqual = (password1, password2) => {
    const resultObj = { result:'', isValid: false };
    if (password1 === password2){
        resultObj.result = `Passwords must be the same`;
        resultObj.isValid = false;
    }else {
        resultObj.result = '';
        resultObj.isValid = true;
    }
    return resultObj;
};

