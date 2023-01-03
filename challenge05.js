function getMaxGifts(giftsCities, maxGifts, maxCities) {
    function allCombinationsOfArray(data) {
        return data.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]])
    }
    const result = allCombinationsOfArray(giftsCities)
    let arrayResult = []
    for (let i = 1; i < result.length; i++) {
        if (result[i].length <= maxCities) {
            const newArray = maxGifts - result[i].reduce((a, v) => a + v)
            if (newArray >= 0) {
                arrayResult.push(newArray)
            }
        }
    }
    if (arrayResult.length === 0) {
        return 0
    }
    return maxGifts - arrayResult.sort((a, b) => a - b)[0]
}
getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
// getMaxGifts([50], 100, 1) // 50
// getMaxGifts([101, 50, 70, 30], 100, 2) // 100
// getMaxGifts([50, 70, 30], 100, 3) // 100
// getMaxGifts([50, 70, 30], 100, 4) // 100
//     Initialize the resulting array with two items, [] and [1]. Then iterate through the rest of nums and one each step copy all the items that are already in the result two times, first time just as they are and second time with a new nums[i] added.
// const checkIfCero = (array) => {
//     if (array.findIndex((elem) => elem === 0) !== -1) {
//         return true
//     } else { return false }
// }
// console.log(giftsCities, maxGifts, maxCities)
// const result = giftsCities.map((item) => maxGifts - item).filter((elem) => elem > 0)
// console.log('primera ciudad -->' + result)
// if (checkIfCero(result)) { //devolver maxgifts
//     console.log('----------------ya no hace falta buscar más ++++++++++++++++')
//     return maxGifts
// } else {
//     console.log(result)
//     result.forEach((item, index) => {
//         console.log('item -> ' + item)
//         for (let i = 0; i < giftsCities.length; i++) {
//             let newArrayOfCities = result
//                 .filter((item, index) => index !== i)
//                 .map((elem) => {
//                     const aux = item - elem
//                     console.log('aux -> ' + aux)
//                     return aux
//                 })
//             console.log(newArrayOfCities)
//             if (checkIfCero(newArrayOfCities)) {
//                 console.log('----------------ya no hace falta buscar más ++++++++++++++++')
//                 return maxGifts
//             }
//         }

//     })
// }


    // const checkIfCero = (array) => {
    //     if (array.findIndex(element => element === 0) > 0) {
    //         console.log('true')
    //         return true
    //     } else {
    //         console.log('false')
    //         return false
    //     }
    // }
    // const checkArray = (array, espacioEnBolsa, ciudades) => {
    //     //[ 12, 3, 9, 5, 13], 20, 3
    //     if (ciudades > 1) {
    //         let newArrayOfCities1 = array.map(item => espacioEnBolsa - item)
    //         console.log(newArrayOfCities1)
    //         return newArrayOfCities1
    //     }
    // }
    // console.log(giftsCities)
    // let espacioEnBolsa = maxGifts
    // let newArrayOfCities1 = checkArray(giftsCities, maxGifts, maxCities)
    // if (checkIfCero(newArrayOfCities1)) {
    //     console.log(espacioEnBolsa)
    //     return espacioEnBolsa
    // }
    // console.log('seguir buscando')
    // maxCities -= 1 //ya he visitado una ciudad, recorro el resto
    // for (let i = 0; i < giftsCities.length - 1; i++) {
    //     console.log(i)
    //     //quito un elemento, comparo con el resto
    //     let newArrayOfCities = giftsCities.filter((item, index) => index !== i)
    //     console.log('newArrayOfCities -> ' + newArrayOfCities)
    //     console.log('giftsCities -> ' + giftsCities)
    //     console.log('newArrayOfCities1[i] -> ' + newArrayOfCities1[i])
    //     console.log('maxCities -> ' + maxCities)

    //     if (checkIfCero(checkArray(newArrayOfCities, newArrayOfCities1[i], maxCities))) {
    //         console.log(espacioEnBolsa)
    //         return espacioEnBolsa
    //     }
    // }
    // console.log(newArrayOfCities1 + ' <= newArrayOfCities1')




    // return 0




// const checkArray = (array, times) => {
//     for (let j = 1; j < times; j++) {
//         for (let i = 0; i < array.length; i++) {
//             let newArrayOfCities = array.filter((item, index) => index !== i)
//                 .map(item => array[i] - item)
//             console.log('newArray of cities ' + array[i] + '----> ' + newArrayOfCities)
//             if (checkIfCero(newArrayOfCities)) {
//                 console.log('------------------- no busques más, cabe todo en la bolsa--------------' + espacioEnBolsa)
//                 return espacioEnBolsa
//             } else if (times > 0) {
//                 //quitar los negativos
//                 array = newArrayOfCities
//                 console.log('guarda ' + newArrayOfCities)
//                 console.log(array)
//                 times -= times
//             }
//         }
//     }
//     return 0
// }


    // la suma más alta de regalos a repartir
    // visitando un máximo de 3 ciudades
    // es de 20: [12, 3, 5]

    // la suma más alta sería [12, 7, 11]
    // pero excede el límite de 20 regalos y tendría
    // que dejar alguna ciudad a medias.



/*
const compruebaEspacioEnBolsa = (espacioEnBolsa, newArrayOfCities, i) => {
    
    let newArrayOfCities = giftsCities.filter((element, index) => index !== i)
    //función que le paso el espacio que queda y un array de ciudades para que compruebe el espacio
    console.log('**************** array a analizar : ' + giftsCities[i])
    console.log('espacio en bolsa = ' + espacioEnBolsa)
    console.log('numero de ciudades = ' + maxCities)
    console.log('newArray of cities --> ' + newArrayOfCities)
    const newArrayOfCities1 = newArrayOfCities.map(item => espacioEnBolsa - item)
    newArrayOfCities = newArrayOfCities1.filter(item => item > 0)
    console.log('newArray of cities ----> ' + newArrayOfCities)
    if (espacioEnBolsa === 0) {
        console.log('------------------- no busques más, cabe todo en la bolsa--------------')
        return true //el primer elemento es igual al tamaño de la bolas --> salimos devolviendo true
    } else if (espacioEnBolsa < 0) {
        return false //el primer elemento no cabe en la bolsa --> salimos devolviendo false
    } else if (espacioEnBolsa > 0) {
        console.log('hay hueco')
                    //quito el elemento que estoy analizando
                
    }
}
//item 1 - maxgifts
let espacioEnBolsa = maxGifts - giftsCities[0]
for (let i = 0; i < giftsCities.length; i++) {
    compruebaEspacioEnBolsa(espacioEnBolsa, giftsCities, i)
    
    if (espacioEnBolsa === 0) {
        console.log('------------------- no busques más, cabe todo en la bolsa--------------')
        return true //el primer elemento es igual al tamaño de la bolas --> salimos devolviendo true
    } else if (espacioEnBolsa < 0) {
        return false //el primer elemento no cabe en la bolsa --> salimos devolviendo false
    } else if (espacioEnBolsa > 0) {
        console.log('hay hueco')
        //hay sitio, tenemos que recorrer el resto del array restando al espacio cada posición, 
        //a ver si resulta algún 0
 
    }
 
    // mirar si hay algún 0 en el nuevo array, significaría que se puede llenar la bolsa
    if (checkIfCero(newArrayOfCities)) {
        console.log('se puede llenar la bolsa')
    } else {
        console.log('a seguir buscando')
    }
    // ya ha visitado una ciudad
    maxCities = maxCities - 1
    if (maxCities == 0) {
        console.log('ya he visitado el número máximo de ciudades--> salir con false')
        return false
    }
 
 
 
}
*/