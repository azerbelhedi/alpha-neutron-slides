import React , { Component } from 'react' 
import {BrowserRouter as Router , Route } from 'react-router-dom' ;
import NeutronViewer from './NeutronViewer' ;

import './neutronViewer.css' ;

const View = () =>{
    return(
        <NeutronViewer className = "neutron-viewer" data = {{edit : 0}}/>
    )
}

const Edit = () => {
    return(
        <NeutronViewer className = "neutron-viewer" data = {{edit : 1}}/>
    )
}

class NeutronSlides extends Component{
    constructor(props){
        super(props) ;
    }

    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Route path='/view' component={View}/>
                        <Route path='/edit' component={Edit}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default NeutronSlides ;