let number = 15
let cavab

if (number < 2) {
    console.log("ne sade ne murekkeb");
}
else if (number === 2) {
    console.log("sade ededdir");
}

else {
    for (let i = 2; i  <= number; i++) {
        if (number % i === 0) {
            cavab="Murekkeb ededdir"
            
        }
        else {
            cavab="Sade ededdir"

        }
    }
    console.log(cavab);
}
