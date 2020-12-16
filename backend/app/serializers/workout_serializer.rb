class WorkoutSerializer < ActiveModel::Serializer
  has_many :recordmarks
  attibutes :id, :name, :focus, :description
end
