/**
 * A function used to check validation of the fields.
 * 
 * @param name - Take a name for checking the name Pattern with Regular Express.
 * @param email - Take a email for checking the email Pattern with Regular Express.
 * @param password - Take a password for checking the password Pattern with Regular Express.
 * 
 * @returns `String` - If params passed the validation.
 * @returns `Null` - If all params are passed the validation.  
 **/

export const CheckValidationOfForm = (name, email, password) => {

    const isFullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password);

    if (!isFullNameValid && name !== null) return 'Name is invalid'
    if (!isEmailValid) return 'Email is  invalid';
    if (!isPasswordValid) return 'Password have uppercase, special char, num,& 6+ characters';

    return null;
}