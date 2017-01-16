class CreateCharities < ActiveRecord::Migration[5.0]
  def change
    create_table :charities do |t|
      t.string :charity_name
      t.string :cause
      t.text :description
      t.string :location
      t.string :logo
      t.string :url
      t.text :shipping_address
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
