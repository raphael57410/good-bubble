export const capitalizeFirstLetter = (str: string) => {
    return str.replace(/^\w/, (match) => match.toUpperCase());
}