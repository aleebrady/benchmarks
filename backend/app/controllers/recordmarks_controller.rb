class RecordmarksController < ApplicationController
    
    def index
        recordmarks = Recordmark.all
        render json: recordmarks
    end

    def show
        recordmark = Recordmark.find(params[:id])
        render json: recordmark
    end
end
