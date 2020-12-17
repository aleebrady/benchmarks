export function addWorkout(data) {
    return (dispatch) => {
        fetch(`http://localhost:3001/workouts`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(workout => dispatch({type: 'ADD_WORKOUT', payload: workout}))
    }
}