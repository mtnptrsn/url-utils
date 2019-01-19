const getParams = (url: string): { [key: string]: string } =>
  url
    .replace(/.*\?/g, '')
    .split('&')
    .map(val => val.split('='))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

export default getParams
