class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :userable_type, :userable_id
end
