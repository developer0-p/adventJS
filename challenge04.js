function fitsInOneBox(boxes) {
    //ordenar los arrays
    const arrayOrderedH = boxes.sort((a, b) => {
        if (a.h > b.h) return 1
        if (a.h < b.h) return -1
        return 0
    }).sort((a, b) => {
        if (a.w > b.w) return 1
        if (a.w < b.w) return -1
        return 0
    }).sort((a, b) => {
        if (a.l > b.l) return 1
        if (a.l < b.l) return -1
        return 0
    })
    for (let i = 0; i < arrayOrderedH.length - 1; i++) {
        if (arrayOrderedH[i].l >= arrayOrderedH[i + 1].l) {
            return false
        } else if (arrayOrderedH[i].w >= arrayOrderedH[i + 1].w) {
            return false
        } else if (arrayOrderedH[i].h >= arrayOrderedH[i + 1].h) {
            return false
        }
    }
    return true
}


// for (let i = 0; i < arrayOrderedH.length - 1; i++) {
//     if (arrayOrderedH[i].l >= arrayOrderedH[i + 1].l) {
//         return false
//     } else if (arrayOrderedH[i].w >= arrayOrderedH[i + 1].w) {
//         return false
//     } else if (arrayOrderedH[i].h >= arrayOrderedH[i + 1].h) {
//         return false
//     }
// }

fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
])

