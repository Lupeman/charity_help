class SessionsController < ApplicationController
  skip_before_action :require_login, except: [:destroy]

  def new
  end

  def create
    user = User.find_by(username: params[:session][:username].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      if user.donor.present?
        redirect_to charities_path
      elsif user.charity.present?
        redirect_to charity_url(current_user.charity.id)
      end
    else
      # Create an error message.
      flash.now[:danger] = "Incorrect username or password"
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
