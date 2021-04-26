
let triangle1 = {
    base: 10,
    height: 13
}
let triangle2 = {
    base: 16.5,
    height: 20.3
}
let triangle3 = {
    base: 16.5,
    height: 20.3

}
let triangle4 = {
    base: 20.3,
    height: 16.5
}
let triangle5 = {
    base: 7.8,
    height: 5.6
}
let triangle6 = {
    base: 9.3,
    height: 12.4
}
function area(triangle) {
    const { base, height } = triangle
    return (base * height) / 2

}

console.log('%c----case1----', 'color:green')
console.log(`Triangle One has an area of ${area(triangle1)} cm2`)
console.log(`Triangle two has an area of ${area(triangle2)} cm2`)
if (area(triangle1) > area(triangle2)) {

    console.log(`The triangle with the biggest area is Triangle one`)
} else if (area(triangle1) < area(triangle2)) {
    console.log(`The triangle with the biggest area is Triangle two`)

} else {
    console.log('both have the same size')
}



console.log('%c----case2----', 'color:green')
console.log(`Triangle One has an area of ${area(triangle3)} cm2`)
console.log(`Triangle two has an area of ${area(triangle4)} cm2`)
if (area(triangle3) > area(triangle4)) {

    console.log(`The triangle with the biggest area is Triangle three`)
} else if (area(triangle3) < area(triangle4)) {
    console.log(`The triangle with the biggest area is Triangle four`)

} else {
    console.log('both have the same size')
}


console.log('%c----case3----', 'color:green')
console.log(`Triangle One has an area of ${area(triangle5)} cm2`)
console.log(`Triangle two has an area of ${area(triangle6)} cm2`)


if (area(triangle5) > area(triangle6)) {

    console.log(`The triangle with the biggest area is Triangle five`)
} else if (area(triangle5) < area(triangle6)) {
    console.log(`The triangle with the biggest area is Triangle six`)

} else {
    console.log('both have the same size')
}
