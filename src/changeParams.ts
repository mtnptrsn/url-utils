import getParams from './getParams'
import { stringifyParams } from '.'

const stripParams = (url: string) => url.replace(/\?.*/g, '')

const changeParams = (newParams: { [key: string]: string }, url: string) => {
  const params = getParams(url)
  for (const key in newParams) params[key] = newParams[key]
  return `${stripParams(url)}${stringifyParams(params)}`
}

export default changeParams
