import React, {Component} from 'react';

import './NavButtons.css'

class NavBattons extends Component{
    constructor(props){
        super(props);
        props = this.props;
    }
    render(){
        return(
            <div className='buttonsWrap'>
                <a href='#' className='button' type='button' onClick={this.props.prevHandler}>&lt; Left</a>
                <a href='#' className='button' type='button' onClick={this.props.todayHandler}>Today</a>
                <a href='#' className='button' type='button' onClick={this.props.nextHandler}>Right &gt; </a>
            </div>
        )
    }
}

export default NavBattons;