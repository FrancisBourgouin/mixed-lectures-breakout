class SessionsController < ApplicationController


  def show #Login form
  end


  def create #Login action (POST)
    email_value = params[:email]
    password_value = params[:password]

    user = User.find_by_email(email_value)
    user_is_valid = user.authenticate(password_value)

    if user_is_valid
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to "/login"
    end


  end


  def destroy #Logout action (POST)
    session[:user_id] = nil
    redirect_to '/login'
  end

end
