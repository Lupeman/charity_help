class CreateWishlists < ActiveRecord::Migration[5.0]
  def change
    create_table :wishlists do |t|
      t.references :charity, foreign_key: true
      t.string :item_name
      t.string :item_url
      t.decimal :estimated_price, :precision => 6, :scale => 2

      t.timestamps
    end
  end
end
