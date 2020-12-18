export function addRecordmark(recordmark, workoutId) {
    return (dispatch) => {
        fetch(`http://localhost:3001/workouts/${workoutId}/recordmarks`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(recordmark)
        })
        .then(resp => resp.json())
        .then(recordmark => dispatch({type: 'ADD_RECORDMARK', payload: recordmark}))
    }
}