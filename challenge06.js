function createCube(size) {
    const b = String.fromCharCode(92) // '\'
    const g = String.fromCharCode(32) // ' '
    let ladrilloArriba = '/' + b  // '/\'
    let ladrilloAbajo = b + '/'   // '\/'
    let mitadSuperior = []
    let mitadInferior = []
    for (let i = 0; i < size; i++) {
        ladrilloArriba = ladrilloArriba + '_' + b
        ladrilloAbajo = ladrilloAbajo + '_/'
        if (i > 0) {
            ladrilloArriba = '/' + b + ladrilloArriba
            ladrilloAbajo = b + '/' + ladrilloAbajo
            let preLadrillo = ' '.repeat(i) +
                ('/' + b).repeat(size - i) +
                ('_' + b).repeat(size)
            mitadSuperior.unshift(preLadrillo + "\n")
            let postLadrillo = ' '.repeat(i) +
                (b + '/').repeat(size - i) +
                ('_' + '/').repeat(size)
            mitadInferior.push(postLadrillo)
            mitadInferior.push("\n")
        }
    }
    mitadSuperior.push(ladrilloArriba + "\n")
    mitadInferior.unshift("\n")
    mitadInferior.unshift(ladrilloAbajo)
    mitadInferior.pop()
    return (mitadSuperior.join('') + mitadInferior.join(''))
}
createCube(1)
createCube(2)
createCube(3)
