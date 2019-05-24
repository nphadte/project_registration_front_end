import React, { Component } from "react";
import "./NewProject.css";
import moment from "moment";
import { submitProject } from "../util/APIUtils";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import ProductRemoteSelect from "./ProductRemoteSelect";
import UserRemoteSelect from "./UserRemoteSelect";
import { getUserProfile, getAllProducts } from "../util/APIUtils";

import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH
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
  AutoComplete,
  Select,
  Spin
} from "antd";

const FormItem = Form.Item;
const dateFormat = "YYYY/MM/DD";
const currentDate = new Date().toISOString().substring(0, 10);
const Option = Select.Option;

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
  //    product_data: [],
   product_data: [{
         "Id": 1,
         "product_desc": "M1-0809 25\"x25\" Display Boards - Soho - 2 Boards (BPI)",
          "item_code": "9902-0765-0"
      }],
   
      userId: { value: "" },
      company: { value: "" },
      project_date: { value: moment(currentDate, dateFormat) },
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
    this.onChange = this.onChange.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
    this.onSelectChanged = this.onSelectChanged.bind(this);
    this.handleSelectChanged = this.handleSelectChanged.bind(this);
    this.loadAllProducts = this.loadAllProducts.bind(this);
  }

  componentDidMount() {
   
    var i = 0;
    getAllProducts().then(response => {
      console.log("The response is :" + JSON.stringify(response));
    
       this.state.product_data = response.map(product => ({
        Id: `${product.Id}`,
        product_desc: product.product_desc,
        item_code: product.item_code,
      }));

      this.setState({ product_data:  [...this.state.product_data] });
      console.log("The lenmgth of populated array is : " + this.state.product_data.length);
      for ( let u = 0; u < this.state.product_data.length ; u++){
        console.log("The item_code is : " + this.state.product_data[u].item_code);
      }
    });
   
    };

  loadAllProducts = () => {
   console.log("The  dropdown button is being seaerched");
  };
  
  loadAllProducts_Bk = () => {
    console.log("The  dropdown button is being seaerched");
    getAllProducts()
      .then(response => {
        console.log("response is  :" + JSON.stringify(response));

        this.setState({
          product_data: [...response]
        });

        for (let i in response) {
          //this.state.product_data = [...response];
          console.log(
            "The  *********:" +
              i +
              "th product_desc and  item_code  :" +
              this.state.product_data[i].product_desc +
              ":" +
              this.state.product_data[i].item_code
          );
        }
      })
      .catch(error => {
        console.log("An error was thrown while retreiving ");
      });
  };

  SelectProduct = () => {
    console.log("onSelectProduct is selected");
  };

  onSelectChanged = (name, value1) => {
    console.log("Input is :" + name + " and value is:" + value1);
  };

  handleSelectChanged = value => {
    console.log(
      " Select drop-down has been selected  and the value is :" + ` ${value}`
    );
  };

  onDateChanged = id => {
    // for a date field, the value is passed into the change handler
    var self = this;
    let dtstr = "";
    return function(mmst, ds) {
      console.log(" The id in function is :" + id);
      dtstr = ds;
      console.log(" The dateString  in function value is :" + ds + ":" + dtstr);
      self.setState({
        [id]: {
          value: ds
        }
      });
    };
  };

  onChange = (field, dateString) => {
    console.log(
      "date in onChange is: " + field + ":         dateString is :" + dateString
    );
  };

  handleInputChange(event, validationFun) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
    //console.log("Target is :" + target + ":" + inputName + ":" + inputValue);
    this.setState({
      [inputName]: {
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
        validateStatus: "error",
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
        website: this.state.i_website.value
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
          p_uofm: this.state.product_specs[0].p_uofm.value,
          p_sample_submt_date: this.state.product_specs[0].p_sample_submt_date
            .value,
          p_toronto_inventory_percentage: this.state.product_specs[0]
            .p_toronto_inventory_percentage.value,
          p_direct_import_percentage: this.state.product_specs[0]
            .p_direct_import_percentage.value
        }
      ]
    };

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
                    disabled="true"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Project Name"
                  validateStatus={this.state.project_name.validateStatus}
                  help={this.state.project_name.errorMsg}
                >
                  <Input
                    size="large"
                    name="project_name"
                    autoComplete="off"
                    type="text"
                    placeholder="Project Name"
                    value={this.state.project_name.value}
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
                  validateStatus={this.state.project_address.validateStatus}
                  help={this.state.project_address.errorMsg}
                >
                  <Input
                    size="large"
                    name="project_address"
                    autoComplete="off"
                    placeholder="Address"
                    value={this.state.project_address.value}
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
                  //validateStatus={this.state.project_city.validateStatus}
                  help={this.state.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="project_city"
                    autoComplete="off"
                    placeholder="City"
                    value={this.state.project_city.value}
                    validateStatus={this.state.project_city.validateStatus}
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
                    name=" project_tile_install_date"
                    format={dateFormat}
                    onChange={this.onDateChanged(
                      "project_tile_install_date"
                    )}
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
                  validateStatus={this.state.a_address.validateStatus}
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
                  validateStatus={this.state.a_phone.validateStatus}
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
                  validateStatus={this.state.a_email.validateStatus}
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
                  validateStatus={this.state.a_company_name.validateStatus}
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
                  validateStatus={this.state.a_city.validateStatus}
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
                  validateStatus={this.state.a_state.validateStatus}
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
                  validateStatus={this.state.a_zip.validateStatus}
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
                  validateStatus={this.state.a_website.validateStatus}
                  help={this.state.a_website.errorMsg}
                >
                  <Input
                    size="large"
                    name="a_website"
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
                  validateStatus={this.state.i_last_name.validateStatus}
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
                  validateStatus={this.state.i_address.validateStatus}
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
                  validateStatus={this.state.i_phone.validateStatus}
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
                  validateStatus={this.state.i_email.validateStatus}
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
                  validateStatus={this.state.i_company_name.validateStatus}
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
                  validateStatus={this.state.i_city.validateStatus}
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
                  validateStatus={this.state.i_state.validateStatus}
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
                  validateStatus={this.state.i_zip.validateStatus}
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
                  validateStatus={this.state.i_website.value}
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
                  validateStatus={this.state.g_last_name.validateStatus}
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
                  validateStatus={this.state.g_address.validateStatus}
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
                  />
                </FormItem>
              </Col>
              <Col span={4}>
                <FormItem
                  label="Phone"
                  validateStatus={this.state.g_phone.validateStatus}
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
                  validateStatus={this.state.g_email.validateStatus}
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
                validateStatus={this.state.i_company_name.validateStatus}
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
                validateStatus={this.state.i_city.validateStatus}
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
                validateStatus={this.state.i_state.validateStatus}
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
                validateStatus={this.state.i_zip.validateStatus}
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
                validateStatus={this.state.i_website.value}
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
                    name="t_firstname"
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
                  validateStatus={this.state.t_last_name.validateStatus}
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
                  validateStatus={this.state.t_address.validateStatus}
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
                  validateStatus={this.state.t_phone.validateStatus}
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
                  //validateStatus={this.state.name.validateStatus}
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
                  validateStatus={this.state.t_company_name.validateStatus}
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
                  validateStatus={this.state.t_city.validateStatus}
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
                  validateStatus={this.state.t_state.validateStatus}
                  help={this.state.t_state.errorMsg}
                >
                  <Input
                    size="large"
                    name="t_state"
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
                  validateStatus={this.state.t_zip.validateStatus}
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
              <Col span={10}>
                <FormItem label="Product Description 1">
                  <Select
                    label="product_desc"
                    size="default"
                    name="product_desc"
                    placeholder="product Description"
                    autosize={false}
                    width="100%"
                    //notFoundContent={
                    //  fetching ? <Spin size="small" /> : null
                    // }
                    onSearch={this.loadAllProducts}
                    onChange={this.handleSelectChanged}
                  >
                    {this.state.product_data.map(d => (
                      <Option key={d.product_desc}>
                        {" "}
                        {d.product_desc}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <Form.Item label="Item Code">
                  <Input
                    size="default"
                    name="prod_Item_code"
                    value="456768778  "
                  />
                </Form.Item>
              </Col>
              <Col span={4}>
                <FormItem
                  label="Brand Name"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="p_brand_name"
                    autoComplete="off"
                    placeholder="Brand Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <FormItem
                  label="Quantity"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="p_quantity"
                    autoComplete="off"
                    placeholder="quantity"
                    onChange={event =>
                      this.onSelectChanged(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={4}>
                <FormItem
                  label="UnitOfM"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Select
                    size="default"
                    name="p_uofm"
                    placeholder="Unit Of Measure"
                    onSearch={this.onSelectProduct}
                  >
                    <Option value={"    boxes        "}>
                      {"    boxes        "}
                    </Option>
                    <Option value="  sq ft      ">{" sq ft    "}</Option>
                    <Option value="blocks"> {"    blocks        "}</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Submitted Date">
                  <DatePicker
                    size="default"
                    defaultValue={moment("2019/04/20", dateFormat)}
                    format={dateFormat}
                    onChange={event => this.onSelectChanged(event)}
                  />
                </FormItem>
              </Col>
              <Col span={4}>
                <FormItem
                  label="Toronto"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="p_toronto_inventory_percentage"
                    autoComplete="off"
                    placeholder="toronto"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={4}>
                <FormItem
                  label="Direct"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="p_direct_import_percentage"
                    autoComplete="off"
                    placeholder="direct"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col span={9}>
                <FormItem label="Product Description  2">
                  <Select
                    size="default"
                    name="product_desc"
                    placeholder="product Description"
                    autosize={false}
                    width="100%"
                    //notFoundContent={
                    //  fetching ? <Spin size="small" /> : null
                    // }
                    onSearch={this.loadAllProducts}
                    onChange={this.handleSelectChanged}
                  >
                    {this.state.product_data.map(d => (
                      <Option key={d.product_desc}>
                        {" "}
                        {d.product_desc}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
              </Col>
              <Col span={9}>
                <FormItem
                  label="Item Product"
                  autosize={false}
                  width="100%"
                  placeholder=" Item  Code 2"
                >
                  <ProductRemoteSelect
                    size="large"
                    autosize={false}
                    width="100%"
                  />
                </FormItem>
              </Col>

              <Col span={4}>
                <FormItem
                  label="Brand Name"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="p_brand_name"
                    autoComplete="off"
                    placeholder="Brand Name"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <FormItem
                  label="Quantity"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="p_quantity"
                    autoComplete="off"
                    placeholder="quantity"
                    onChange={event =>
                      this.onSelectChanged(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={4}>
                <FormItem
                  label="UnitOfM"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Select
                    size="default"
                    name="p_uofm"
                    placeholder="Unit Of Measure"
                  >
                    <Option value={"    boxes        "}>
                      {"    boxes        "}
                    </Option>
                    <Option value="  sq ft      ">{" sq ft    "}</Option>
                    <Option value="blocks"> {"    blocks        "}</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Submitted Date">
                  <DatePicker
                    size="default"
                    defaultValue={moment("2019/04/20", dateFormat)}
                    format={dateFormat}
                    onChange={event => this.onSelectChanged(event)}
                  />
                </FormItem>
              </Col>
              <Col span={4}>
                <FormItem
                  label="Toronto"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="p_toronto_inventory_percentage"
                    autoComplete="off"
                    placeholder="toronto"
                    onChange={event =>
                      this.handleInputChange(event, this.validateName)
                    }
                  />
                </FormItem>
              </Col>
              <Col span={4}>
                <FormItem
                  label="Direct"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  //help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="default"
                    name="p_direct_import_percentage"
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
