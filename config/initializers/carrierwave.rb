CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'                        # required
  config.fog_credentials = {
    provider:              'AWS',                        # required
    aws_access_key_id:     ENV["AWS_ACCESS_KEY_ID"],                        # required
    aws_secret_access_key: ENV["AWS_SECRET_KEY"],                        # required
    region:                'ap-southeast-2',                  # optional, defaults to 'us-east-1'
    host:                  's3-ap-southeast-2.amazonaws.com'             # optional, defaults to nil
  }
  config.fog_directory  = 'charityhelp'      # required
  config.storage = :fog
  config.fog_attributes = { 'Cache-Control' => "max-age=#{365.day.to_i}" } # optional, defaults to {}
end
