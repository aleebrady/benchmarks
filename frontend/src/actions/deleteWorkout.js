export const deleteWorkout = (workoutId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/workouts`, {
            method: 'POST',
        })
        .then(resp => resp.json())
        .then(workout => dispatch({type: 'DELETE_WORKOUT', payload: workout}))
    }
}