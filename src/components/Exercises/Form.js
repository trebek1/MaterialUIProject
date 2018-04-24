import React, { Component } from 'react';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import {withStyles} from 'material-ui/styles'
import { TextField, Select, Button } from 'material-ui';

const styles = theme => ({
    FormControl: {
        width: 250
    }
});

export default withStyles(styles)(class extends Component {

	state = this.getInitialState();

	getInitialState(){
		const { exercise } = this.props;

		return exercise ? exercise : {
			title: '',
			description: '',
			muscles: ''
		}
	}

	static getDerivedStateFromProps({ exercise }){
		return exercise || null;
	}

	// componentWillReceiveProps({ exercise }){
	// 	this.setState({
	// 		...exercise
	// 	});
	// }

	handleChange = name => ({target: { value } }) => {
        this.setState({
            [name]: value   
        });
    }

    handleSubmit = () => {
        // TODO: validate 

        this.props.onSubmit({
        	id: this.state.title.toLowerCase().replace(/ /g,"-"),
        	...this.state
        });
        
        this.setState(this.getInitialState());
    }

	render(){
		const { title, description, muscles  } = this.state;
		const { muscles: categories, exercise, classes } = this.props;

		return <form>
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
                <br/>
                <Button color="primary" onClick={this.handleSubmit} variant="raised">
              	{exercise ? 'Edit' : 'Create'}
            	</Button>
            </form>
	}	
});