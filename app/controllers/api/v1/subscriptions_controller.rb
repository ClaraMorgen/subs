class Api::V1::SubscriptionsController < ActionController::Base
	def index
		@subscriptions = Subscription.includes(:bank_account).map do |sub|
      end_date = sub.end_date.strftime("%e/%m/%Y").strip
      sub.as_json.merge({ end_date:end_date,
                          bank_account: sub.bank_account.name.as_json,
                          user:sub.user.as_json,
                          category: sub.category
                        })
    end
		render json: @subscriptions
	end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.title = params[:subscription][:title]
    @subscription.amount_cents = params[:subscription][:amountCents]
    @subscription.user = current_user
    @subscription.frequency = params[:subscription][:frequency]
    @subscription.end_date = params[:subscription][:endDate]
    @subscription.due_date = params[:subscription][:dueDate]
      @subscription.category = Category.new(name: params[:subscription][:category])
    @subscription.bank_account = BankAccount.new(name: params[:subscription][:bankAccount], user: current_user)


    puts @subscription
    @subscription.save!
    render json: @subscription
  end

  private

  def subscription_params
    params.require(:subscription).permit("values")
  end

end
