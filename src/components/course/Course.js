import React , { Component } from 'react' ;

class Course extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            titleStyle : {
                fontSize : "2.5vw" ,
                width : "max-content" ,
                marginLeft : "auto" ,
                marginRight : "auto" ,
                color : "rgb(66, 182, 244)" ,
                fontWeight : "bolder" ,
                fontFamily : "Arial Black" ,
                textShadow : "1px 1px 2px gray" ,
                marginTop : "5px" ,
                marginBottom :  "2px"
            } ,
            subTitleStyle : {
                fontSize : "1.5vw" ,
                width : "max-content" ,
                marginLeft : "auto" ,
                marginRight : "auto" ,
                color : "rgb(89, 197, 255)" ,
                fontWeight : "lighter" ,
                fontFamily : "Arial Black" ,
                textShadow : "1px 1px 2px gray" ,
                marginTop : "5px"
            } ,
            paragraphStyle : {
                fontSize : "1.2vw" ,
                marginLeft : "0px" ,
                marginRight : "0px" ,
                color : "grey" ,
                fontWeight : "lighter" ,
                fontFamily : "Arial Black" ,
            } 
        }
    }

    dataToTag(data){
        if(data.type === "paragraph"){
            return(
                <p className="paragraph" style = {this.state.paragraphStyle}>
                    {data.content}
                </p>
            )
        }
        else if(data.type === "picture"){
            return(
                <img src = {data.url} alt = {data.url} />
            )
        }
    }

    render(){
        return(
            <div className = "course">
                <h1 className = "title" style = {this.state.titleStyle}> {this.props.data.title} </h1>
                <h3 className = "sub-title" style = {this.state.subTitleStyle}> {this.props.data.subTitle} </h3>
                {
                    this.props.data.content.map( elementData => {
                        return(this.dataToTag(elementData))
                    })
                }
            </div>
        )
    }
}

export default Course ;