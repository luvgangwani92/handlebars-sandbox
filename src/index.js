import TestComponent from './components/TestComponent';

function main() {
  if (!window.customElements.get('test-component')) window.customElements.define('test-component', TestComponent);
}

main();
