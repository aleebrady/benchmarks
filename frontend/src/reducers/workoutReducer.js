export default function workoutReducer(state = {workouts: []}, action) {
    switch (action.type) {
        case 'FETCH_WORKOUTS':
            return {workouts: action.payload}
        case 'ADD_WORKOUT':
            return {...state, workouts: [...state.workouts, action.payload]}
        case 'ADD_RECORDMARK':
            let workouts = state.workouts.map(workout => {
                if (workout.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return workout
                }
            })
            return {...state, workouts: workouts}
        case 'DELETE_RECORDMARK':
            let workoutsAfterRecordmarkDelete = state.workouts.map(workout => {
                if (workout.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return workout
                }
            })
            return {...state, workouts: workoutsAfterRecordmarkDelete}
        case 'DELETE_WORKOUT':
            let workoutsAfterDelete = state.workouts.filter(workout => {
                if (workout.id !== action.payload.id) {
                    return workout
                }
            })
            return {...state, workouts: workoutsAfterDelete}
        default:
            return state
    }
}