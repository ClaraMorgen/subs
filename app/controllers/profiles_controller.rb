class ProfilesController < ApplicationController
  def show
    @user = current_user
    authorize([:profile, @user])
  end
end
