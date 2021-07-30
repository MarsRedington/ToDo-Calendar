import React, { Component } from 'react';
import moment from 'moment';

import ContentList from '../ContentList/ContentList';
import ModalW from '../ModalW/ModalW';
import './gridItem.css';


class GridItem extends Component {
    constructor(props){
        super(props);
        props = this.props;
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    render(){
        let isTaskToday = false;
        let tList = this.props.todoList;
        let gridClass = 'gridItem';
        let arrTaskToday = [];
        let cell = this.props.item;
        let d = this.props.today;

        if(d.format('MM') === cell.format('MM')){
            gridClass = gridClass + ' main'
        }
        if(moment().isSame(cell, 'day')){
            gridClass = gridClass + ' currentDay'
        }
        for(let key in tList){
            if(key === cell.format('DD-MM-YYYY')){
                arrTaskToday = tList[key]
                isTaskToday = true;
            }
        }
        if (arrTaskToday.length === 0){
            isTaskToday = false;
        }
        return(
            <>
                <div className={gridClass} onClick={this.handleShow}>
                    <p>{cell.locale('ru').format('LL')}</p>
                    <ContentList isTaskToday={isTaskToday}/>
                </div>

                <ModalW 
                    handleClose={this.handleClose} 
                    show={this.state.show} 
                    arrTaskToday={arrTaskToday} 
                    onCreateTask={this.props.onCreateTask}
                    date={cell.format('DD-MM-YYYY')}
                />
            </>
        )
    }
}

export default GridItem;