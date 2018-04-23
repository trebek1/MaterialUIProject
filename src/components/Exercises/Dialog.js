import React, { Fragment, Component } from 'react';
import Form from './Form';

import { Dialog, Button } from 'material-ui'; 
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { Add } from 'material-ui-icons';

export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleFormSubmit = exercise => {
       const { onCreate } = this.props;
       this.handleToggle();

       onCreate(exercise);

    }

    render(){
        const { open } = this.state;
        const { muscles } = this.props;
        
        return  <Fragment>
        <Button variant="fab" mini onClick={this.handleToggle}>
            <Add />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle>
            Create a New Exercise 
          </DialogTitle>
          <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>
          <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
    </Fragment>
    }
};
