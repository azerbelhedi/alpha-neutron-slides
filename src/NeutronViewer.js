import React, { Component } from 'react';
import Course from './components/course/Course' ;

class NeutronViewer extends Component {
  constructor(props){
    super(props) ;
    this.state = {
        slides : [
          {
            type : "course" ,
            title : "introduction to web dev" ,
            content : [
              {
                type : "paragraph" ,
                content : "web dev is a very good because and it is also yes trust me ! please ok nice thanks bye" 
              } ,
              {
                type : "picture" ,
                url : "data:image/jpeg;base64,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"
              }
            ]
          }
        ]
    }
  }

  decomposer(slide){
    if(slide.type === "course"){
      return(
        <Course data = {slide}/>
      )
    }
    else{
      return(
        <h1>NOT COURSE !</h1>
      )
    }
  }

  render() {
    return (
      <div className="neutron-viewer">
        {
          this.decomposer(this.state.slides[0])
        }
      </div>
    );
  }
}

export default NeutronViewer ;
