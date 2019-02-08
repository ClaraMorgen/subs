class ProfilesController < ApplicationController
  def show
    @user = User.find(params[:id])
    authorize([:profile, @user])
  end

  def update
  end
end
