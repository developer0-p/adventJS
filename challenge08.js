function checkPart(part) {
    let j = 0
    for (let i = 0; i < part.length; i++) {
        const word = part.substr(0, i).concat(part.substr(i + j, part.length))
        if (word.split('').reverse().join('') === word) {
            i = part.length
            return true
        }
        j = 1
    }
    return false
}
// function checkPart(part) {
//     let reverseStr = part.split('').reverse().join('')
//     if (reverseStr === part) {
//         return true
//     }
//     // m i i d i m 
//     j = 0
//     for (let i = 0; i < part.length; i++) {
//         const str1 = part.substr(0, i)
//         const str2 = part.substr(i + j, part.length)
//         console.log('str1 ', str1, ' str2 ', str2)
//         const word = str1.concat(str2)
//         reverseStr = word.split('').reverse().join('')
//         console.log('compara ', word, reverseStr)
//         if (reverseStr === word) {
//             i = part.length
//             console.log(true)
//         }
//         j++
//     }
//     console.log(false)
// }
// checkPart("zzzoonzzz") // true
//  checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter