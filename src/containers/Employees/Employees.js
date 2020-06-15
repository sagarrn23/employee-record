import React, { Component } from 'react';
import axios from 'axios';
import Employee from '../../components/Layout/Employee/Employee';
import classes from './Employees.module.css';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empData: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState({
                    empData: response.data
                })
            });

    }

    render() {
        return (
            <ul className={classes.listWrap}>
                {this.state.empData.map((data) => {
                    return <Employee key={data.id} emp={data} />;
                })}
            </ul>
        )
    }
}

export default EmployeeList;
