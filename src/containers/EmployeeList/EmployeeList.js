import React, { Component } from 'react';
import axios from 'axios';
import Employee from '../../components/Layout/Employee/Employee';
import classes from './EmployeeList.module.css';
import Aux from '../../hoc/Aux/Aux';
import Search from '../../components/Layout/Search/Search';
import EmpForm from '../../components/Layout/EmpForm/EmpForm';
import {Route} from 'react-router-dom';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empData: [],
        }
    }

    getUsers = () => {
        return axios.get("http://localhost:3000/users")
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
                console.log(`${id} is deleted.`);                
                this.getUsers();
            });
    }

    // if backspace in search

    searchInState = (value) => {
        const employees = [...this.state.empData];

        const regex = new RegExp(value, 'gi');

        const filteredEmp = employees.filter(data =>  data.name.match(regex) || data.username.match(regex));

        this.setState({
            empData: filteredEmp
        });
    }
    
    searchHandler = async(e) => {
        const searchQuery = e.target.value;
        if (e.keyCode === 46 || e.keyCode === 8) {
                await this.getUsers()
                    .then(() => {
                        this.searchInState(searchQuery)
                    })
        } else {
            this.searchInState(searchQuery)
        }
    }

    addUser = () => {

    }

    render() {
        return (
                <Aux>
                    <Route path='/' exact render={()=>{
                        return(
                            <Aux>
                                <Search search={(e) => this.searchHandler(e)}/>
                                <ul className={classes.listWrap}>
                                    {this.state.empData.map((data) => {
                                        return <Employee 
                                            key={data.id} 
                                            emp={data} 
                                            delete={() => this.deleteHandler(data.id)}
                                        />
                                    })}
                                </ul>
                            </Aux>
                        )
                    }} />
                    
                    <Route path="/add-new" exact component={EmpForm}/>
                    <Route path="/user/:id" exact component={EmpForm}/>
                    {/* <EmpForm /> */}
                </Aux>
        )
    }
}

export default EmployeeList;
