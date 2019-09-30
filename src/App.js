import React, { Component } from "react";
import {} from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Delete } from "@material-ui/icons";
import { StylesProvider } from "@material-ui/styles";
import styled from "styled-components";
import { pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: pink,
    type: "dark"
  }
});

const StyledPaper = styled(Paper)`
  max-width: 400px;
  margin: 2em;
  padding: 1em;
`;
const InlineTextField = styled(TextField)`
  margin-top: 0;
  margin-bottom: 0;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  margin: 2em auto;
`;

class App extends Component {
  state = {
    list: [
      { id: 1, title: "React.js" },
      { id: 2, title: "Material UI" },
      { id: 3, title: "Styled Components" },
      { id: 4, title: "Are awesome!" }
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
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledPaper>
            <Typography variant="h4" align="center" gutterBottom>
              Simple List
            </Typography>

            <Form onSubmit={this.handleCreate}>
              <InlineTextField
                name="title"
                label="Simple List"
                value={title}
                onChange={this.handleChange}
                margin="normal"
              />

              <Button type="submit" color="primary" variant="contained">
                Create
              </Button>
            </Form>
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
          </StyledPaper>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}

export default App;
