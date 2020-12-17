Rails.application.routes.draw do
  
  resources :workouts do
    resources :recordmarks
  end

  get '/recordmarks', to: 'recordmarks#all_recordmarks', :as => 'recordmarks'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
