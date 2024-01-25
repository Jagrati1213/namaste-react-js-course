export const CheckValidationOfForm = (name, email, password) => {

    const isFullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password);

    if (!isFullNameValid && name !== null) return 'Name is invalid'
    if (!isEmailValid) return 'Email is  invalid';
    if (!isPasswordValid) return 'Password have uppercase, special char, num,& 6+ characters';

    return null;
}