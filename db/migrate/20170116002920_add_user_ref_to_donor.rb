class AddUserRefToDonor < ActiveRecord::Migration[5.0]
  def change
    add_reference :donors, :user, index: true
    add_foreign_key :donors, :users
  end
end
