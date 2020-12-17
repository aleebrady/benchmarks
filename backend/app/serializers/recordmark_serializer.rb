class RecordmarkSerializer < ActiveModel::Serializer
  belongs_to :workout
  attributes :id, :name, :link, :notes, :workout_id
end
