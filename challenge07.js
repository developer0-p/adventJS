function getGiftsToRefill(a1, a2, a3) {
    const a1UniqueValues = a1.filter((value, index, self) => self.indexOf(value) === index)
    const a2UniqueValues = a2.filter((value, index, self) => self.indexOf(value) === index);
    const a3UniqueValues = a3.filter((value, index, self) => self.indexOf(value) === index);
    let result = []
    result = a1UniqueValues.concat(a2UniqueValues).concat(a3UniqueValues)
    const uniq = result
        .map((name) => {
            return {
                count: 1,
                name: name
            };
        })
        .reduce((result, b) => {
            console.log(result, b)
            result[b.name] = (result[b.name] || 0) + b.count;
            return result;
        }, {});
    const notDuplicates = Object.keys(uniq).filter((a) => uniq[a] === 1)
    return notDuplicates
}



const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']

//https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array