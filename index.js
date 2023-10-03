// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber) {
    let distanceInBlocks = distanceFromHqInBlocks(streetNumber);
    return (distanceInBlocks * 264);
}  

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * .02);
    } else if (distanceInFeet > 2000 && distanceInFeet <2500) {
        return 25;
    } else (distanceInFeet >= 2500) 
        return "cannot travel that far";
}