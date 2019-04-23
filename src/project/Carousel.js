import React, { Component } from 'react';
import './Carousel.css';

import { Link } from 'react-router-dom';

import { Form, Input, Button, notification } from 'antd';

class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="carousel-container">
                <h1 className="page-title">Display Company News and Promotions</h1>
            </div>
        );
    }
}

export default Carousel;