class UserSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :username, :password_digest, :userable_type, :userable_id
end
