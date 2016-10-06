import React, { Component } from 'react';
import { AppBar, FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

import '../style/style.scss';

export default class Application extends Component {
  render () {
    return (
      <div>
        <AppBar
          title="lmao"
          style={{ position: 'fixed' }}
        />
        <div className="container">
          <h1>Ayyy lmao</h1>
          <h2>Replace this element in src/components/app.jsx with your actual content!</h2>
        </div>
        <FloatingActionButton className="fab">
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
