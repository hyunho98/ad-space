class CreateAds < ActiveRecord::Migration[6.1]
  def change
    create_table :ads do |t|
      t.string :product
      t.text :content
      t.string :image_url
      t.integer :advertiser_id
      t.integer :company_id

      t.timestamps
    end
  end
end
