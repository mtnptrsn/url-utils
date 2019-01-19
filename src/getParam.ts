import getParams from './getParams'

const getParam = (param: string, url: string) => getParams(url)[param]

export default getParam
