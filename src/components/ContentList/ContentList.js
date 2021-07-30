import React, { Component } from 'react';

export default class ContentList extends Component{
    constructor(props){
        super(props);
        props = this.props;
    }


    render(){
        return(
           
            <div className='todoWrap'>
                {this.props.isTaskToday && <p className='isTask'>Есть задачи</p>}
            </div>
        )
    }
}