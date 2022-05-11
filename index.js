class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string) {
    const stringArr = string.split(' ')
    const newString = []
    stringArr.map(word => {
      switch (word) {
        case 'a':
        case 'an':
        case 'but':
        case 'of':
        case 'and':
        case 'for':
        case 'at':
        case 'by':
        case 'from':
        case 'the':
          newString.push(word)
          break;
        default:
          newString.push(Formatter.capitalize(word))
      }
    })
    newString.splice(0, 1, Formatter.capitalize(newString[0]))
    return newString.join(' ')
  }
}