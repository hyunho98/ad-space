class User < ApplicationRecord
    delegated_type :userable, types: %w[ Agency Company ], dependent: :destroy

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
