import React from 'react';
import confirm from './confirm/index'

class App extends React.Component{
  render() {
    return (
      <div>
        App
      </div>
    );
  }

  async componentDidMount() {
    let res = await confirm("确定删除吗")
    if(res) {
      console.log("是")
    } else {
      console.log("否")
    }
  }
}
export default App;
