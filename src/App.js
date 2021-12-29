import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import About from "./About";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { Container } from "@material-ui/core";
import { EditTodo } from "./EditTodo";
import { Search } from "./Search";

export default class App extends Component {
  state = {
    todos: [],
    search: "",
    filterButton: ["ALL", "ACTIVE", "COMPLETED"],
    searchResult: [],
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
    localStorage.setItem(
      "Todo",
      JSON.stringify([...this.state.todos, newTodo])
    );
  };

  // Get Todo from Local Storage
  componentDidMount() {
    this.getData = JSON.parse(localStorage.getItem("Todo"));
    if (this.getData) {
      this.setState({ todos: this.getData });
    }
  }

  // Edit Todo
  editTodo = (title) => {
    alert("Cannot edit at the moment...");
  };

  markComplete = (id) => {
    this.setState(
      this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    const getData = JSON.parse(localStorage.getItem("Todo"));

    localStorage.setItem(
      "Todo",
      JSON.stringify(
        getData.map((item) => {
          if (item.id === id) {
            item.completed = !item.completed;
          }
          return item;
        })
      )
    );
  };

  // Search Todo
  handleSearch = (searchItem) => {
    this.setState({ search: searchItem });
    if (this.search !== "") {
      const newData = this.state.todos.filter((data) => {
        return data.title.toLowerCase().includes(searchItem.toLowerCase());
      });
      this.setState({ searchResult: newData });
    } else {
      this.setState({ searchResult: this.state.todos });
    }
  };

  // Filter
  filterTodo = (data, index) => {
    if (index === 2) {
      const completed = this.state.todos.filter((todo) => {
        return todo.completed;
      });
      console.log(completed);
      this.setState({ todos: [...completed] });
    } else if (index === 1) {
      const active = this.state.todos.filter((todo) => {
        console.log(!todo.completed);
        return !todo.completed;
      });
      console.log(active);
      this.setState({ todos: active });
    } else {
      this.setState({ todos: this.state.todos });
    }
  };

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });

    // Deleting from localStorage
    const newData = JSON.parse(localStorage.getItem("Todo"));
    localStorage.setItem(
      "Todo",
      JSON.stringify(newData.filter((item) => item.id !== id))
    );
  };

  render() {
    return (
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <AddTodo addTodo={this.addTodo} />
                  <Search
                    searchTodo={this.state.search}
                    filter={this.filterTodo}
                    buttons={this.state.filterButton}
                    handleSearch={this.handleSearch}
                  />
                  <Todos
                    todos={
                      this.state.search.length < 1
                        ? this.state.todos
                        : this.state.searchResult
                    }
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </div>
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/edit"
              render={(props) => (
                <EditTodo {...props} editTodo={this.editTodo} />
              )}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}
