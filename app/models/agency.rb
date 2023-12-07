class Agency < ApplicationRecord
    include Userable

    validates :name, presence: true, uniqueness: true
    validates :market, presence: true
end
