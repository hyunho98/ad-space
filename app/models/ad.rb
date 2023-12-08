class Ad < ApplicationRecord
    validates :product, presence: true
    validates :content, length: { minimum: 50 }

    belongs_to :advertiser, optional: true
    belongs_to :company
end
