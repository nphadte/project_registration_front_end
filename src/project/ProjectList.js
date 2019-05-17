import React, { Component } from "react";
import "./ProjectList.css";
import { Table, Divider, Tag } from 'antd';
import { Link } from "react-router-dom";

import { Form, Input, Button, notification } from "antd";

class ProjectList extends Component {
        constructor(props) {
                super(props);
}

  render() {
    return (
      <div className="project-list">
        <h1 className="projecttitle">Display List of Projects in a Table</h1>
      </div>
    );
  }
}

export default ProjectList;
