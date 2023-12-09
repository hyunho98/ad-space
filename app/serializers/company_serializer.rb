class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :industry, :image_url

  has_many :ads
  has_many :agencies
end
