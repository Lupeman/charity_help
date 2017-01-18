class Charity < ApplicationRecord
  # attr_accessible :logo
  belongs_to :user
  mount_uploader :logo, LogoUploader
  has_many :wishlists
end
