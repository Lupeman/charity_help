Rails.application.routes.draw do

  resources :wishlists
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :charities

  resources :donors

  root "landing_page#index"

end
