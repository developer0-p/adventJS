function wrapping(gifts) {
    const newArray = gifts.map(gift => {
        //envuelvo el gift en su línea
        const horizontalWrappedGift = '*' + gift + '*'
        //envuelvo por arriba y abajo
        const lengthGift = horizontalWrappedGift.length
        let verticalWrappedGift = ''
        for (i = 0; i < lengthGift; i++) {
            verticalWrappedGift += '*'
        }
        return (verticalWrappedGift + '/n' + horizontalWrappedGift + '/n' + verticalWrappedGift)
    })
    return [newArray]
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
