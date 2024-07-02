Rails.application.routes.draw do
  resources :urls
  get "/u/:short_url" => "urls#visit"
  resources :users, except: :index

  # Session Controller Routes
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  post '/logout' => 'sessions#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "urls#index"
end
