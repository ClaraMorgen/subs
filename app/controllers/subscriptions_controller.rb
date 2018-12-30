class SubscriptionsController < ApplicationController
	def index
		@subscriptions = Subscription.all
    @subscription = Subscription.new
	end

  def show
    @subscription = Subscription.find(params[:id])
  end
end
