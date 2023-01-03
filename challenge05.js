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