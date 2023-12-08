class AdSerializer < ActiveModel::Serializer
  attributes :id, :product, :content, :image_url, :advertiser_id, :company_id
end
