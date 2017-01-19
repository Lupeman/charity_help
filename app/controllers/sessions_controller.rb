class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:session][:username].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      if user.donors.exists?
        redirect_to donor_path(user)
      elsif user.charities.exists?
        redirect_to charity_path(user)
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
