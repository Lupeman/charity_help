class ChangeUrlInCharitiesTable < ActiveRecord::Migration[5.0]
  def change
    rename_column :charities, :url, :charity_website
  end
end
