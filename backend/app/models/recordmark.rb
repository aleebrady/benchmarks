class Recordmark < ApplicationRecord
    belongs_to :workout
    validates :name, presence: true
    validates :link, presence: true
end
