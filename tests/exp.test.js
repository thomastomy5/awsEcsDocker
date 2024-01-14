const {calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../tip.js')
test('hello', ()=>{
    // throw new Error('failed')
})

test('test to calculate tip', ()=>{
    const actual =  calculateTip(10,1)
    expect(actual).toBe(11)
})

test('Should convert 32 F to 0 C', ()=>{
    const output = fahrenheitToCelsius(32)
    expect(output).toBe(0)
})

test('Should convert 0 C to 32 F', ()=>{
    const output = celsiusToFahrenheit(0)
    expect(output).toBe(32)
})

// test('async test',(done)=>{
//     setTimeout(()=>{
//         expect(2).toBe(9)
//         done()
//     },1000)
// })

// test('new async test', (done)=>{
//     setTimeout(() => {
//         expect(2).toBe(5)
//         done( )
//     }, 2500);
// })

// test('async sum', (done)=>{
//     add(3,2).then((sum)=>{
//         expect(sum).toBe(5)
//         done()
//     })
// })

test('adding 2 numbers', async()=>{
    const sum = await add(5,4)
    expect(sum).toBe(9)
})