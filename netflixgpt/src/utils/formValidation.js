export const formValidation = (name, email, password,type) => {

    let errorObj = {nameError:'',emailError:'',passwordError:''}
    const nameValidation = /^[a-zA-Z\s]+$/.test(name)
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const passwordValidation =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    
    if (nameValidation && emailValidation && passwordValidation && type==='signup')
    {
        return null
    }
    else if (emailValidation && passwordValidation && type==='signin')
    {
        return null
    }
    
    if (!nameValidation && type === "signup") {
      errorObj.nameError = "Invalid name";
    } else if (!emailValidation) {
      errorObj.emailError = "Invalid email, enter an valid email";
    } else {
      errorObj.passwordError = "Invalid password formate";
    }

return errorObj
}