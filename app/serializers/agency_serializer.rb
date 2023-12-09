class AgencySerializer < ActiveModel::Serializer
  attributes :id, :name, :market, :image_url

  has_many :ads
  has_many :companies
end
