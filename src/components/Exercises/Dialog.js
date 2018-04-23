import React, { Fragment, Component } from 'react';
import Form from './Form';

import { Dialog, Button, TextField, Select } from 'material-ui'; 
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

    render(){
        const { open } = this.state;
        const { muscles, onCreate } = this.props;
        
        return  <Fragment>
        <Button variant="fab" mini onClick={this.handleToggle}>
            <Add />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise 
          </DialogTitle>
          <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>
          <Form muscles={muscles} onSubmit={onCreate} />
          </DialogContent>
        </Dialog>
    </Fragment>
    }
};
