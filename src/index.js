import { h, render } from 'preact';
import App from './components/App'

const config = {
  urls: {
    user: "http://api.github.com/users/abnw"
  }
}

render(<App config={config} />, document.querySelector('main'));
