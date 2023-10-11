let ay = prompt("Bir ay daxil edin:");
// Live Server Vasitesi ile Website-ye girib deyeri daxil etdikden sonra Inspectden Consoleni aciriq
switch (ay) {
    case "dekabr":
    case "yanvar":
    case "fevral":
        console.log(ay + " qis ayidir");
        break
    case "mart":
    case "aprel":
    case "may":
        console.log(ay + " yaz ayidir");
        break
    case "iyun":
    case "iyul":
    case "avqust":
        console.log(ay + " yay ayidir");
        break
    case "sentyabr":
    case "oktyabr":
    case "noyabr":
        console.log(ay + " payiz ayidir");
        break
    default:
        console.log("Zehmet olmasa duzgun daxil edin");
        break;
}