import React from 'react';
import classes from './Employee.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import EmpLocation from './Map/Map';

const Employee = (props) => {
    return(
        <li className={classes.card}>
            <div className={classes.userInfo}>
                <p><strong>Name:</strong> {props.emp.name}</p>
                <p><strong>Username:</strong> {props.emp.username}</p>
                <p><strong>Email:</strong> {props.emp.email}</p>
                <address>
                    <strong>Address: </strong> 
                    {props.emp.address.street},
                    {props.emp.address.suite},
                    {props.emp.address.city},
                    {props.emp.address.zipcode}
                </address>
                <p><strong>Phone:</strong> {props.emp.phone}</p>
                <p><strong>Website:</strong> <a href={props.emp.email}>{props.emp.email}</a></p>
                <p><strong>Company:</strong> {props.emp.company.name}</p>
                
            </div>

            <div className={classes.map}>
                <EmpLocation coords={props.emp.address.geo} />
            </div>
            <div className={classes.handler}>
                <span>
                    <FontAwesomeIcon icon={faEdit} />
                </span>
                <span>
                    <FontAwesomeIcon onClick={props.delete} icon={faTrash} />
                </span>
            </div>
        </li>
    )
}

export default Employee;
