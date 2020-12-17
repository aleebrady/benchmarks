class WorkoutSerializer < ActiveModel::Serializer
  has_many :recordmarks
  attributes :id, :name, :focus, :description
end
