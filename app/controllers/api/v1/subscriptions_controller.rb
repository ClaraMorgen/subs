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
end
