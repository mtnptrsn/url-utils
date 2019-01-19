/**
 * Helpers
 */
import isObject from './helpers/isObject'

/**
 * Functions
 */
import getParams from '../src/getParams'
import getProtocol from '../src/getProtocol'
import stringifyParams from '../src/stringifyParams'
import changeParams from '../src/changeParams'

/**
 * Tests
 */
it('getParams', () => {
  const params = getParams('https://google.com?name=Carl&age=25')

  expect(isObject(params)).toBe(true)
  expect(params.name).toBe('Carl')
  expect(params.age).toBe('25')
})

it('stringifyParams', () => {
  const params = { name: 'Carl' }
  const params2 = { ...params, age: '25' }
  expect(stringifyParams(params)).toBe('?name=Carl')
  expect(stringifyParams(params2)).toBe('?name=Carl&age=25')
})

it('getProtocol', () => {
  expect(getProtocol('https://google.com')).toBe('https')
})

it('changeParam', () => {
  expect(
    changeParams({ name: 'Roger' }, 'https://google.com?name=Carl&age=25'),
  ).toBe('https://google.com?name=Roger&age=25')

  expect(
    changeParams(
      { name: 'Roger', age: '30' },
      'https://google.com?name=Carl&age=25',
    ),
  ).toBe('https://google.com?name=Roger&age=30')
})
