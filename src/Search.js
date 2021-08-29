import React, { Component } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Filter from "./Filter";

export class Search extends Component {
  handleChange = (e) => {
    this.props.handleSearch(e.target.value);
  };
  render() {
    return (
      <div>
        <TextField
          value={this.props.searchTodo}
          onChange={this.handleChange}
          style={{ marginTop: "20px" }}
          fullWidth
          variant="standard"
          size="small"
          placeholder="Search Todo..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: "blue" }} />
              </InputAdornment>
            ),
          }}
        />
        <Filter filter={this.props.filter} buttons={this.props.buttons} />
      </div>
    );
  }
}

export default Search;
