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
      project_details: {
        project_date: { value: "" },
        project_name: { value: "" },
        project_address: { value: "" },
        project_city: { value: "" },
        project_state: { value: "" },
        project_zip_code: { value: "" },
        project_tile_install_date: { value: "" },
        architect: {
          a_first_name: { value: "" },
          a_last_name: { value: "" },
          a_address: { value: "" },
          a_phone: { value: "" },
          a_email: { value: "" },
          a_company_name: { value: "" },
          a_city: { value: "" },
          a_state: { value: "" },
          a_zip: { value: "" },
          a_website: { value: "" }
        },
        interior_designer: {
          i_first_name: { value: "" },
          i_last_name: { value: "" },
          i_address: { value: "" },
          i_phone: { value: "" },
          i_email: { value: "" },
          i_company_name: { value: "" },
          i_city: { value: "" },
          i_state: { value: "" },
          i_zip: { value: "" },
          i_website: { value: "" }
        },
        general_contractor: {
          g_first_name: { value: "" },
          g_last_name: { value: "" },
          g_address: { value: "" },
          g_phone: { value: "" },
          g_email: { value: "" },
          g_company_name: { value: "" },
          g_city: { value: "" },
          g_state: { value: "" },
          g_zip: { value: "" },
          g_website: { value: "" }
        },
        tile_contractor: {
          t_first_name: { value: "" },
          t_last_name: { value: "" },
          t_address: { value: "" },
          t_phone: { value: "" },
          t_email: { value: "" },
          t_company_name: { value: "" },
          t_city: { value: "" },
          t_state: { value: "" },
          t_zip: { value: "" },
          t_website: { value: "" }
        },
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
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event, validationFun) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputValue]: {
        value: inputValue,
        ...validationFun(inputValue)
      }
    });
  }

  validateName = name => {
    if (name.length < NAME_MIN_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
      };
    } else if (name.length > NAME_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null
      };
    }
  };

  validateEmail = email => {
    if (!email) {
      return {
        validateStatus: "error",
        errorMsg: "Email may not be empty"
      };
    }

    const EMAIL_REGEX = RegExp("[^@ ]+@[^@ ]+\\.[^@ ]+");
    if (!EMAIL_REGEX.test(email)) {
      return {
        validateStatus: "error",
        errorMsg: "Email not valid"
      };
    }

    if (email.length > EMAIL_MAX_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
      };
    }

    return {
      validateStatus: null,
      errorMsg: null
    };
  };

  handleSubmit(event) {
    event.preventDefault();

    const projectdetailsrequest = {
      userId: "",
      company: "",
      project_name: this.state.project_details.project_name.value,
      project_date: this.state.project_details.project_date.value,
      address: this.state.project_details.project_address.value,
      city: this.state.project_details.project_city.value,
      state: this.state.project_details.project_state.value,
      zip_code: this.state.project_details.project_zip_code.value,
      tile_install_date: this.state.project_details.project_tile_install_date
        .value,
      architect: {
        firstname: this.state.project_details.architect.a_first_name.value,
        lastname: this.state.project_details.architect.a_last_name,
        address: this.state.project_details.architect.a_address.value,
        phone: this.state.project_details.architect.a_phone.value,
        email: this.state.project_details.architect.a_email.value,
        company: this.state.project_details.architect.a_company_name.value,
        city: this.state.project_details.architect.a_city.value,
        state: this.state.project_details.architect.a_state.value,
        zip: this.state.project_details.architect.a_zip.value,
        website: this.state.project_details.architect.a_website.value
      }
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
                    value={moment(currentDate, dateFormat)}
                    format={dateFormat}
                  />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item
                  label="Project Name"
                  validateStatus={
                    this.state.project_details.project_name.validateStatus
                  }
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="name"
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
                  name="address"
                  validateStatus={
                    this.state.project_details.project_address.validateStatus
                  }
                  help={this.state.project_details.project_address.errorMsg}
                >
                  <Input
                    size="large"
                    name="address"
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
                  validateStatus={
                    this.state.project_details.project_city.validationStatus
                  }
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="city"
                    //type="email"
                    autoComplete="off"
                    placeholder="City"
                    validateStatus={
                      this.state.project_details.project_name.validateStatus
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
                  validateStatus={
                    this.state.project_details.project_state.validationStatus
                  }
                  help={this.state.project_details.project_state.errorMsg}
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

              <Col span={8}>
                <FormItem label="Zip" hasFeedback>
                  <Input
                    size="large"
                    name="zip"
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
                    defaultValue={moment("2019/04/20", dateFormat)}
                    format={dateFormat}
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
                    name="architect_first_name"
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
                    name="architect_last_name"
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
                  //validateStatus={this.state.name.validateStatus}
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="address"
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
                  //validateStatus={this.state.name.validateStatus}
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="phone"
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
                  //validateStatus={this.state.name.validateStatus}
                >
                  <Input
                    size="large"
                    name="email"
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
                  validateStatus={
                    this.state.project_details.project_name.validateStatus
                  }
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="City"
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
                  validateStatus={
                    this.state.project_details.project_name.validateStatus
                  }
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="City"
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
                  validateStatus={this.state.project_details.project_address}
                  help={this.state.project_details.project_address.errorMsg}
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
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="zip code"
                    //type="email"
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
                  label="Web Site"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="website"
                    //type="email"
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
                    name="interior_designer_first_name"
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
                  //validateStatus={this.state.name.validateStatus}
                  //help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="lastname"
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
                  //validateStatus={this.state.name.validateStatus}
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="address"
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
                  //validateStatus={this.state.name.validateStatus}
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="phone"
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
                  //validateStatus={this.state.name.validateStatus}
                >
                  <Input
                    size="large"
                    name="email"
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
                  validateStatus={
                    this.state.project_details.project_name.validateStatus
                  }
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="City"
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
                  validateStatus={
                    this.state.project_details.project_name.validateStatus
                  }
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="City"
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
                  validateStatus={this.state.project_details.project_address}
                  help={this.state.project_details.project_address.errorMsg}
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
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="zip code"
                    //type="email"
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
                  label="Web Site"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="website"
                    //type="email"
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
                  //validateStatus={this.state.name.validateStatus}
                  //help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="lastname"
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
                  //validateStatus={this.state.name.validateStatus}
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="address"
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
                  //validateStatus={this.state.name.validateStatus}
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="phone"
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
                  //validateStatus={this.state.name.validateStatus}
                >
                  <Input
                    size="large"
                    name="email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <h2> Product Specifications </h2>
            <Row>
              <Col span={5}>
                <Form.Item
                  label="Item "
                  validateStatus={
                    this.state.project_details.project_name.validateStatus
                  }
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="Item"
                    autoComplete="off"
                    placeholder="Item"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>

              <Col span={5}>
                <Form.Item
                  label="Quantity"
                  validateStatus={
                    this.state.project_details.project_name.validateStatus
                  }
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="quantity"
                    autoComplete="off"
                    placeholder="Quantity"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={4}>
                <FormItem
                  label="UofM"
                  validateStatus={this.state.project_details.project_address}
                  help={this.state.project_details.project_address.errorMsg}
                >
                  <Input
                    size="large"
                    name="unitofmeasure"
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
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="zip code"
                    //type="email"
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
                  label="Web Site"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="website"
                    //type="email"
                    autoComplete="off"
                    placeholder="website"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>

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
                  //validateStatus={this.state.name.validateStatus}
                  //help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="lastname"
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
                  //validateStatus={this.state.name.validateStatus}
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="address"
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
                  //validateStatus={this.state.name.validateStatus}
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="phone"
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
                  //validateStatus={this.state.name.validateStatus}
                >
                  <Input
                    size="large"
                    name="email"
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
                  validateStatus={
                    this.state.project_details.project_name.validateStatus
                  }
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="City"
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
                  validateStatus={
                    this.state.project_details.project_name.validateStatus
                  }
                  help={this.state.project_details.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="City"
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
                  validateStatus={this.state.project_details.project_address}
                  help={this.state.project_details.project_address.errorMsg}
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
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="zip code"
                    //type="email"
                    autoComplete="off"
                    placeholder="State"
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
                    name="website"
                    //type="email"
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
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="medium"
                    name="Item"
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
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="medium"
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
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="medium"
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
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="medium"
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
                    size="medium"
                    defaultValue={moment("2019/04/20", dateFormat)}
                    format={dateFormat}
                  />
                </FormItem>
              </Col>
              <Col span={3}>
                <FormItem
                  label="Toronto"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="medium"
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
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="medium"
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
