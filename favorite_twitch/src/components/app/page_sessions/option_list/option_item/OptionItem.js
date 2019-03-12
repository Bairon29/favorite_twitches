import React, { Component } from 'react';

class OptionItem extends Component {
  constructor(){
    super();
    this.displayItem = this.displayItem.bind(this);
  }

  displayItem(){
      console.log('dattaaaa',this.props.data)
    const items = this.props.data.map((item) => 
        <div key={item['started_at']}>
            <h1>{item.user_name}</h1>
            <h2>{item.title}</h2>
            <a href={item.url} >Watch Now!</a>
            <img src={item.thumbnail_url} alt="thumbnail url" />
        </div>
    );
    return items;
  }

  render() {
    return (
      <div className="option-item">
        {this.displayItem()}
      </div>
    );
  }
}

export default OptionItem;