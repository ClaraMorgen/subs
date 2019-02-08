class Api::V1::ProfilesController < Api::V1::BaseController

  def show
    @user = User.find(params[:id])
    authorize([:profile, @user])
  end

  def update
    @user = User.find(params[:id])
    authorize([:profile, @user])
    if @user.update(user_params)
       render :show and return
    else
      render_error
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :email, :id)
  end

  def render_error
    render json: { errors: @restaurant.errors.full_messages },
      status: :unprocessable_entity
  end
end
