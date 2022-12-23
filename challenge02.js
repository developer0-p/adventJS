function countHours(year, holidays) {
    const extraHours = holidays.map(day => {
        let extraHoursAccumulator = 0
        const isHoliday = new Date(day + '/' + year).getDay()
        isHoliday > 0 && isHoliday < 6 ? (extraHoursAccumulator += 2) : ('')
        return extraHoursAccumulator
    })
    return extraHours.reduce((acc, cur) => acc + cur)
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año

/*
El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.
*/