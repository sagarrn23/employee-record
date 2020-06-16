import React, { Component } from 'react';
import axios from 'axios';
import Employee from '../../components/Layout/Employee/Employee';
import classes from './EmployeeList.module.css';
import Aux from '../../hoc/Aux/Aux';
import Search from '../../components/Layout/Search/Search';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empData: [],
            initEmpEdata: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState({
                    empData: response.data,
                    initEmpEdata: response.data
                })
            });

    }

    deleteHandler = (index) => {
        const employees = [...this.state.empData];
        employees.splice(index, 1);
        this.setState({
            empData: employees
        });
    }

    searchHandler = (e) => {
        const employees = [...this.state.initEmpEdata];
        const regex = new RegExp(e.target.value, 'gi');

        const filteredEmp = employees.filter((data)=>{
            return data.name.match(regex) || data.username.match(regex);
        });
        
        this.setState({
            empData: filteredEmp
        });
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
                                delete={() => this.deleteHandler(index)}
                            />
                        })}
                    </ul>
                </Aux>
        )
    }
}

export default EmployeeList;
