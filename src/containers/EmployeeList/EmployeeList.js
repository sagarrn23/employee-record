import React, { Component } from 'react';
import axios from 'axios';
import Employee from '../../components/Layout/Employee/Employee';
import classes from './EmployeeList.module.css';
import Aux from '../../hoc/Aux/Aux';
import Search from '../../components/Layout/Search/Search';
import search from '../../components/Layout/Search/Search';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empData: [],
        }
    }

    getUsers = () => {
        axios.get("http://localhost:3000/users")
            .then(response => {
                this.setState({
                    empData: response.data,
                })
            });
    }

    componentDidMount() {
        this.getUsers();
    }

    deleteHandler = (id) => {
        axios.delete('http://localhost:3000/users/' + id)
            .then(response => {
                console.log(response.data);
                console.log(`${id} is deleted.`);                
                this.getUsers();
            });
    }

    // if backspace in search

    searchInState = (value) => {
        const employees = [...this.state.empData];

        const regex = new RegExp(value, 'gi');

        const filteredEmp = employees.filter((data) => {
            return data.name.match(regex) || data.username.match(regex);
        });

        this.setState({
            empData: filteredEmp
        });
    }
    
    searchHandler = (e) => {
        const searchQuery = e.target.value;
        if (e.keyCode === 46 || e.keyCode === 8) {
                axios.get("http://localhost:3000/users")
                    .then(response => {
                        this.setState({
                            empData: response.data,
                        })
                    })
                    .then(() => {
                        this.searchInState(searchQuery)
                    })
        } else {
            this.searchInState(searchQuery)
        }
    }

    render() {
        return (
                <Aux>  
                    <Search search={(e) => this.searchHandler(e)}/>
                    <ul className={classes.listWrap}>
                        {this.state.empData.map((data, index) => {
                            return <Employee 
                                key={data.id} 
                                emp={data} 
                                delete={() => this.deleteHandler(data.id)}
                            />
                        })}
                    </ul>
                </Aux>
        )
    }
}

export default EmployeeList;
