Rails.application.routes.draw do
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

  resources :comments
  resources :likes
  resources :posts
  resources :conversations
  resources :users
  resources :groups
  resources :user_groups

  root 'users#index'
end
