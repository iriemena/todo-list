import React, { Component } from "react";
// import { Button, ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: [-1],
    };
  }

  handleClick = (buttonLabel, index) => {
    this.setState({ clicked: index });
    this.props.filter(buttonLabel);
  };

  render() {
    return (
      <ButtonGroup style={{ marginTop: "10px" }} fullWidth>
        {this.props.buttons.map((buttonLabel, index) => (
          <Button
            key={index}
            color="primary"
            onClick={(e) => this.handleClick(buttonLabel, index)}
            className={this.state.clicked === index ? "active" : "initial"}
          >
            {buttonLabel}
          </Button>
        ))}
      </ButtonGroup>
    );
  }
}

export default Filter;
