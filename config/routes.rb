Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :charities do
    resources :wishlists
  end

  resources :donors

  root "landing_page#index"

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout/:id',  to: 'sessions#destroy'
end
