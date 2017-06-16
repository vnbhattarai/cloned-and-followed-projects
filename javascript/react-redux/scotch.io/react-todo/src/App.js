import React from 'react';
import Title from './components/Title'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';
import './App.css';

// Todo Id
window.id = 0;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.apiUrl = "http://58e51d761bd7be12000f9b47.mockapi.io/todo";
    }
    // Lifecycle method
    componentDidMount() {
        // Make HTTP reques with Axios
        axios.get(this.apiUrl).then((res) => {
            // Set state with result
            this.setState({data: res.data});
        });
    }
    // Add todo handler
    addTodo(val) {
        // Assemble data
        const todo = {
            text: val
        }
        // Update data
        axios.post(this.apiUrl, todo).then((res) => {
            this.state.data.push(res.data);
            this.setState({data: this.state.data});
        });
    }
    // Handle remove
    handleRemove(id) {
        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {
            if (todo.id !== id)
                return todo;
            }
        );
        // Update state with filter
        axios.delete(this.apiUrl + '/' + id).then((res) => {
            this.setState({data: remainder});
        })
    }

    render() {
        return (
            <div >
                <Title todoCount={this.state.data.length}/>
                <TodoForm addTodo={this.addTodo.bind(this)}/>
                <TodoList todos={this.state.data} remove={this.handleRemove.bind(this)}/>
            </div>
        );
    }
}
