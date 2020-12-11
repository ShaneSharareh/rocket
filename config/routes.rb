Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show]
    resources :articles, only: [:index, :show, :create, :destroy] do 
      resources :saves, only: [:create]
    end
    resources :saves, only: [:update, :destroy]
  end

  root "static_pages#root"
end
