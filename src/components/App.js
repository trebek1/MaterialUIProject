import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts'
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

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

	handleExerciseSelected = (id) =>
		this.setState(({ exercises }) => ({
			exercise: exercises.find(ex => ex.id === id)
		}));

	handleExerciseCreate = exercise => 
		this.setState(({ exercises }) => ({
			exercises: [
				...exercises, 
				exercise
			]
		}));

	handleExerciseDelete = id => 
		this.setState(({exercises}) => ({
			exercises: exercises.filter(ex => ex.id !== id)
		}));

	handleExerciseEdit = id => 
		this.setState(({ exercises }) => ({
			exercise: exercises.find(ex => ex.id === id),
			editMode: true
		}));

	handleEdit = exercise => 
		this.setState(({ exercises }) => ({
			exercises: [...exercises.filter((ex) => ex.id !== exercise.id ),
				exercise
			]			
		}));

  render() {
  	const exercises = this.getExercisesByMuscles(),
  	{ category, exercise, editMode } = this.state;

    return (
    	<Fragment>
    		<Header muscles={muscles} onExerciseCreate={this.handleExerciseCreate} />
    			<Exercises onEdit={this.handleExerciseEdit} muscles={muscles} editMode={editMode} onEditSubmit={this.handleEdit} onDelete={this.handleExerciseDelete} exercise={exercise} onSelect={this.handleExerciseSelected} category={category} exercises={exercises} />
    		<Footer category={category} muscles={muscles} onSelect={this.handleCategorySelected} />
    	</Fragment>
      
    );
  }
}

export default App;
