import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorSharpIcon from "@material-ui/icons/BorderColorSharp";
import { Link } from "react-router-dom";

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      color: this.props.todo.completed ? "#ccc" : "initial",
      borderLeft: this.props.todo.completed ? "0.5px dotted #ccc" : "initial",
      borderTop: this.props.todo.completed
        ? "0.5px dotted #ccc"
        : "1px solid #ccc",
      marginTop: "20px",
    };
  };

  render() {
    const { title, id } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <DeleteIcon
            onClick={this.props.deleteTodo.bind(this, id)}
            style={{
              color: "red",
              float: "right",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          />
          <Link to={{ pathname: `/edit`, state: { todos: title } }}>
            <BorderColorSharpIcon
              style={{ color: "blue", float: "right", cursor: "pointer" }}
            />
          </Link>
        </p>
      </div>
    );
  }
}
