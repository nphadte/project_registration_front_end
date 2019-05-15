import React, { Component } from "react";
import "./NewProject.css";
import moment from "moment";
import { submitProject } from "../util/APIUtils";
import { ACCESS_TOKEN } from "../constants/index";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH
} from "../constants/index";

import {
  Form,
  Input,
  Button,
  notification,
  Row,
  Col,
  DatePicker,
  Tooltip,
  Icon,
  AutoComplete
} from "antd";

const FormItem = Form.Item;
const dateFormat = "YYYY/MM/DD";
const currentDate = new Date().toISOString().substring(0, 10);

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: { value: "" },
      company: { value: "" },
      project_date: { value: "" },
      project_name: { value: "" },
      project_address: { value: "" },
      project_city: { value: "Initial" },
      project_state: { value: "" },
      project_zip_code: { value: "" },
      project_tile_install_date: { value: "" },
      a_first_name: { value: "" },
      a_last_name: { value: "" },
      a_address: { value: "" },
      a_phone: { value: "" },
      a_email: { value: "" },
      a_company_name: { value: "" },
      a_city: { value: "" },
      a_state: { value: "" },
      a_zip: { value: "" },
      a_website: { value: "" },
      i_first_name: { value: "" },
      i_last_name: { value: "" },
      i_address: { value: "" },
      i_phone: { value: "" },
      i_email: { value: "" },
      i_company_name: { value: "" },
      i_city: { value: "" },
      i_state: { value: "" },
      i_zip: { value: "" },
      i_website: { value: "" },
      g_first_name: { value: "" },
      g_last_name: { value: "" },
      g_address: { value: "" },
      g_phone: { value: "" },
      g_email: { value: "" },
      g_company_name: { value: "" },
      g_city: { value: "" },
      g_state: { value: "" },
      g_zip: { value: "" },
      g_website: { value: "" },
      t_first_name: { value: "" },
      t_last_name: { value: "" },
      t_address: { value: "" },
      t_phone: { value: "" },
      t_email: { value: "" },
      t_company_name: { value: "" },
      t_city: { value: "" },
      t_state: { value: "" },
      t_zip: { value: "" },
      t_website: { value: "" },
      product_specs: [
        {
          p_product: { value: "" },
          p_quantity: { value: "" },
          p_uofm: { value: "" },
          p_sample_submt_date: { value: "" },
          p_toronto_inventory_percentage: { value: "" },
          p_direct_import_percentage: { value: "" }
        }
      ]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event, validationFun) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
   console.log("Target is :" + target + ":" + inputName + ":" + inputValue);
    this.setState({
      [inputName]: {
        value: inputValue,
        ...validationFun(inputValue)
      }
    });
    console.log(
      "After handleInoutChange state project_name is:" +
        this.state.project_name.value
    );
    console.log(
      "After handleInoutChange state project_date is:" +
        this.state.project_date.value
    );
    console.log(
      "After handleInoutChange state project_address is:" +
        this.state.project_address.value
    );
    console.log(
      "After handleInoutChange state project_city is:" +
        this.state.project_city.value
    );
  }

  validateName = name => {
    if (name.length < NAME_MIN_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
      };
    } else if (name.length > NAME_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
      };
    } else {
      return {
        validationStatus: "success",
        errorMsg: null
      };
    }
  };

  validateEmail = email => {
    if (!email) {
      return {
        validationStatus: "error",
        errorMsg: "Email may not be empty"
      };
    }

    const EMAIL_REGEX = RegExp("[^@ ]+@[^@ ]+\\.[^@ ]+");
    if (!EMAIL_REGEX.test(email)) {
      return {
        validationStatus: "error",
        errorMsg: "Email not valid"
      };
    }

    if (email.length > EMAIL_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
      };
    }

    return {
      validationStatus: null,
      errorMsg: null
    };
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(
      "  Before  handleSubmit project-name from state is:" +
        this.state.project_name.value
    );
    let projectdetailsrequest = {
      userId: "",
      company: "",
      project_name: this.state.project_name.value,
      project_date: this.state.project_date.value,
      project_address: this.state.project_address.value,
      project_city: this.state.project_city.value,
      project_state: this.state.project_state.value,
      project_zip_code: this.state.project_zip_code.value,
      project_tile_install_date: this.state.project_tile_install_date.value,
      architect: {
        firstname: this.state.a_first_name.value,
        lastname: this.state.a_last_name.value,
        address: this.state.a_address.value,
        phone: this.state.a_phone.value,
        email: this.state.a_email.value,
        company: this.state.a_company_name.value,
        city: this.state.a_city.value,
        state: this.state.a_state.value,
        zip: this.state.a_zip.value,
        website: this.state.a_website.value
      },
      interior_designer: {
        firstname: this.state.i_first_name.value,
        lastname: this.state.i_last_name.value,
        address: this.state.i_address.value,
        phone: this.state.i_phone.value,
        email: this.state.i_email.value,
        company: this.state.i_company_name.value,
        city: this.state.i_city.value,
        state: this.state.i_state.value,
        zip: this.state.i_zip.value,
        website: this.state.i_website.value,
      },
      general_contractor: {
        firstname: this.state.g_first_name.value,
        lastname: this.state.g_last_name.value,
        address: this.state.g_address.value,
        phone: this.state.g_phone.value,
        email: this.state.g_email.value,
        company: this.state.g_company_name.value,
        city: this.state.g_city.value,
        state: this.state.g_state.value,
        zip: this.state.g_zip.value,
        website: this.state.g_website.value
      },
      tile_contractor: {
        firstname: this.state.t_first_name.value,
        lastname: this.state.t_last_name.value,
        address: this.state.t_address.value,
        phone: this.state.t_phone.value,
        email: this.state.t_email.value,
        company: this.state.t_company_name.value,
        city: this.state.t_city.value,
        state: this.state.t_state.value,
        zip: this.state.t_zip.value,
        website: this.state.t_website.value
      },
      product_specs: [
        {
          p_product: this.state.product_specs[0].p_product.value,
          p_quantity: this.state.product_specs[0].p_quantity.value,
          p_uofm: this.state.product_specs[0].p_uofm.value
        }
      ]
    };

    /*
    const projectdetailsrequest = {
      userId: "",
      company: "",
      project_name: this.state.project_details.project_name.value,
      project_date: this.state.project_details.project_date.value,
      address: this.state.project_details.project_address.value,
      city: this.state.project_details.project_city.value,
      state: this.state.project_details.project_state.value,
      zipcode: this.state.project_details.project_zip_code,
      project_completion_date: this.state.project_details.project_date,
      tile_install_date: this.state.project_details.project_tile_install_date,
      architect: {
        firstname: this.state.project_details.architect.a_first_name.value,
        lastname: this.state.project_details.architect.a_last_name,
        address: this.state.project_details.architect.a_address,
        phone: this.state.project_details.architect.a_phone,
        email: this.state.project_details.architect.a_email.value,
        company: this.state.project_details.architect.a_company_name.value,
        city: this.state.project_details.architect.a_city.value,
        state: this.state.project_details.architect.a_state.value,
        zip: this.state.project_details.architect.a_zip.value,
        website: this.state.project_details.architect.a_website.value
      },
      interior_designer: {
        firstname: this.state.project_details.architect.a_first_name.value,
        lastname: this.state.project_details.architect.a_last_name,
        address: this.state.project_details.architect.a_address,
        phone: this.state.project_details.architect.a_phone,
        email: this.state.project_details.architect.a_email.value,
        company: this.state.project_details.architect.a_company_name.value,
        city: this.state.project_details.architect.a_city.value,
        state: this.state.project_details.architect.a_state.value,
        zip: this.state.project_details.architect.a_zip.value,
        website: this.state.project_details.architect.a_website.value
      },
      general_contractor: {
        firstname: this.state.project_details.general_contractor.g_first_name
          .value,
        lastname: this.state.project_details.general_contractor.g_last_name
          .value,
        address: this.state.project_details.general_contractor.g_address.value,
        phone: this.state.project_details.general_contractor.g_phone.value,
        email: this.state.project_details.general_contractor.g_email.value,
        company: this.state.project_details.general_contractor.g_company_name
          .value,
        city: this.state.project_details.general_contractor.g_city.value,
        state: this.state.project_details.general_contractor.g_state.value,
        zip: this.state.project_details.general_contractor.g_zip.value,
        website: this.state.project_details.general_contractor.g_website.value
      },
      tile_contractor: {
        firstname: this.state.project_details.tile_contractor.t_first_name
          .value,
        lastname: this.state.project_details.tile_contractor.t_last_name.value,
        address: this.state.project_details.tile_contractor.t_address.value,
        phone: this.state.project_details.tile_contractor.t_phone.value,
        email: this.state.project_details.tile_contractor.t_email.value,
        company: this.state.project_details.tile_contractor.t_company_name
          .value,
        city: this.state.project_details.tile_contractor.t_city.value,
        state: this.state.project_details.tile_contractor.t_state.value,
        zip: this.state.project_details.tile_contractor.t_zip.value,
        website: this.state.project_details.tile_contractor.t_website.value
      },
      product_specs: [
        {
          p_product: this.state.project_details.product_specs[0].p_product
            .value,
          p_quantity: this.state.project_details.product_specs[0].p_quantity
            .value,
          p_uofm: this.state.project_details.product_specs[0].p_uofm.value
        }
      ]
    };
    */

    console.log("projectdetailsrequest project_name is :" + projectdetailsrequest.project_name);
    submitProject(projectdetailsrequest)
      .then(response => {
        notification.success({
          message: "Project Registration",
          description: "Thank you! your Project has been submitted "
        });
      })
      .catch(error => {
        notification.error({
          message: "Project Registration",
          description:
            error.message || "Sorry! Something went wrong. Please try again!"
        });
      });
  }

  render() {
    return (
      <div className="newproject-container">
        <h1 className="page-title">Regsiter New Project</h1>
        <div className="newproject-content">
          <Form
            layout="inline"
            onSubmit={this.handleSubmit}
            className="newproject-form"
          >
            <Row>
              <Col span={6}>
                <Form.Item label="Project Date">
                  <DatePicker
                    size="large"
                    name="project_date"
                    value={moment(currentDate, dateFormat)}
                    format={dateFormat}
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item
                  label="Project Name"
                  validationStatus={
                    this.state.project_name.validationStatus
                  }
                  help={this.state.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="project_name"
                    autoComplete="off"
                    type="text"
                    placeholder="Project Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <FormItem
                  label="Address"
                  name="project_address"
                  validationStatus={
                    this.state.project_address.validationStatus
                  }
                  help={this.state.project_address.errorMsg}
                >
                  <Input
                    size="large"
                    name="project_address"
                    autoComplete="off"
                    placeholder="Address"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  label="City"
                  hasFeedback
                  //validationStatus={this.state.project_city.validationStatus}
                  help={this.state.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="project_city"
                    autoComplete="off"
                    placeholder="City"
                    validationStatus={
                      this.state.project_city.validationStatus
                    }
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <FormItem
                  label="State"
                  hasFeedback
                  help={this.state.project_state.errorMsg}
                >
                  <Input
                    size="large"
                    name="project_state"
                    autoComplete="off"
                    placeholder="State"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={8}>
                <FormItem label="Zip" hasFeedback>
                  <Input
                    size="large"
                    name="project_zip_code"
                    autoComplete="off"
                    placeholder="Zip Code"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={8}>
                <FormItem label="Tile Install Date">
                  <DatePicker
                    size="large"
                    name="project_tile_install_date"
                    defaultValue={moment("2019/04/20", dateFormat)}
                    format={dateFormat}
                    //onChange={event =>
                    //this.handleInputChange(event, this.validateName)
                    //}
                  />
                </FormItem>
              </Col>
            </Row>

            <h2> Architect</h2>

            <Row>
              <Col span={5}>
                <FormItem label=" Architect First Name">
                  <Input
                    size="large"
                    name=" a_first_name"
                    autoComplete="off"
                    placeholder="Architect first name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem label=" Architect Last  Name">
                  <Input
                    size="large"
                    name="a_last_name"
                    autoComplete="off"
                    placeholder="Architect last  name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={5}>
                <FormItem
                  label="Address"
                  validationStatus={this.state.a_address.validationStatus}
                  help={this.state.a_address.errorMsg}
                >
                  <Input
                    size="large"
                    name="a_address"
                    autoComplete="off"
                    placeholder="Address"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={4}>
                <FormItem
                  label="Phone"
                  validationStatus={this.state.a_phone.validationStatus}
                  help={this.state.a_phone.errorMsg}
                >
                  <Input
                    size="large"
                    name="a_phone"
                    autoComplete="off"
                    placeholder="Phone"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem
                  label="Email"
                  validationStatus={this.state.a_email.validationStatus}
                >
                  <Input
                    size="large"
                    name="a_email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={5}>
                <Form.Item
                  label="Company Name"
                  validationStatus={
                    this.state.a_company_name.validationStatus
                  }
                  help={this.state.a_company_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="a_company_name"
                    autoComplete="off"
                    placeholder="Company Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>

              <Col span={5}>
                <Form.Item
                  label="City"
                  validationStatus={this.state.a_city.validationStatus}
                  help={this.state.a_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="a_city"
                    autoComplete="off"
                    placeholder="City"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={4}>
                <FormItem
                  label="State"
                  validationStatus={this.state.a_state.validationStatus}
                  help={this.state.a_state.errorMsg}
                >
                  <Input
                    size="large"
                    name="a_state"
                    autoComplete="off"
                    placeholder="State"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={5}>
                <FormItem
                  label="Zip Code"
                  hasFeedback
                  validationStatus={this.state.a_zip.validationStatus}
                  help={this.state.a_zip.errorMsg}
                >
                  <Input
                    size="large"
                    name="a_zip"
                    autoComplete="off"
                    placeholder="zip code"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem
                  label="Web Site"
                  hasFeedback
                  validationStatus={this.state.a_website.validationStatus}
                  help={this.state.a_website.errorMsg}
                >
                  <Input
                    size="large"
                    name="website"
                    autoComplete="off"
                    placeholder="website"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>
            <h2> Interior Designer</h2>
            <Row>
              <Col span={5}>
                <FormItem label=" Interior Designer First Name">
                  <Input
                    size="large"
                    name=" i_first_name"
                    autoComplete="off"
                    placeholder="Interior Designer first name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem
                  label="Last Name"
                  validationStatus={this.state.i_last_name.validationStatus}
                  //help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="i_lastname"
                    autoComplete="off"
                    placeholder="Last Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={5}>
                <FormItem
                  label="Address"
                  validationStatus={this.state.i_address.validationStatus}
                  help={this.state.i_address.errorMsg}
                >
                  <Input
                    size="large"
                    name="i_address"
                    autoComplete="off"
                    placeholder="Address"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={4}>
                <FormItem
                  label="Phone"
                  validationStatus={this.state.i_phone.validationStatus}
                  help={this.state.i_phone.errorMsg}
                >
                  <Input
                    size="large"
                    name="i_phone"
                    autoComplete="off"
                    placeholder="Phone"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem
                  label="Email"
                  validationStatus={this.state.i_email.validationStatus}
                >
                  <Input
                    size="large"
                    name="i_email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={5}>
                <Form.Item
                  label="Company Name"
                  validationStatus={
                    this.state.i_company_name.validationStatus
                  }
                  help={this.state.i_company_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="i_company_name"
                    autoComplete="off"
                    placeholder="Company Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>

              <Col span={5}>
                <Form.Item
                  label="City"
                  validationStatus={this.state.i_city.validationStatus}
                  help={this.state.i_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="i_city"
                    autoComplete="off"
                    placeholder="City"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={4}>
                <FormItem
                  label="State"
                  validationStatus={this.state.i_state.validationStatus}
                  help={this.state.i_state.errorMsg}
                >
                  <Input
                    size="large"
                    name="i_state"
                    autoComplete="off"
                    placeholder="State"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={5}>
                <FormItem
                  label="Zip Code"
                  hasFeedback
                  validationStatus={this.state.i_zip.validationStatus}
                  help={this.state.i_zip.errorMsg}
                >
                  <Input
                    size="large"
                    name="i_zip"
                    autoComplete="off"
                    placeholder="Zip Code"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem
                  label="Web Site"
                  hasFeedback
                  validationStatus={this.state.i_website.value}
                  help={this.state.i_website.errorMsg}
                >
                  <Input
                    size="large"
                    name="i_website"
                    autoComplete="off"
                    placeholder="website"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <h2> General Contractor</h2>
            <Row>
              <Col span={5}>
                <FormItem label="First Name">
                  <Input
                    size="large"
                    name="g_first_name"
                    autoComplete="off"
                    placeholder="First Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                    //onChange={(event) => this.handleInputChange(event, this.validateName)}
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem
                  label="Last Name"
                  validationStatus={this.state.g_last_name.validationStatus}
                  help={this.state.g_last_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="g_lastname"
                    autoComplete="off"
                    placeholder="Last Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                    //onChange={(event) => this.handleInputChange(event, this.validateName)}
                  />
                </FormItem>
              </Col>
              <Col span={5}>
                <FormItem
                  label="Address"
                  validationStatus={this.state.g_address.validationStatus}
                  help={this.state.g_address.errorMsg}
                >
                  <Input
                    size="large"
                    name="g_address"
                    autoComplete="off"
                    placeholder="Address"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                    //onChange={(event) => this.handleInputChange(event, this.validateName)}
                  />
                </FormItem>
              </Col>

              <Col span={4}>
                <FormItem
                  label="Phone"
                  validationStatus={this.state.g_phone.validationStatus}
                  help={this.state.g_phone.errorMsg}
                >
                  <Input
                    size="large"
                    name="g_phone"
                    autoComplete="off"
                    placeholder="Phone"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                    //onChange={(event) => this.handleInputChange(event, this.validateName)}
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem
                  label="Email"
                  validationStatus={this.state.g_email.validationStatus}
                >
                  <Input
                    size="large"
                    name="g_email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>
            <Col span={5}>
              <Form.Item
                label="Company Name"
                validationStatus={
                  this.state.i_company_name.validationStatus
                }
                help={this.state.i_company_name.errorMsg}
              >
                <Input
                  size="large"
                  name="i_company_name"
                  autoComplete="off"
                  placeholder="Company Name"
                  onChange={event =>
                    this.handleInputChange(event, this.validateName)
                  }
                />
              </Form.Item>
            </Col>

            <Col span={5}>
              <Form.Item
                label="City"
                validationStatus={this.state.i_city.validationStatus}
                help={this.state.i_city.errorMsg}
              >
                <Input
                  size="large"
                  name="i_city"
                  autoComplete="off"
                  placeholder="City"
                  onChange={event =>
                    this.handleInputChange(event, this.validateName)
                  }
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <FormItem
                label="State"
                validationStatus={this.state.i_state.validationStatus}
                help={this.state.i_state.errorMsg}
              >
                <Input
                  size="large"
                  name="i_state"
                  autoComplete="off"
                  placeholder="State"
                  onChange={event =>
                    this.handleInputChange(event, this.validateName)
                  }
                />
              </FormItem>
            </Col>
            <Col span={5}>
              <FormItem
                label="Zip Code"
                hasFeedback
                validationStatus={this.state.i_zip.validationStatus}
                help={this.state.i_zip.errorMsg}
              >
                <Input
                  size="large"
                  name="i_zip"
                  autoComplete="off"
                  placeholder="Zip Code"
                  onChange={event =>
                    this.handleInputChange(event, this.validateName)
                  }
                />
              </FormItem>
            </Col>

            <Col span={5}>
              <FormItem
                label="Web Site"
                hasFeedback
                validationStatus={this.state.i_website.value}
                help={this.state.i_website.errorMsg}
              >
                <Input
                  size="large"
                  name="i_website"
                  autoComplete="off"
                  placeholder="website"
                  onChange={event =>
                    this.handleInputChange(event, this.validateName)
                  }
                />
              </FormItem>
            </Col>
            <Row />

            <h2> Tile Contractor</h2>

            <Row>
              <Col span={5}>
                <FormItem label=" Tile Contractor  First Name">
                  <Input
                    size="large"
                    name="tile_contractor_first_name"
                    autoComplete="off"
                    placeholder="Tile Contractor First name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                    //onChange={(event) => this.handleInputChange(event, this.validateName)}
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem
                  label="Last Name"
                  validationStatus={this.state.t_last_name.validationStatus}
                  help={this.state.t_last_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="t_lastname"
                    autoComplete="off"
                    placeholder="Last Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                    //onChange={(event) => this.handleInputChange(event, this.validateName)}
                  />
                </FormItem>
              </Col>
              <Col span={5}>
                <FormItem
                  label="Address"
                  validationStatus={this.state.t_address.validationStatus}
                  help={this.state.t_address.errorMsg}
                >
                  <Input
                    size="large"
                    name="t_address"
                    autoComplete="off"
                    placeholder="Address"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                    //onChange={(event) => this.handleInputChange(event, this.validateName)}
                  />
                </FormItem>
              </Col>

              <Col span={4}>
                <FormItem
                  label="Phone"
                  validationStatus={this.state.t_phone.validationStatus}
                  help={this.state.t_phone.errorMsg}
                >
                  <Input
                    size="large"
                    name="t_phone"
                    autoComplete="off"
                    placeholder="Phone"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                    //onChange={(event) => this.handleInputChange(event, this.validateName)}
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem
                  label="Email"
                  //validationStatus={this.state.name.validationStatus}
                >
                  <Input
                    size="large"
                    name="t_email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                    //onChange={(event) => this.handleInputChange(event, this.validateName)}
                  />
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={5}>
                <Form.Item
                  label="Company Name"
                  validationStatus={
                    this.state.t_company_name.validationStatus
                  }
                  help={this.state.t_company_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="t_company_name"
                    autoComplete="off"
                    placeholder="Company Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>

              <Col span={5}>
                <Form.Item
                  label="City"
                  validationStatus={this.state.t_city.validationStatus}
                  help={this.state.t_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="t_city"
                    autoComplete="off"
                    placeholder="City"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={4}>
                <FormItem
                  label="State"
                  validationStatus={this.state.t_state.validationStatus}
                  help={this.state.t_state.errorMsg}
                >
                  <Input
                    size="large"
                    name="state"
                    autoComplete="off"
                    placeholder="State"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={5}>
                <FormItem
                  label="Zip Code"
                  hasFeedback
                  validationStatus={this.state.t_zip.validationStatus}
                  help={this.state.t_zip.errorMsg}
                >
                  <Input
                    size="large"
                    name="t_zip"
                    autoComplete="off"
                    placeholder="Zip Code"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={5}>
                <FormItem label="Web Site" hasFeedback>
                  <Input
                    size="large"
                    name="t_website"
                    autoComplete="off"
                    placeholder="website"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <h2> Product Specifications</h2>
            <Row>
              <Col span={5}>
                <FormItem
                  label="Item"
                  hasFeedback
                  validationStatus={
                    this.state.product_specs[0].p_product.validationStatus
                  }
                  help={this.state.product_specs[0].p_product.errorMsg}
                >
                  <Input
                    size="default"
                    name="p_product"
                    autoComplete="off"
                    placeholder="Item"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={5}>
                <FormItem
                  label="Description"
                  hasFeedback
                  //validationStatus={this.state.email.validationStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="description"
                    autoComplete="off"
                    placeholder="description"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={2}>
                <FormItem
                  label="Quantity"
                  hasFeedback
                  //validationStatus={this.state.email.validationStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="quantity"
                    autoComplete="off"
                    placeholder="quantity"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={2}>
                <FormItem
                  label="UnitOfM"
                  hasFeedback
                  //validationStatus={this.state.email.validationStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="uofm"
                    autoComplete="off"
                    placeholder="unitofm"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>

              <Col span={4}>
                <FormItem label="Submitted Date">
                  <DatePicker
                    size="default"
                    defaultValue={moment("2019/04/20", dateFormat)}
                    format={dateFormat}
                  />
                </FormItem>
              </Col>
              <Col span={3}>
                <FormItem
                  label="Toronto"
                  hasFeedback
                  //validationStatus={this.state.email.validationStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="toronto"
                    autoComplete="off"
                    placeholder="toronto"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={3}>
                <FormItem
                  label="Direct"
                  hasFeedback
                  //validationStatus={this.state.email.validationStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="directimport"
                    autoComplete="off"
                    placeholder="direct"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="project-submit-form-button"
              >
                Submit your Project
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default NewProject;
