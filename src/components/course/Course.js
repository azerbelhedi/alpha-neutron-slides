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
            }  ,
            classes : {
                paragraph : (this.props.edit === 1 ? "paragraph" : "") ,
                title : (this.props.edit === 1 ? "title" : "") ,
                subTitle : (this.props.edit === 1 ? "sub-title" : "") ,
                img : (this.props.edit === 1 ? "img" : "") ,
            }
        }
    }

    dataToTag(data){
        if(data.type === "paragraph"){
            return(
                <p className = {this.state.classes.paragraph} style = {this.state.paragraphStyle}>
                    {data.content}
                </p>
            )
        }
        else if(data.type === "picture"){
            if(data.position === "center"){
                return(
                    <center>
                        <img className = {this.state.classes.img} src = {data.url} alt = {data.url} />
                    </center>
                )
            }
            else{
                return(
                    <img className = {this.state.classes.img} src = {data.url} alt = {data.url} />
                )
            }
        }
    }

    render(){
        return(
            <div className = "course">
                <h1 className = {this.state.classes.title} style = {this.state.titleStyle}> {this.props.data.title} </h1>
                <h3 className = {this.state.classes.subTitle} style = {this.state.subTitleStyle}> {this.props.data.subTitle} </h3>
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