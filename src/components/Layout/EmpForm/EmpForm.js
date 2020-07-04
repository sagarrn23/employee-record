import React from 'react';
import classes from './EmpForm.module.css';
import axios from 'axios';
import {cloneDeep} from 'lodash';

class EmpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: "",
                name: "",
                username: "",
                email: "",
                address: {
                    street: "",
                    suite: "",
                    city: "",
                    zipcode: "",
                    geo: {
                        lat: "",
                        lng: "",
                    },
                },
                phone: "",
                website: "",
                company: {
                    name: "",
                    catchPhrase: "",
                    bs: "",
                },
            },
        };
    }
    
    componentDidMount(){
        if(this.props.match.params.id) {
            axios.get("http://localhost:3000/users/"+this.props.match.params.id)
                .then(response => {
                        this.setState({
                            user: response.data,
                        })
                    });
        }
    }

    onChangeHandler = (e) => {
        const prevState = cloneDeep(this.state.user);
        const type = e.target.dataset.type;
        switch(type) {
            case 'basic':
                prevState[e.target.name] = e.target.value;
                break;
            case 'address':
                prevState.address[e.target.name] = e.target.value;
                break;
            case 'geo' :
                prevState.address.geo[e.target.name] = e.target.value;
                break;
            case 'company' :
                prevState.company[e.target.name] = e.target.value;
                break;
        }
        this.setState({
            user: prevState
        });
    }

    updateUser = () => {
        axios
          .put(
            "http://localhost:3000/users/" + this.state.user.id,
            this.state.user
          )
          .then((respsonse) => console.log(respsonse));
    }

    addUser = () => {
        axios
            .post("http://localhost:3000/users/", this.state.user)
            .then((respsonse) => console.log(respsonse));
    }

    render(){
        return (
            <form className={classes.form}>
                <fieldset>
                    <h4>Basic</h4>
                    <p>
                        <label>Name:</label>
                        <input type="text" name="name" data-type='basic' onChange={this.onChangeHandler} value={this.state.user.name || ''}/>
                    </p>
                    <p>
                        <label>Username:</label>
                        <input type="text"  name="username" data-type='basic' onChange={this.onChangeHandler} value={this.state.user.username || ''}/>
                    </p>
                    <p>
                        <label>Email:</label>
                        <input type="email"  name='email' data-type='basic' onChange={this.onChangeHandler} value={this.state.user.email || ''}/>
                    </p>
                    <p>
                        <label>Phone:</label>
                        <input type="tel"  name="phone" data-type='basic' onChange={this.onChangeHandler} value={this.state.user.phone || ''}/>
                    </p>
                    <p>
                        <label>Website:</label>
                        <input type="text"  name="website" data-type='basic' onChange={this.onChangeHandler} value={this.state.user.website || ''}/>
                    </p>
                </fieldset>
                <fieldset>
                    <h4>Address </h4>
                    <p>
                        <label>Street:</label>
                        <input type="text"  name='street' data-type='address' onChange={this.onChangeHandler} value={this.state.user.address.street || ''}/>
                    </p>
                    <p>
                        <label>Suite:</label>
                        <input type="text"  name='suite' data-type='address' onChange={this.onChangeHandler} value={this.state.user.address.suite || ''}/>
                    </p>
                    <p>
                        <label>City:</label>
                        <input type="text"  name='city' data-type='address' onChange={this.onChangeHandler} value={this.state.user.address.city || ''}/>
                    </p>
                    <p>
                        <label>zipcode:</label>
                        <input type="text"  name='zipcode' data-type='address' onChange={this.onChangeHandler} value={this.state.user.address.zipcode || ''}/>
                    </p>
                    <p>
                        <label>Geo:</label>
                        <input type="text" placeholder="Latitude"  name='lat' data-type='geo' onChange={this.onChangeHandler} value={this.state.user.address.geo.lat || ''}/>

                        <input type="text" placeholder="longitude"  name='lng' data-type='geo' onChange={this.onChangeHandler} value={this.state.user.address.geo.lng || ''}/>
                    </p>
                </fieldset>
                <fieldset>
                    <h4>Company </h4>
                    <p>
                        <label>Name:</label>
                        <input type="text"  name='name' data-type='company' onChange={this.onChangeHandler} value={this.state.user.company.name || ''}/>
                    </p>
                    <p>
                        <label>CatchPhrase:</label>
                        <input type="text"  name='catchPhrase' data-type='company' onChange={this.onChangeHandler} value={this.state.user.company.catchPhrase || ''}/>
                    </p>
                    <p>
                        <label>BS:</label>
                        <input type="text"  name='bs' data-type='company' onChange={this.onChangeHandler} value={this.state.user.company.bs || ''}/>
                    </p>
                </fieldset>
                <button 
                    onClick={Object.keys(this.props.match.params).length ? this.updateUser : this.addUser}>
                        {
                            Object.keys(this.props.match.params).length ? 'Update Employee' : 'Add Employee'
                        }
                </button>
            </form>
        )
    }
}

export default EmpForm;