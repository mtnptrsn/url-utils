const getProtocol = (url: string) => url.replace(/:.*/g, '')

export default getProtocol
