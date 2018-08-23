import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12-1-12">
          <p classname="text-muted credit">
            All image are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in the public domain
          </p>
        </div>
      </div>

    );
  }
}

export default Footer;
