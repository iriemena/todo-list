import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";

function Header() {
  return (
    <AppBar position="sticky">
      <ToolBar
        align="center"
        style={{ display: "block", marginTop: "10px", padding: "10px" }}
      >
        <Typography variant="p" component="h2">
          TODO LIST
        </Typography>

        <Typography variant="p" component="strong">
          <Link className="link" to="/">
            Home
          </Link>{" "}
          |{" "}
          <Link className="link" to="/about">
            About
          </Link>
        </Typography>
      </ToolBar>
    </AppBar>
  );
}

export default Header;
