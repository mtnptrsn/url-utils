const isObject = (value: any) =>
  value && typeof value === 'object' && value.constructor === Object

export default isObject
