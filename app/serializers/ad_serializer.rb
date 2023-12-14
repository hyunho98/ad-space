class AdSerializer < ActiveModel::Serializer
  attributes :id, :product, :content, :image_url

  belongs_to :company
  belongs_to :agency
end
