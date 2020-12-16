class WorkoutsController < ApplicationController

    def index
        workouts = Workout.all.order(:name)
        render json: workouts
    end

    def show 
        workout = Workout.find(params[:id])
        render json: workout
    end
end
