class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :userable_type
end
