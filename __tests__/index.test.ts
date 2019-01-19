import isObject from './helpers/isObject'

import getParams from '../src/getParams'
import getProtocol from '../src/getProtocol'
import stringifyParams from '../src/stringifyParams'

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
