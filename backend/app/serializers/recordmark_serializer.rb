class RecordmarkSerializer < ActiveModel::Serializer
  belongs_to :workout
  attibutes :id, :name, :link, :notes, :workout_id
end
