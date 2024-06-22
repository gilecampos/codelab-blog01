export class Element {
  static create(tag, className, content, attr, attrValue) {
    const element = this.createElement(tag)
    if(className) this.addClass(element, className)
    if(attr) this.setAttribute(element, attr, attrValue)
    if(content) this.insertContent(element, content)
    return element
  }
  static createElement(tag) {
    return document.createElement(tag)
  }

  static addClass(element, className) {
    return element.classList.add(className)
  }

  static setAttribute(element, attr, value) {
    return element.setAttribute(attr, value)
  }

  static insertContent(element, content) {
    return element.innerText = content
  }
}
