import React, { Component } from 'react';
import './NewProject.css';

import { Form, Input, Button, notification } from 'antd';
const NewProjectFormItem = Form.Item;

class Signup extends Component {
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
                project_tile_install_date: { value: '' }
            },
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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
        this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
    }

    
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

    render() {
        return (
            <div className="newproject-container">
                <h1 className="page-title">Regsiter New Project</h1>
                <div className="newproject-content">
                    <Form onSubmit={this.handleSubmit} className="newproject-form">
                        <FormItem
                            label="Full Name"
                            validateStatus={this.state.name.validateStatus}
                            help={this.state.name.errorMsg}>
                            <Input
                                size="large"
                                name="name"
                                autoComplete="off"
                                placeholder="Your full name"
                                value={this.state.project_details.project_date.value}
                                onChange={(event) => this.handleInputChange(event, this.validateName)} />
                        </FormItem>
                        <FormItem label="Username"
                            hasFeedback
                            validateStatus={this.state.username.validateStatus}
                            help={this.state.username.errorMsg}>
                            <Input
                                size="large"
                                name="username"
                                autoComplete="off"
                                placeholder="A unique username"
                                value={this.state.username.value}
                                onBlur={this.validateUsernameAvailability}
                                onChange={(event) => this.handleInputChange(event, this.validateUsername)} />
                        </FormItem>
                        <FormItem
                            label="Email"
                            hasFeedback
                            validateStatus={this.state.email.validateStatus}
                            help={this.state.email.errorMsg}>
                            <Input
                                size="large"
                                name="email"
                                type="email"
                                autoComplete="off"
                                placeholder="Your email"
                                value={this.state.email.value}
                                onBlur={this.validateEmailAvailability}
                                onChange={(event) => this.handleInputChange(event, this.validateEmail)} />
                        </FormItem>
                        <FormItem
                            label="Password"
                            validateStatus={this.state.password.validateStatus}
                            help={this.state.password.errorMsg}>
                            <Input
                                size="large"
                                name="password"
                                type="password"
                                autoComplete="off"
                                placeholder="A password between 6 to 20 characters"
                                value={this.state.password.value}
                                onChange={(event) => this.handleInputChange(event, this.validatePassword)} />
                        </FormItem>
                        <FormItem
                            label="Company"
                            help={this.state.company.errorMsg}>
                            <Input
                                size="large"
                                name="company"
                                autoComplete="off"
                                placeholder="Your Company name"
                                value={this.state.company.value} />
                        </FormItem>
                        <FormItem
                            label="Phone"
                            help={this.state.phone.errorMsg}>
                            <Input
                                size="large"
                                name="Phone number"
                                autoComplete="on"
                                placeholder="Your Contact Phone number"
                                value={this.state.phone.value}
                                onChange={(event) => this.handleInputChange(event, this.validatePhoneNumber)} />
                        </FormItem>
                        <FormItem>
                            <Button type="primary"
                                htmlType="submit"
                                size="large"
                                className="signup-form-button"
                                disabled={this.isFormInvalid()}>Sign up</Button>
                            Already registed? <Link to="/login">Login now!</Link>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }

    

export default Signup;