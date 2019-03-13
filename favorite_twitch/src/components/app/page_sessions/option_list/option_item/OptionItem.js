import React, { Component } from 'react';
import { handleStringLength } from '../../../utils/GetHelper';
import { OPTION_ITEM_HEIGHT, OPTION_ITEM_OFFSET, OPTION_ITEM_WRAP_NUM } from '../../../utils/Constant';

class OptionItem extends Component {
  constructor(){
    super();
    this.displayItem = this.displayItem.bind(this);
  }

  displayItem(){
      console.log('dattaaaa',this.props.data)
    const items = this.props.data.map((item) => 
      <div className="option-video" key={item["started_at"]} >
        <div className="option-img">
            <img src={item.thumbnail_url} alt="thumbnail url" />
        </div>
        <div className="option-content">
            <h1>Featured Video</h1>
            <h1>{item.user_name}</h1>
            <h2>{(item.title && item.title.length > 0) ? handleStringLength(item.title, 40) : ""}</h2>
            <a>Watch Now!</a>
        </div>
      </div>
    );
    return items;
  }

  render() {
    var hei = { 
      height: (((this.props.data.length / OPTION_ITEM_WRAP_NUM) * OPTION_ITEM_HEIGHT) + OPTION_ITEM_OFFSET)
    }
    return (
      <div className="option-item" style={hei} >
        {this.displayItem()}
      </div>
    );
  }
}

export default OptionItem;