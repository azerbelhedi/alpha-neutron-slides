import React, { Component } from 'react';
import Course from './components/course/Course' ;

class NeutronViewer extends Component {
  constructor(props){
    super(props) ;
    this.state = {
        slideIndex : 4 ,
        slides : [
          {
            type : "course" ,
            title : "introduction to web dev" ,
            subTitle : "what is the internet" ,
            content : [
              {
                type : "paragraph" ,
                content : `ezae zza ezae kljkj kjkljkjklj kjl jlkj kjkl jkjkjkj ljlkj kl k jlk jkjkl kljlkjlkjlkj
                kjkjkj jjjkjkj jjkjlkjkl kjlkjlgfghfhg ff gfhgf ghfhgfhgfhg fgfghfhf fhgfhg hgfhgf` 
              } ,
              {
                type : "picture" ,
                position : "init" ,
                url : "data:image/jpeg;base64,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"
              }
            ]
          } ,
          {
            type : "course" ,
            title : "introduction to web dev" ,
            subTitle : "what is the Web" ,
            content : [
              {
                type : "paragraph" ,
                content : `web dev is a very good because and it is also yes trust me ! please ok nice thanks bye
                ezza za eza e zae za e az zaezae zgfdfg gfdg fd fdgfd gfd g fd g
                fdg fdg fd g fg f dg fd gzezakjk jkj lkjklj lk lj kj jkl kjk jkj j jklj ljl 
                lmklkml mlk kmlk lk lkmk mklm kmk` 
              } ,
              {
                type : "picture" ,
                position : "center" ,
                url : "data:image/png;base64,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"
              }
            ] 
          } ,
          {
            type : "course" ,
            title : "introduction to Firebase" ,
            subTitle : "welcome firebase " ,
            content : [
              {
                type : "paragraph" ,
                content : `firebase is good you know why be cause i like firebase and alot haha thanks ` 
              } ,
              {
                type : "picture" ,
                position : "center" ,
                url : "https://firebase.google.com/images/social.png"
              }
            ]
          } ,
          {
            type : "course" ,
            title : "introduction to firebase" ,
            subTitle : "firebase from youtube " ,
            content : [
              {
                type : "paragraph" ,
                content : `firebase is good you know why be cause i like firebase and alot haha thanks ` 
              } ,
              {
                type : "video" ,
                position : "center" ,
                sourceCode : <iframe width="100%" height="400px" src="https://www.youtube.com/embed/Rp2BYE0elcA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
              }
            ]
          } ,
          {
            type : "course" ,
            title : "introduction to HTML and JS" ,
            subTitle : "scrimba HTML intro " ,
            content : [
              {
                type : "scrimba" ,
                url : "https://scrimba.com/c/cMVQ4CJ"
              }
            ]
          } ,
          {
            type : "course" ,
            title : "introduction to coding" ,
            subTitle : "scrimba HTML intro " ,
            content : [
              {
                type : "code" ,
              }
            ]
          }
        ]
    }
    this.nextSlide = this.nextSlide.bind(this) ;
    this.previousSlide = this.previousSlide.bind(this) ;
  }

  decomposer(slide){
    if(slide.type === "course"){
      return(
        <Course data = {slide} edit = {this.props.data.edit} />
      )
    }
    else{
      return(
        <h1>NOT COURSE !</h1>
      )
    }
  }

  nextSlide(){
    this.setState(state => {
      let newState = state ;
      if(newState.slides.length - 1 > newState.slideIndex){
        newState.slideIndex += 1 ;
      }
      return newState ;
    })
  }

  previousSlide(){
    this.setState(state => {
      let newState = state ;
      if(newState.slideIndex > 0){
        newState.slideIndex -= 1 ;
      }
      return newState ;
    })
  }

  render() {
    return (
      <div className="neutron-viewer">
        <div className="left">
        <i class="left-arrow" onClick = {this.previousSlide}></i>
        </div>
        <div className="content">
          {
            this.decomposer(this.state.slides[this.state.slideIndex])
          }
        </div>
        <div className="right">
          <i class="right-arrow" onClick = {this.nextSlide}></i>
        </div>
      </div>
    );
  }
}

export default NeutronViewer ;
