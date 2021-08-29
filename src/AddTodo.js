import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";

export class AddTodo extends Component {
  state = {
    title: "",
    errors: { error: true },
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    this.setState({ error: false });
    e.preventDefault();
    if (this.state.title === "") {
      this.setState({ error: true });
      return;
    }
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: "flex", marginTop: "20px", flexGrow: 1 }}
      >
        <TextField
          variant="outlined"
          label="What needs to be done?"
          fullWidth
          placeholder="Add Todo"
          value={this.state.title}
          onChange={this.handleChange}
          error={this.state.error}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: "5px" }}
        >
          {" "}
          <AddCircleOutlineSharpIcon />
        </Button>
      </form>
    );
  }
}

export default AddTodo;
