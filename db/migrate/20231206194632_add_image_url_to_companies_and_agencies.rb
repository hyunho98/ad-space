class AddImageUrlToCompaniesAndAgencies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :image_url, :string
    add_column :agencies, :image_url, :string
  end
end
