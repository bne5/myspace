Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :people
    get 'my_people', to: 'people#my_people'
  end

end
