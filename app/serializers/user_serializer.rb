class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :username, :password_digest, :userable_type, :userable_id
end
