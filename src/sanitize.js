export class Sanitize {
  static clear(string) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
      'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A',
      'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
      'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E',
      'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
      'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
      'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
      'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ø': 'O',
      'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ø': 'o',
      'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U',
      'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
      'Ç': 'C', 'ç': 'c',
      'Ñ': 'N', 'ñ': 'n',
      'Ý': 'Y', 'ý': 'y', 'ÿ': 'y'
    };
    const reg = /[&<>"'/ÀÁÂÃÄÅàáâãäåÈÉÊËèéêëÌÍÎÏìíîïÒÓÔÕÖØòóôõöøÙÚÛÜùúûüÇçÑñÝýÿ]/ig;
    const newString = string.replace(reg, (match) => (map[match] || match))
    return this.normalize(newString)
  }

  static normalize(string) {
    return string.trim().toLowerCase()
  }
}
