export const deleteRecordmark = (recordmarkId, workoutId) => {

    return(dispatch) => {
        fetch(`http://localhost:3001/workouts/${workoutId}/recordmarks/${recordmarkId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(workout => dispatch({type: 'DELETE_RECORDMARK', payload: workout}))
    }
}