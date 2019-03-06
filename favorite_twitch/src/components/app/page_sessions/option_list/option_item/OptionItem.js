import React, { Component } from 'react';

class OptionItem extends Component {
  constructor(){
    super();
    this.displayItem = this.displayItem.bind(this);
  }

  displayItem(){
      console.log('dattaaaa',this.props.data)
    const items = this.props.data.map((item) => 
        <div key={item['created_at']}>
            <h1>{item.user_name}</h1>
            <h2>{item.title}</h2>
            <a href={item.url} >Watch Now!</a>
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