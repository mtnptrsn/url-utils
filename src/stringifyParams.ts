const stringifyParams = (params: { [key: string]: string }) =>
  Object.keys(params).reduce(
    (acc, key, index, { length }) =>
      `${acc}${key}=${params[key]}${index === length - 1 ? '' : '&'}`,
    '?',
  )

export default stringifyParams
