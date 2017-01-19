json.extract! charity, :id, :charity_name, :cause, :description, :location, :logo, :charity_website, :shipping_address, :user_id, :created_at, :updated_at
json.url charity_url(charity, format: :json)
