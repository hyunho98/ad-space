class Company < ApplicationRecord
    include Userable

    validates :name, presence: true, uniqueness: true
    validates :industry, presence: true

    has_many :ads
    has_many :agencies, through: :ads
end
