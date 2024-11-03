class SearchablesController < ApplicationController
  def index
    if name = params[:q].presence
      @movies = Movie.where("name LIKE ?", "#{name}%").order(:name).limit(10)
    else
      @movies = Movie.order(:name).limit(10)
    end
  end
end