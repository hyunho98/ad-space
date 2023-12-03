class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :image_url
      t.string :username
      t.string :password_digest
      t.string :userable_type
      t.integer :userable_id

      t.timestamps
    end
  end
end
