import React, { Component } from 'react';
import Form from "react-jsonschema-form";

// const { default: Form } = JSONSchemaForm;

const schema = {
  "title": "Identity",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name",
      "minLength": 1,
      "maxLength": 6
    },
    "lastName": {
      "type": "string",
      "title": "First name",
    },
    "age": {
      "type": "number",
      "title": "Age"
    }
  }
}


class FormLibrary extends Component {
  render() {
    return (
      <Form schema={schema} noHtml5Validate onSubmit={console.log} showErrorList={false} />
    );
  }
}

export default FormLibrary;
