class Agency < ApplicationRecord
    include Userable

    validates :name, presence: true, uniqueness: true
    validates :market, presence: true

    has_many :ads
    has_many :companies, through: :ads
end
