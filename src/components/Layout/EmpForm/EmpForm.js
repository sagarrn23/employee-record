import React from 'react';
import classes from './EmpForm.module.css';

const EmpForm = () => {
    return (
        <form className={classes.form}>
            <fieldset>
                <h4>Basic</h4>
                <p>
                    <label>Name:</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Username:</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Email:</label>
                    <input type="email" />
                </p>
                <p>
                    <label>Phone:</label>
                    <input type="tel" />
                </p>
                <p>
                    <label>Website:</label>
                    <input type="text" />
                </p>
            </fieldset>
            <fieldset>
                <h4>Address </h4>
                <p>
                    <label>Street:</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Suite:</label>
                    <input type="text" />
                </p>
                <p>
                    <label>City:</label>
                    <input type="text" />
                </p>
                <p>
                    <label>zipcode:</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Geo:</label>
                    <input type="number" placeholder="Latitude" />
                    <input type="number" placeholder="longitude" />
                </p>
            </fieldset>
            <fieldset>
                <h4>Company </h4>
                <p>
                    <label>Name:</label>
                    <input type="text" />
                </p>
                <p>
                    <label>CatchPhrase:</label>
                    <input type="text" />
                </p>
                <p>
                    <label>BS:</label>
                    <input type="text" />
                </p>
            </fieldset>
            <button>Add Employee</button>
        </form>
    )
}

export default EmpForm;