json.extract! donor, :id, :first_name, :last_name, :company_name, :created_at, :updated_at
json.url donor_url(donor, format: :json)