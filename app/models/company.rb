class Company < ApplicationRecord
    include Userable

    validates :name, presence: true, uniqueness: true
    validates :industry, presence: true
end
