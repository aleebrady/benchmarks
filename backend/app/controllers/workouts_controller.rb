class WorkoutsController < ApplicationController

    def index
        @workouts = Workout.all.order(:name)
        render json: @workouts
    end

    def show 
        # @workout = Workout.find(:id)
        # render json: @workout
        @workout = Workout.find(params[:id])
        render json: @workout
    end

    def create
        # byebug
        @workout = Workout.new(workout_params)
        if @workout.save
            render json: @workout 
        else
            render json: {error: "Error creating workout"}
        end
    end

    def destroy
        @workout = Workout.find(params[:id])
        @workout.recordmarks.destroy_all
        @workout.destroy
        render json: @workout
    end

    private

    def workout_params
        params.require(:workout).permit(:name, :focus, :description)
    end

end
