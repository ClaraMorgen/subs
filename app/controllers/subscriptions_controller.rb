class SubscriptionsController < ApplicationController
	def index
		@subscriptions = Subscription.all
    respond_to do |format|
      format.html
      format.js  # <-- will render `app/views/subscription/new.js.erb`
    end
  end

  def show
    @subscription = Subscription.find(params[:id])
  end

  def new
    @subscription = Subscription.new
    respond_to do |format|
      format.html { redirect_to subscriptions_path }
      format.js  # <-- will render `app/views/subscription/new.js.erb`
    end
  end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.user = current_user
    @subscription.save
    flash[:notice] = "You have successfully created a subscription."
    redirect_to root_path
  end

  private

  def subscription_params
    params.require(:subscription).permit(:title, :due_date, :end_date, :amount_cents, :category_id, :bank_account_id)
  end
end
