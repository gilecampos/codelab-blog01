export class Like {
  static likedPost(element, classe) {
    return element.classList.toggle(classe)
  }
}