class Api::V1::SubscriptionsController < ActionController::Base
	def index
		@subscriptions = Subscription.all
		render json: @subscriptions
	end
end