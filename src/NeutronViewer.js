import React, { Component } from 'react';

class NeutronViewer extends Component {
  constructor(props){
    super(props) ;
    this.state = {
        tag : [
          {
            tag : "h1" ,
            position : "center" ,
            fontSize : "3.5vw" ,
            width : "max-content" ,
            text : "this is the alpha title !" ,
            color : "blue" ,
            backgroundColor : "none" 
          } ,
          {
            tag : "h1" ,
            position : "left" ,
            fontSize : "2vw" ,
            width : "max-content" ,
            text : "content content content  !" ,
            color : "gray" ,
            backgroundColor : "none" 
          }
        ]
    }
  }

  dataToTag(data){
      if(data.tag == "h1"){
        let style = {
          fontSize : data.fontSize ,
          color : data.color ,
          marginLeft : (data.position === "center" ? "auto" : "0px") ,
          marginRight :( data.position === "center" ? "auto" : "0px") ,
          backgroundColor : data.backgroundColor ,
          width : data.width
        } ;

        return(
          <h1 style = {style}>{data.text}</h1>
        )
      }
  }

  render() {
    return (
      <div className="neutron-viewer">
          {
            this.state.tag.map(data => {
              return(this.dataToTag(data)) ;
            })
          }
      </div>
    );
  }
}

export default NeutronViewer ;
