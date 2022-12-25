function distributeGifts(packOfGifts, reindeers) {
    const calculateWeight = (array, ratioWeight) => {
        let weightOfArray = 0
        array.map(item => {
            weightOfArray = weightOfArray + item.length * ratioWeight
        })
        return weightOfArray
    }
    const weigthOfGifts = (calculateWeight(packOfGifts, 1))
    const weigthOfReindeers = (calculateWeight(reindeers, 2))
    return Math.trunc(weigthOfReindeers / weigthOfGifts)
}
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2