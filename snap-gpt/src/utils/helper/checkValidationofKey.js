/**
*  A function that check the api key validation.
*
* @param apiKey : A function take api key to check validation.
* @return `sting` | `null`
 */
export const checkValidationOfKey = (apiKey) => {

    const isOpenKey = /^sk-[a-zA-Z0-9]{24}.*/.test(apiKey);
    if (!isOpenKey) return 'Invalid OpenAi Key';
    return null;
}