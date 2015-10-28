Rails.application.routes.draw do
  resources :comments
  resources :likes
  resources :posts
  resources :conversations
  resources :users
  resources :groups
  resources :user_groups

  root 'users#index'
end
