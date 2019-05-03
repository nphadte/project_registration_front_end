import React, { Component } from "react";
import "./NewProject1.css";
import moment from "moment";

import "antd/dist/antd.css";

import { Link } from "react-router-dom";

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

class NewProject1 extends Component {
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
          first_name: { value: "" },
          last_name: { value: "" },
          address: { value: "" },
          phone: { value: "" },
          email: { value: "" },
          company_name: { value: "" },
          city: { value: "" },
          state: { value: "" },
          zip: { value: "" },
          website: { value: "" }
        },
        interior_designer: {
          first_name: { value: "" },
          last_name: { value: "" },
          address: { value: "" },
          phone: { value: "" },
          email: { value: "" },
          company_name: { value: "" },
          city: { value: "" },
          state: { value: "" },
          zip: { value: "" },
          website: { value: "" }
        },
        general_contractor: {
          first_name: { value: "" },
          last_name: { value: "" },
          address: { value: "" },
          phone: { value: "" },
          email: { value: "" },
          company_name: { value: "" },
          city: { value: "" },
          state: { value: "" },
          zip: { value: "" },
          website: { value: "" }
        },
        tile_contractor: {
          first_name: { value: "" },
          last_name: { value: "" },
          address: { value: "" },
          phone: { value: "" },
          email: { value: "" },
          company_name: { value: "" },
          city: { value: "" },
          state: { value: "" },
          zip: { value: "" },
          website: { value: "" }
        },
        product_specs: [
          {
            product: { value: "" },
            quantity: { value: "" },
            uofm: { value: "" },
            sample_submt_date: { value: "" },
            toronto_inventory_percentage: { value: "" },
            direct_import_percentage: { value: "" }
          }
        ]
      }
    };
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
                    defaultValue={moment(currentDate, dateFormat)}
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
                    placeholder="Project Name"
                    value={this.state.project_details.project_name.value}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <FormItem
                  label="Address"
                  name="address"
                  validateStatus={this.state.project_details.project_address}
                  help={this.state.project_details.project_address.errorMsg}
                >
                  <Input
                    size="large"
                    name="address"
                    autoComplete="off"
                    placeholder="Address"
                    value={this.state.project_details.project_address.value}
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  label="City"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="city"
                    //type="email"
                    autoComplete="off"
                    placeholder="City"
                    value={this.state.project_details.project_city.value}
                  />
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <FormItem
                  label="State"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="state"
                    //type="email"
                    autoComplete="off"
                    placeholder="State"
                    value={this.state.project_details.project_state.value}
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
                    value={this.state.project_details.project_zip_code.value}
                  />
                </FormItem>
              </Col>

              <Col span={8}>
                <FormItem label="Tile Install Date">
                  <DatePicker
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
                    value={this.state.project_details.architect.first_name}
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
                    value={this.state.project_details.architect.last_name}
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
                    value={this.state.project_details.architect.address}
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
                    value={this.state.project_details.architect.phone}
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
                    value={this.state.project_details.architect.email}
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
                    value={
                      this.state.project_details.architect.company_name.value
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
                    value={this.state.project_details.architect.city.value}
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
                    value={this.state.project_details.architect.state}
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
                    value={this.state.project_details.architect.zip}
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
                    value={this.state.project_details.architect.website}
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
                    value={
                      this.state.project_details.interior_designer.first_name
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
                    value={
                      this.state.project_details.interior_designer.last_name
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
                    value={this.state.project_details.interior_designer.address}
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
                    value={this.state.project_details.interior_designer.phone}
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
                    value={this.state.project_details.interior_designer.emaill}
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
                    value={this.state.project_details.interior_designer.city}
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
                    value={
                      this.state.project_details.interior_designer.city.value
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
                    value={this.state.project_details.architect.state}
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
                    value={this.state.project_details.architect.zip}
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
                    value={this.state.project_details.architect.website}
                  />
                </FormItem>
              </Col>
            </Row>

            <h2> General Contractor</h2>

            <Row>
              <Col span={5}>
                <FormItem label=" Architect First Name">
                  <Input
                    size="large"
                    name="architect_first_name"
                    autoComplete="off"
                    placeholder="Architect first name"
                    value={this.state.project_details.architect.first_name}
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
                    value={this.state.project_details.architect.last_name}
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
                    value={this.state.project_details.architect.address}
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
                    value={this.state.project_details.architect.phone}
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
                    value={this.state.project_details.architect.email}
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
                    value={
                      this.state.project_details.architect.company_name.value
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
                    value={this.state.project_details.architect.city.value}
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
                    value={this.state.project_details.architect.state}
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
                    value={this.state.project_details.architect.zip}
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
                    value={this.state.project_details.architect.website}
                  />
                </FormItem>
              </Col>
            </Row>

            <h2> Tile Contractor</h2>

            <Row>
              <Col span={5}>
                <FormItem label=" Architect First Name">
                  <Input
                    size="large"
                    name="architect_first_name"
                    autoComplete="off"
                    placeholder="Architect first name"
                    value={this.state.project_details.architect.first_name}
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
                    value={this.state.project_details.architect.last_name}
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
                    value={this.state.project_details.architect.address}
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
                    value={this.state.project_details.architect.phone}
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
                    value={this.state.project_details.architect.email}
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
                    value={
                      this.state.project_details.architect.company_name.value
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
                    value={this.state.project_details.architect.city.value}
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
                    value={this.state.project_details.architect.state}
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
                    value={this.state.project_details.architect.zip}
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
                    value={this.state.project_details.architect.website}
                  />
                </FormItem>
              </Col>
            </Row>

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="signup-form-button"
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

export default NewProject1;
