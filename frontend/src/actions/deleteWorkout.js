export const deleteWorkout = (workoutId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/workouts/${workoutId}`, {
            method: 'Delete',
        })
        .then(resp => resp.json())
        .then(workout => dispatch({type: 'DELETE_WORKOUT', payload: workout}))
    }
}