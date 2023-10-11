let eded = 18

if (eded < 2) {
    console.log(" 2-nin quvvəti deyil.");
} else {
    while (eded > 1 && eded % 2 === 0) {
        eded /= 2;
    }

    if (eded === 1) {
        console.log(" 2-nin quvvətidir.");
    } else {
        console.log(" 2-nin quvvəti deyil.");
    }
}