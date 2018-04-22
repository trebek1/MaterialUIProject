import React, { Fragment, Component } from 'react';

import { Dialog, Button, TextField, Select } from 'material-ui'; 
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { Add } from 'material-ui-icons';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

import {withStyles} from 'material-ui/styles'

const styles = theme => ({
    FormControl: {
        width: 500
    }
})

export default withStyles(styles)(class extends Component {
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleChange = name => ({target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value   
            }
        });
    }

    handleSubmit = () => {
        // TODO: validate 

        const { exercise } = this.state;
        this.props.onCreate({...exercise, id: exercise.title.toLowerCase().replace(/ /g,"-")});
        
        this.setState({
            open: false,
            exercise: {
                titile: '',
                description: '',
                muscles: ''
            }
        })
    }

    render(){

        const { open, exercise: {title, description, muscles} } = this.state;
        const { muscles: categories, classes } = this.props;
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
            <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange('title')}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br/>
                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="muscles">
                    Muscles
                  </InputLabel>
                  <Select
                    value={muscles}
                    onChange={this.handleChange('muscles')}
                  >

                  {categories.map((category, index) => 
                    <MenuItem key={index} value={category}>{category}</MenuItem>
                    )}
                
                  </Select>
                </FormControl>
                <br/>
                <TextField
                  label="Description"
                  value={description}
                  multiline
                  rows="4"
                  onChange={this.handleChange('description')}
                  margin="normal"
                  className={classes.FormControl}
                />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleSubmit} variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
    </Fragment>
    }
});
