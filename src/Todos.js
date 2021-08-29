import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Nothing from "./Nothing";

export default class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.length < 1 ? (
          <Nothing />
        ) : (
          this.props.todos.map((todo) => (
            <div>
              <TodoItem
                todo={todo}
                markComplete={this.props.markComplete}
                deleteTodo={this.props.deleteTodo}
              />
            </div>
          ))
        )}
      </div>
    );
  }
}
