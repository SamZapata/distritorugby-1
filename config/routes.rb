Rails.application.routes.draw do

  # scope :module => 'buttercms' do
  #   get '/categories/:slug' => 'categories#show', :as => :buttercms_category
  #   get '/author/:slug' => 'authors#show', :as => :buttercms_author

  #   get '/blog/rss' => 'feeds#rss', :format => 'rss', :as => :buttercms_blog_rss
  #   get '/blog/atom' => 'feeds#atom', :format => 'atom', :as => :buttercms_blog_atom
  #   get '/blog/sitemap.xml' => 'feeds#sitemap', :format => 'xml', :as => :buttercms_blog_sitemap

  #   get '/blog(/page/:page)' => 'posts#index', :defaults => {:page => 1}, :as => :buttercms_blog
  #   get '/blog/:slug' => 'posts#show', :as => :buttercms_post
  # end

  devise_for :users
  #mount Spina::Engine => '/Spina'
  
  get 'home/index'

  #Index blog
  get 'blog/index'

  #Rutas para la publicación de Noticias
  resources :news
  

  #Rutas para la publicación de Historias de vida
  resources :histories

  #Rutas competencias
  get 'tournaments/index_tournaments'
  
  #Rutas para la publicación de eventos
  get 'events/events'
  #Events-2018
  get 'events/pretemporada2018'
  get 'events/cineforoElCoachUsc'
  #Events-2017
  get 'events/torneo2017'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
