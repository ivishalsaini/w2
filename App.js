import React, { Component } from 'react';
import './App.css';
import RGL, { WidthProvider } from "react-grid-layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);


class App extends Component {
  
  state = { 
    layout : [
      {i: '1', x: 0, y: 0, w: 1, h: 1},        
      {i: '2', x: 1, y: 0, w: 1, h: 1},
      {i: '3', x: 0, y: 1, w: 1, h: 1},
      {i: '4', x: 4, y: 1, w: 1, h: 1}
    ],
    resizeplotly: false,
  };

  onLayoutChange = (layout) => {
    this.setState({layout});
  }
  
  onResize = (layouts) => {
    this.setState({
      layout: layouts,
    });
  };
  
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-dark">
          <label class="navbar-brand" style={{ color: "white" }} ><b><h2>Vidrona</h2></b></label>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Logout</button>
          </form>
        </nav>

        <ReactGridLayout
            rowHeight= {150}
            cols={8}
            onResize={this.onResize}
            width={20}
            layout={this.state.layout}
            onLayoutChange={this.onLayoutChange}
            draggableHandle=".MyDragHandleClassName"
            draggableCancel=".MyDragCancel"
        >
            <div className="item" key={1}>
              <div className='MyDragHandleClassName'> 
                Projects<span className="text"></span>
              </div>
              <div style={{marginTop: '80px'}}>Grid - 1</div>
            </div>
            <div className="item" key={2}>
              <div className='MyDragHandleClassName'> 
                Client Info<span className="text"></span>
              </div>
              <div style={{marginTop: '80px'}}>Grid - 2</div>
            </div>
            <div className="item" key={3}>
              <div className='MyDragHandleClassName'> 
                Current Projects<span className="text"></span>
              </div>
              <div style={{marginTop: '80px'}}>Grid - 3</div>
            </div>
            <div className="item" key={4}>
              <div className='MyDragHandleClassName'> 
                Vegetative Health<span className="text"></span>
              </div>
              <div style={{marginTop: '80px'}}>Grid - 4</div>
            </div>
        </ReactGridLayout>
        
      </div>
    );
  }
}

App.defaultProps = {
    rowHeight: 150,
    cols: 2, 
};

export default App;
