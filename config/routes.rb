Rails.application.routes.draw do
  root to: 'posts#index'
  resources :posts, only: [:index, :create, :update, :destroy, :show, :new]
end
