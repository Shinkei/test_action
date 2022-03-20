const perro = require('./index')

describe('index', () => {
  it('should say the breed of the dog', () => {
    const result = perro('Firulais', 'Bulldog')
    expect(result).toBe('Firulais es un perro de raza Bulldog 🐶')
  })
})
