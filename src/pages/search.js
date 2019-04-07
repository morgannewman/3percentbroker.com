import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <section className="search">
        <div className="search-frame-container">
          <iframe className="search" ref={frame => this.frame = frame} onLoad={this.handleLoad} title="search" src="https://www.idxhome.com/homesearch/114577" />
        </div>
      </section>
    );
  }
}
