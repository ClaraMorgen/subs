class SubscriptionsController < ApplicationController
	def index
		@subscriptions = Subscription.all
    @total = @subscriptions.sum(&:amount)
    respond_to do |format|
      format.html
      format.js  # <-- will render `app/views/subscription/new.js.erb`
    end
  end

  def show
    @subscription = Subscription.find(params[:id])
    respond_to do |format|
      format.html
      format.js # <-- will render '../subscriptions/show.js.erb'
    end
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
    if @subscription.save
      flash[:notice] = "You have successfully created a subscription."
      redirect_to root_path
    else
      flash[:alert] = "Something went wrong"
      redirect_to new_subscription_path
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:title, :due_date, :end_date, :amount_cents, :category_id, :bank_account_id)
  end
end
