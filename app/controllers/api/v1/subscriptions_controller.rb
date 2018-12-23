class Api::V1::SubscriptionsController < ActionController::Base
	def index
		@subscriptions = Subscription.includes(:bank_account).map do |sub|
				sub.as_json.merge({bank_account: sub.bank_account.as_json, user:sub.user.as_json, category: sub.category})
		end

		render json: @subscriptions
	end
end