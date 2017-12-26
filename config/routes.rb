Rails.application.routes.draw do
  root to: "pages#index"

  namespace :api, defaults: { format: :json } do
    resources :names, only: [:show]
  end
end
