import React, { Component } from 'react';
import './NewProject1.css';

import { Link } from 'react-router-dom';

import { Form, Input, Button, notification } from 'antd';
const FormItem = Form.Item;

class NewProject1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_details: {
                project_date:       {value:  '' },
                project_name:       { value: '' },
                project_address:    { value: '' },
                project_city:       { value: '' },
                project_state:      { value: '' },
                project_zipcode:    { value: '' },
                project_tile_install_date: { value: '' },
            }
        };
    }
            /*,
            architect: {
                first_name:         { value: '' },
                last_name:          { value: '' },
                address:            { value: '' },
                phone:              { value: '' },
                email:              { value: '' },
                company_name:       { value: '' },
                city:               { value: '' },
                state:              { value: '' },
                zip:                { value: '' },
                website:            { value: '' }
            },
            interior_designer: {
                first_name:         { value: '' },
                last_name:          { value: '' },
                address:            { value: '' },
                phone:              { value: '' },
                email:              { value: '' },
                company_name:       { value: '' },
                city:               { value: '' },
                state:              { value: '' },
                zip:                { value: '' },
                website:            { value: '' }
            },
            general_contractor: {
                first_name:         { value: '' },
                last_name:          { value: '' },
                address:            { value: '' },
                phone:              { value: '' },
                email:              { value: '' },
                company_name:       { value: '' },
                city:               { value: '' },
                state:              { value: '' },
                zip:                { value: '' },
                website:            { value: '' }
            },
            tile_contractor: {
                first_name:         {value: '' },
                last_name:          { value: '' },
                address:            { value: '' },
                phone:              { value: '' },
                email:              { value: '' },
                company_name:       { value: '' },
                city:               { value: '' },
                state:              { value: '' },
                zip:                { value: '' },
                website:            { value: '' }
            },
            product_specs: [
                {
                    product: { value: '' },
                    quantity: { value: '' },
                    uofm: { value: '' },
                    sample_submt_date: { value: '' },
                    toronto_inventory_percentage: { value: '' },
                    direct_import_percentage: { value: '' }
                }
            ]
        }
        */
        /*
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
        this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
        
    }
    */

    /*
    handleSubmit(event) {
        event.preventDefault();

        const signupRequest = {
            name: this.state.name.value,
            email: this.state.email.value,
            username: this.state.username.value,
            password: this.state.password.value,
            company: this.state.company.value,
            phone: this.state.phone.value,
            bdm: this.state.bdm.value
        };
        signup(signupRequest)
            .then(response => {
                notification.success({
                    message: 'Project Registration',
                    description: "Thank you! You're successfully registered. Please Login to continue!",
                });
                this.props.history.push("/login");
            }).catch(error => {
                notification.error({
                    message: 'Project Registration',
                    description: error.message || 'Sorry! Something went wrong. Please try again!'
                });
            });
    }

    isFormInvalid() {
        return !(this.state.name.validateStatus === 'success' &&
            this.state.username.validateStatus === 'success' &&
            this.state.email.validateStatus === 'success' &&
            this.state.password.validateStatus === 'success'
        );
    }
    */

    render() {
        return (
            <div className="newproject-container">
                <h1 className="page-title">Regsiter New Project</h1>
                <div className="newproject-content">
                    <Form onSubmit={this.handleSubmit} className="newproject-form">
                        <FormItem
                            label="Project Name"
                            //validateStatus={this.state.name.validateStatus}
                            help={this.state.project_details.project_name.errorMsg}>
                            <Input
                                size="large"
                                name="name"
                                autoComplete="off"
                                placeholder="Your full name"
                                value={this.state.project_details.project_date.value}
                                //onChange={(event) => this.handleInputChange(event, this.validateName)} 
                                />
                        </FormItem>

                            <FormItem label="Address"
                            validateStatus={this.state.project_details.project_address}
                            help={this.state.project_details.project_address.errorMsg}>
                            <Input
                                size="large"
                                name="username"
                                autoComplete="off"
                                placeholder="A unique username"
                                value={this.state.project_details.project_address}
                                //onBlur={this.validateUsernameAvailability}
                                //onChange={(event) => this.handleInputChange(event, this.validateUsername)} 
                                />
                        </FormItem>
                        <FormItem
                            label="State"
                            hasFeedback
                            //validateStatus={this.state.email.validateStatus}
                            help={this.state.project_details.project_state.errorMsg}>
                            <Input
                                size="large"
                                name="state"
                                //type="email"
                                autoComplete="off"
                                placeholder="State"
                                value={this.state.project_details.project_state}
                                //onBlur={this.validateEmailAvailability}
                                //onChange={(event) => this.handleInputChange(event, this.validateEmail)} 
                                />
                        </FormItem>
                        <FormItem>
                            <Button type="primary"
                                htmlType="submit"
                                size="large"
                                className="signup-form-button"
                                //disabled={this.isFormInvalid()}
                                >Sign up</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

    export default NewProject1;