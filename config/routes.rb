Rails.application.routes.draw do
  get  "home/index"
  post "slow_action", to: "home#slow_action"

  resources :searchables, only: :index
  resources :paginables,  only: :index
  resources :tasks,       only: :index
  resources :sortables,   only: :update
  resources :fruits,      only: %i(index create destroy)

  resources :citizens, only: %i(new edit create update) do
    post "on_country_change", on: :collection
    post "on_state_change", on: :collection
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "home#index"

  mount Lookbook::Engine, at: "/lookbook"
end
