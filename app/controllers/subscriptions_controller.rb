class SubscriptionsController < ApplicationController
	def index
		@subscriptions = policy_scope(Subscription)
    @total = @subscriptions.sum(&:amount)
    respond_to do |format|
      format.html
      format.js  # <-- will render `app/views/subscription/new.js.erb`
    end
  end

  def show
    @subscription = Subscription.find(params[:id])
    authorize @subscription
    respond_to do |format|
      format.html
      format.js # <-- will render '../subscriptions/show.js.erb'
    end
  end

  def new
    @subscription = Subscription.new
    authorize @subscription
    respond_to do |format|
      format.html { redirect_to subscriptions_path }
      format.js  # <-- will render `app/views/subscription/new.js.erb`
    end
  end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.user = current_user
    authorize @subscription
    if @subscription.save
      flash[:notice] = "You have successfully created a subscription."
      redirect_to root_path
    else
      flash[:alert] = "Something went wrong"
      redirect_to new_subscription_path
    end
  end
  def edit
    @subscription = Subscription.find(params[:id])
    authorize @subscription
    respond_to do |format|
      format.html { redirect_to subscriptions_path }
      format.js # <- will render app/views/subscription/update.js.erb
    end

  end

  def update
    @subscription = Subscription.find(params[:id])
    authorize @subscription
    @subscription.update(subscription_params)
    if @subscription.save
      redirect_to root_path, notice: "You have successfuly updated #{@subscription.title}! "
    else
      render :edit, alert: "Please try to fill out the form again."
    end
  end

  def destroy
    @subscription = Subscription.find(params[:id])
    authorize @subscription
    @subscription.destroy
    redirect_to root_path, notice: "You have deleted #{@subscription.title} from your Subs! "
  end


  private

  def subscription_params
    params.require(:subscription).permit(:title, :due_date, :end_date, :amount_cents, :category_id, :bank_account_id, :frequency)
  end
end
