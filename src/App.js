import React, { Component } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";

class App extends Component {
  state = {
    list: [
      { id: 1, title: "Bench Press" },
      { id: 2, title: "Deadlift" },
      { id: 3, title: "Squats" }
    ],
    title: ""
  };
  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleCreate = e => {
    e.preventDefault();
    if (this.state.title) {
      this.setState(({ list, title }) => ({
        list: [{ title, id: Date.now() }, ...list],
        title: ""
      }));
    }
  };
  handleDelete = id => {
    this.setState(({ list }) => ({ list: list.filter(li => li.id !== id) }));
  };

  render() {
    const { title, list } = this.state;
    return (
      <Paper>
        <Typography variant="h4" align="center" gutterBottom>
          Simple List
        </Typography>

        <form onSubmit={this.handleCreate}>
          <TextField
            name="title"
            label="Simple List"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />

          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </form>
        <List>
          {list.map(({ id, title }) => (
            <ListItem key={id}>
              <ListItemText primary={title} />
              <ListItemSecondaryAction>
                <IconButton
                  color="primary"
                  onClick={() => this.handleDelete(id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}

export default App;
