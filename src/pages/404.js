import React from 'react';

class NotFoundPage extends React.Component {
  componentDidMount = () => {
    window.location.assign('/')
  };

  render() {
    return <div />
  }
};

export default NotFoundPage;
