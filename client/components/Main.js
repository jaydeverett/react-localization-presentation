import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    console.log(this.props.children, 'chidld');
    return (
      <div>
        <h1>
          <Link to="/">Localizationgram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
