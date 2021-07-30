import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'; 

import TaskList from '../TaskList/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';


class ModalW extends Component {
    constructor(props){
        super(props);
        props = this.props;
        this.state = {
            tasks: this.props.arrTaskToday
        }
    }

    onCreateTaskToday = (text) => {
        const {tasks} = this.state;
        const newId = Math.random();
        const newTask ={
            text,
            done: false,
            id: newId
        }
        const updatedTasks = tasks.concat(newTask);
        this.setState({
            tasks: updatedTasks
        })
    }

    handleTaskStatusChange = (id) => {
        const updatedTasks = this.state.tasks.map(task => {
            if(task.id === id){
                return {
                    ...task,
                    done: !task.done
                }
            }
            return task;
        })
        this.setState({
            tasks: updatedTasks
        })
    }

    handleTaskDelete = (id) => {
        const updatedTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({
            tasks: updatedTasks
        })
    } 


    onModalHandleCreate = ()=>{
        this.props.onCreateTask(this.state.tasks, this.props.date);
        this.props.handleClose();
    }

    onModalHandleClose = () => {
        this.setState({
            tasks: this.props.arrTaskToday
        })
        this.props.handleClose()
    }

    render(){
        return(
            <Modal show={this.props.show} onHide={this.onModalHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ваши задачи на сегодня</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <TaskList 
                            onCreateTaskToday={this.onCreateTaskToday}
                            tasksToday={this.state.tasks}
                            handleTaskDelete={this.handleTaskDelete}
                            handleTaskStatusChange={this.handleTaskStatusChange}
                        />
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.onModalHandleClose}>
                        Закрыть и выйти
                    </Button>
                    <Button variant="primary" onClick={this.onModalHandleCreate}>
                        Записать и выйти
                    </Button>
                </Modal.Footer>
            </Modal> 
        )
    }
}

export default ModalW;