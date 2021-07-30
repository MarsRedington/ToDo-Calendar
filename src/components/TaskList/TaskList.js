import React, { Component } from 'react'

import './TaskList.css'
export default class TaskList extends Component {
    constructor(props){
        super(props);
        props = this.props;
        this.state ={
            value:''
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    handleTaskCreate = () => {
        this.props.onCreateTaskToday(this.state.value);
        this.setState({
            value: '',
        })
    }
    render(){
       const toTasks = this.props.tasksToday;
       let sortedList = []
       if(toTasks.length > 0){
           sortedList = toTasks.slice().sort((a, b) => a.done - b.done)
       }
        
        return(
            <div className="todo-list">
               <div className="create-task">
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="create-task__input"/>
                    <button className="btn create-task__btn" onClick={this.handleTaskCreate}>Create</button>
                </div>
                <ul className="list">
                {sortedList.map(task => (
                    <li key={task.id}
                        className='list-item'>
                            <input type="checkbox" 
                                className="list-item__checkbox" 
                                defaultChecked={task.done}
                                onChange={() => this.props.handleTaskStatusChange(task.id)}
                            />
                            <span className={task.done ? "list-item doned" : "list-item"} >{task.text}</span>
                            <button className="list-item__delete-btn" onClick={() => this.props.handleTaskDelete(task.id)}></button>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}