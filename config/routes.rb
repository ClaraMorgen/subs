Rails.application.routes.draw do
  devise_for :users
  root to: 'subscriptions#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api, defaults: { format: :json } do
     namespace :v1 do
      resources :subscriptions, only: [ :index ]
    end   
  end 
end
