class ApplicationController < ActionController::Base


  def current_user
    if session[:user_id]
      User.find(session[:user_id])
    else
      nil
    end
  end
  helper_method :current_user


  def authenticate
    unless current_user
      redirect_to "/login"
    end
  end

  


end
