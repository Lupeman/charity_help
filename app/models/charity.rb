class Charity < ApplicationRecord
  # attr_accessible :logo
  belongs_to :user
  mount_uploader :logo, LogoUploader
end
