import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts'
import Exercises from './Exercises';
import { muscles, exercises } from '../store';
import CssBaseline from 'material-ui/CssBaseline';

class App extends Component {
	state = {
		exercises,
		exercise: {},
		editMode: false
	}

	handleCategorySelected = category => {
		this.setState({
			category
		})
	}

	getExercisesByMuscles(){
		const initExercises = muscles.reduce((exercises, category) => ({
			...exercises,
			[category]: []
		}), {});

		return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
			const { muscles } = exercise;
			exercises[muscles] = exercises[muscles] 
				? [...exercises[muscles], exercise]
				: [exercise]

				return exercises;

		}, initExercises));
	}

	handleExerciseSelected = id =>
		this.setState(({ exercises }) => ({
			exercise: exercises.find(ex => ex.id === id),
			editMode: false
		}));

	handleExerciseCreate = exercise => 
		this.setState(({ exercises }) => ({
			exercises: [
				...exercises, 
				exercise
			]
		}));

	handleExerciseDelete = id => 
		this.setState(({ exercises, exercise, editMode }) => ({
			exercises: exercises.filter(ex => ex.id !== id),
			editMode: exercise.id === id ? false : editMode,
			exercise: exercise.id === id ? {} : exercise
		}));

	handleExerciseSelectEdit = id => 
		this.setState(({ exercises }) => ({
			exercise: exercises.find(ex => ex.id === id),
			editMode: true
		}));
	
	handleExerciseEdit = exercise => {
		this.setState(({ exercises }) => ({
			exercises: [
				...exercises.filter(ex => ex.id !== exercise.id),
				exercise
			],
			exercise		
		}));
	}

  render() {
  	const exercises = this.getExercisesByMuscles(),
  	{ category, exercise, editMode } = this.state;

    return (
    	<Fragment>
    		<CssBaseline />
    		<Header muscles={muscles} onExerciseCreate={this.handleExerciseCreate} />
    			<Exercises onEdit={this.handleExerciseSelectEdit} muscles={muscles} editMode={editMode} onEditSubmit={this.handleExerciseEdit} onDelete={this.handleExerciseDelete} exercise={exercise} onSelect={this.handleExerciseSelected} category={category} exercises={exercises} />
    		<Footer category={category} muscles={muscles} onSelect={this.handleCategorySelected} />
    	</Fragment>
      
    );
  }
}

export default App;
