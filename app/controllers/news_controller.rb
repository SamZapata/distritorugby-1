
class NewsController < ApplicationController
  
  def index
  	@news = News.all
  end

  def new
  	@news = News.new
  end

  def create
  	@news = News.new(news_params)

  	respond_to do |format|
      if @news.save
        format.html { redirect_to @news, notice: 'Event was successfully created.' }
        format.json { render :show, status: :created, location: @news }
      else
        format.html { render :new }
        format.json { render json: @news.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
  	@news = News.find(params[:id])
  end

  def edit
  	
  end

  def update
  	
  end

  def delete
  	
  end

  private
  	def news_params
  		params.require(:news).permit(:title, :content)
  	end

end
