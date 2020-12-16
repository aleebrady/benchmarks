class Recordmark < ApplicationRecord
    belongs_to :Workout
    validates :name, presence: true
    validates :link, presence: true
end
