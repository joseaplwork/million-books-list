import React, { PureComponent } from 'react';

import BooksList from 'containers/BooksList';

import './styles.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    const { width, height } = this.getWindowSize();

    this.state = { width, height };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  getWindowSize() {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    return { width, height };
  }

  handleWindowResize = () => {
    const { width, height } = this.getWindowSize();

    this.setState({ width, height });
  }

  render() {
    const { width, height } = this.state;

    return (
      <div className="List">
        <BooksList width={width} height={height} />
      </div>
    );
  }
}

export default App;
