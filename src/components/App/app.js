import React, {Component} from 'react';
import Title from '../Title/Title';
import moment from 'moment';
import 'moment/locale/ru';
import NavBattons from '../NavigationButtons/NavButtons';
import CalendarGrid from '../CalendarGrid/CalendarGrid'
import './app.css'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: moment(),
            todoList: {
                '21-03-2021': [{text:'Buy wisky',done: false, id: 1},
                                {text:'Buy beer',done: false, id: 2},
                                {text:'Buy meat',done: false, id: 3},
                                {text:'Buy water',done: false, id: 4},],
                '23-03-2021': [{text:'Go to gym',done: false, id: 1},
                                {text:'homework',done: false, id: 2},
                                {text:'Buy meat',done: false, id: 3},
                                {text:'Buy water',done: false, id: 4},
                                {text:'Go to gym',done: false, id: 5},
                                {text:'homework',done: false, id: 6},
                                {text:'Buy meat',done: true, id: 7},
                                {text:'Buy water',done: false, id: 8}],
            }
        }
        moment.updateLocale('en', {week: {dow: 1}});
    }


    onCreateTask = (text, date) => {
        const tasks = this.state.todoList;
        tasks[date] = text;
        this.setState({
            todolist: tasks
        })
    }

      

    prevHandler = () =>{
        let day = this.state.date;
        day = day.clone().subtract(1, 'month');
        this.setState({
            date: day
        })
    }

    nextHandler = () =>{
        let day = this.state.date;
        day = day.clone().add(1, 'month');
        this.setState({
            date: day
        })
    }

    todayHandler = () => {
        this.setState({
            date: moment()
        })
    }

render(){

    let today =  this.state.date;
    const startDay = today.clone().startOf('month').startOf('week');
    const totalDays = 42;
	const day = startDay.clone().subtract(1, 'day');
	const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
    return(
        <div className='wrapper'>
            <Title today={today}/>
            <NavBattons
             prevHandler={this.prevHandler} 
             todayHandler={this.todayHandler} 
             nextHandler={this.nextHandler} />
            <div className="contentWrapper">
                <CalendarGrid 
                daysMap={daysMap} 
                day={day} 
                today={today} 
                todoList={this.state.todoList}
                onCreateTask={this.onCreateTask}/>
            </div>
        </div>
       
    )
}
}

export default App