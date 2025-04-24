Rails.application.routes.draw do
  resources :todos, only: [:index, :create, :update, :destroy] do
    member do
      patch :toggle_complete
    end
    collection do
      patch :reorder
    end
  end
end
