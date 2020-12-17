class RecordmarksController < ApplicationController

    before_action :set_workout
    
    def index
        @recordmarks = @workout.recordmarks
        render json: @recordmarks
    end

    def show
        @recordmark = @workout.recordmarks.find(params[:id])
        render json: @recordmark
        # recordmark = Recordmark.find(params[:id])
        # render json: recordmark
    end

    def all_recordmarks
        @recordmarks = Recordmark.all.order(:name)
        render json @recordmarks
    end

    def create
        @recordmark = @workout.recordmarks.new(recordmark_params)
        if @recordmark.save
            render json: @workout
        else
            render json: {error: "Error creating bookmark"}
        end
    end

    def destroy 
        recordmark = Recordmark.find(params[:id])
        folder = Folder.find(recordmark.workout_id)
        bookmark.destroy
        render json: workout
    end

    private

    def set_workout
        @workout = Workout.find(params[:workout_id])
    end

    def recordmark_params
        params.require(:recordmark).permit(:name, :link, :notes, :workout_id)
    end

end
