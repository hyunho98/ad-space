class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :industry

  has_one :user
end
