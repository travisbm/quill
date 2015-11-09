Rails.application.routes.draw do
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

  post 'create' => 'user_groups#create'

  resources :comments
  resources :likes
  resources :posts
  resources :conversations
  resources :users
  resources :groups
  # resources :user_groups
  resources :users do
    member do
      get :following, :followers
    end
  end

  resources :users do
    member do
      get :posts
    end
  end

  resources :users do
    member do
      get :groups
    end
  end

  resources :relationships,       only: [:create, :destroy]

  root 'sessions#new'
end
