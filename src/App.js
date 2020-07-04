import React, {Component} from 'react';
import './App.module.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

class ERM extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    )
  }
}

export default ERM;
