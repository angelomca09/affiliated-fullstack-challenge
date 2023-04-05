function stringToNumber(text: string) {
  if (isNaN(+text)) throw Error(text + " is not a number to be converted.")
  return ((+text))
}

export {
  stringToNumber
}