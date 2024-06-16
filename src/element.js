export class Element {
  static createElement(type) {
    return document.createElement(type)
  }

  static addClass(element, classe) {
    return element.classList.add(classe)
  }

  static setAttribute(element, attr, value) {
    return element.setAttribute(attr, value)
  }

  static insertContent(element, content) {
    return element.innerText = content
  }
}
