Rails.application.routes.draw do
  
  get 'home/index'

  #Rutas para la publicación de post
  get 'blog/index'

  
  #Rutas para la publicación de eventos
  get 'events/events'
  get 'events/pretemporada2018'
  get 'events/torneo2017'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
