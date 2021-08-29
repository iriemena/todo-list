import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";

export class EditTodo extends Component {
  state = {
    title: this.props.location.state.todos,
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
    this.props.editTodo(this.state.title);
    this.props.history.push("/");
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: "flex", marginTop: "20px" }}
      >
        <TextField
          variant="outlined"
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
          Update
        </Button>
      </form>
    );
  }
}

export default EditTodo;
