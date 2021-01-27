class TestComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const p = document.createElement('p');
    p.innerText = 'Hey, this is a test web component';
    this.shadow.appendChild(p);
  }
}

export default TestComponent;
