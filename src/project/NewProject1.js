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
                    value={
                      this.state.project_details.architect.a_first_name.value
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
                      this.state.project_details.architect.a_last_name.value
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
                    value={this.state.project_details.architect.a_address.value}
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
                    value={this.state.project_details.architect.a_phone.value}
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
                    value={this.state.project_details.architect.a_email.value}
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
                      this.state.project_details.architect.a_company_name.value
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
                    value={this.state.project_details.architect.a_city.value}
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
                    value={this.state.project_details.architect.a_state.value}
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
                    value={this.state.project_details.architect.a_zip.value}
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
                    value={this.state.project_details.architect.a_website.value}
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
                      this.state.project_details.interior_designer.i_first_name
                        .value
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
                      this.state.project_details.interior_designer.i_last_name
                        .value
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
                    value={
                      this.state.project_details.interior_designer.i_address
                        .value
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
                    value={
                      this.state.project_details.interior_designer.i_phone.value
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
                    value={
                      this.state.project_details.interior_designer.i_email.value
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
                    value={
                      this.state.project_details.interior_designer.i_city.value
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
                    value={
                      this.state.project_details.interior_designer.i_city.value
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
                    value={
                      this.state.project_details.interior_designer.i_state.value
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
                    value={
                      this.state.project_details.interior_designer.i_zip.value
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
                    value={
                      this.state.project_details.interior_designer.i_website
                        .value
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <h2> General Contractor</h2>

            <Row>
              <Col span={5}>
                <FormItem label=" General Contractor First Name">
                  <Input
                    size="large"
                    name="g_first_name"
                    autoComplete="off"
                    placeholder="General Contractor First Name"
                    value={
                      this.state.project_details.general_contractor.g_first_name
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
                      this.state.project_details.general_contractor.g_last_name
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
                    value={
                      this.state.project_details.general_contractor.g_address
                        .value
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
                    value={
                      this.state.project_details.general_contractor.g_phone
                        .value
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
                    value={
                      this.state.project_details.general_contractor.g_email
                        .value
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
                    value={
                      this.state.project_details.product_specs[0].p_product
                        .value
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
                    value={
                      this.state.project_details.product_specs[0].p_quantity
                        .value
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
                    value={
                      this.state.project_details.product_specs[0].p_uofm.value
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
                    value={
                      this.state.project_details.general_contractor.g_zip.value
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
                    value={
                      this.state.project_details.general_contractor.g_website
                        .value
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
                    value={
                      this.state.project_details.tile_contractor.t_first_name
                        .value
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
                      this.state.project_details.tile_contractor.t_last_name
                        .value
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
                    value={
                      this.state.project_details.tile_contractor.t_address.value
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
                    value={
                      this.state.project_details.tile_contractor.t_phone.value
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
                    value={
                      this.state.project_details.tile_contractor.t_email.value
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
                    value={
                      this.state.project_details.tile_contractor.t_city.value
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
                    value={
                      this.state.project_details.tile_contractor.t_city.value
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
                    value={
                      this.state.project_details.tile_contractor.t_state.value
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
                    value={
                      this.state.project_details.tile_contractor.t_zip.value
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
                    value={
                      this.state.project_details.tile_contractor.t_website.value
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <h2> Product Specifications</h2>
            <Row>
              <Col span={6}>
                <FormItem
                  label="Item"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="Item"
                    autoComplete="off"
                    placeholder="Item"
                    value={
                      this.state.project_details.product_specs[0].p_product
                        .value
                    }
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  label="Description"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="description"
                    autoComplete="off"
                    placeholder="description"
                    value={
                      this.state.project_details.product_specs[0].p_quantity
                        .value
                    }
                  />
                </FormItem>
              </Col>

              <Col span={3}>
                <FormItem
                  label="Quantity"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="quantity"
                    autoComplete="off"
                    placeholder="quantity"
                    value={
                      this.state.project_details.product_specs[0].p_quantity
                        .value
                    }
                  />
                </FormItem>
              </Col>

              <Col span={3}>
                <FormItem
                  label="UnitOfM"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="uofm"
                    autoComplete="off"
                    placeholder="unitofm"
                    value={
                      this.state.project_details.product_specs[0].p_uofm.value
                    }
                  />
                </FormItem>
              </Col>

              <Col span={6}>
                <FormItem label="Samples Submitted Date">
                  <DatePicker
                    size="large"
                    defaultValue={moment("2019/04/20", dateFormat)}
                    format={dateFormat}
                  />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <FormItem
                  label="TorontoImport"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="torontoimport"
                    autoComplete="off"
                    placeholder="torontoimport"
                    value={
                      this.state.project_details.product_specs[0]
                        .p_toronto_inventory_percentage.value
                    }
                  />
                </FormItem>
              </Col>
              <Col span={3}>
                <FormItem
                  label="DirectImport"
                  hasFeedback
                  //validateStatus={this.state.email.validateStatus}
                  help={this.state.project_details.project_city.errorMsg}
                >
                  <Input
                    size="large"
                    name="directimport"
                    autoComplete="off"
                    placeholder="directimport"
                    value={
                      this.state.project_details.product_specs[0]
                        .p_direct_import_percentage.value
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
