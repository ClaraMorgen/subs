class Api::V1::ProfilesController < Api::V1::BaseController

  def show
    @user = User.find(params[:id])
    authorize([:profile, @user])
  end

  def update
  end
end
