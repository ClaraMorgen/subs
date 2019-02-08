class Api::V1::ProfilesController < Api::V1::BaseController

  def show
    @user = current_user
    authorize([:profile, @user])
  end

  def update
  end
end
