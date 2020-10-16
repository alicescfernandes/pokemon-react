function normalize(text){
    let [firstLetter, ...restOfThem] = text.replace(/-/g," ").split("");
    return [firstLetter.toUpperCase(), ...restOfThem].join("");
}

export {normalize}