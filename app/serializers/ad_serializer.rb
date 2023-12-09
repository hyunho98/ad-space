class AdSerializer < ActiveModel::Serializer
  attributes :id, :product, :content, :image_url
end
