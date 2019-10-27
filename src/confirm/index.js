import React from 'react'
import ReactDOM from "react-dom";
import './index.css'

class Confirm extends React.Component {
  render() {
    let {value} = this.props
    return (
      <div className="confirm">
        <div className="confirm__content">
          {value}
          <div className ="confirm__button">
            <button type="button" className="button--yes"
            onClick={()=>{
              cfm.hide()
            }}>
              <span>确定</span>
            </button>
            <button type="button" className="button--no"
            onClick={()=>{
              cfm.hide()
            }}>
              <span>取消</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let node = null;
let cfm = {
  show(value) {
    node = document.createElement("div")
    document.body.appendChild(node)
    ReactDOM.render(<Confirm value={value}/>,node)
  },
  hide() {
    if(node) {
      ReactDOM.unmountComponentAtNode(node)
      document.body.removeChild(node)
    }
  }
}

const confirm = (value)=>{
  cfm.show(value)
  return new Promise((resolve) => {
    if(node) {
      resolve(true)
    } else {
      resolve(false)
    }
  })
}

export default confirm
