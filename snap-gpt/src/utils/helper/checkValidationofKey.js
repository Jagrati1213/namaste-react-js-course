export const checkValidationOfKey = (apiKey) => {

    const isOpenKey = /^sk-[a-zA-Z0-9]{24}.*/.test(apiKey);
    if (!isOpenKey) return 'Invalid OpenAi Key';
    return null;
}