function normalize(text){
    let [firstLetter, ...restOfThem] = text.replace(/-/g," ").split("");
    return [firstLetter.toUpperCase(), ...restOfThem].join("");
}

function parseQueryString(url) {
    return new URLSearchParams(url);
}
export { normalize,parseQueryString }