function wrapping(gifts) {
    const newArray = gifts.map(gift => {
        const horizontalWrappedGift = '*' + gift + '*'
        const lengthGift = horizontalWrappedGift.length
        let verticalWrappedGift = ''
        for (let i = 0; i < lengthGift; i++) {
            verticalWrappedGift += '*'
        }
        return (
            verticalWrappedGift + '\n' + horizontalWrappedGift + '\n'
            + verticalWrappedGift)
    })
    return newArray
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
