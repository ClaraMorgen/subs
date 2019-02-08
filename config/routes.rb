Rails.application.routes.draw do
  devise_for :users
  root to: 'subscriptions#index'

  resources :subscriptions do
    get 'react', on: :collection
  end

  resources :profiles, only: [ :show ]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
namespace :api, defaults: { format: :json } do
     namespace :v1 do
      resources :profiles, only: [:show, :update]
      resources :subscriptions, only: [ :index, :create ]
    end
  end
end
