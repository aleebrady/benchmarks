export function fetchWorkouts() {
    return (dispatch) => {
        fetch(`http://localhost:3001/workouts`)
        .then(resp => resp.json())
        .then(workouts => dispatch({
            type: 'FETCH_WORKOUTS',
            payload: workouts
        }))
    }
}