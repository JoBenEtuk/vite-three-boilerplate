import AutoBind from 'auto-bind'

export default class Page {
  constructor({ classes, element, elements }) {
    AutoBind(this)

    this.classes = {
      ...classes,
    }

    this.selector = element
    this.selectorChildren = { ...elements }
    this.create()
  }

  create() {
    if (this.selector instanceof HTMLElement) {
      this.element = this.selector
    } else {
      this.element = document.querySelector(this.selector)
    }

    this.elements = {}

    Object.keys(this.selectorChildren).forEach((key) => {
      const entry = this.selectorChildren[key]

      if (entry instanceof HTMLElement || entry instanceof NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
      } else {
        this.elements[key] = this.element.querySelectorAll(entry)

        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else if (this.elements[key].length === 1) {
          this.elements[key] = this.element.querySelector(entry)
        }
      }
    })
  }

  show() {
    return Promise.resolve()
  }

  hide() {
    return Promise.resolve()
  }

  onTouchMove(event) {}

  update() {}

  onResize() {}
}
