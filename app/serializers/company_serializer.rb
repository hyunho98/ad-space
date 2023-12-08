class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :industry, :image_url

  has_one :user
end
