const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus() {
    console.log('Good!');
  }

  onBlur() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur} >
        Eyes on me, please!
      </button>
    );
  }
}

module.exports = EyesOnMe;
