class SearchablesController < ApplicationController
  def index
    if term = params[:q].presence
      @searchables = Searchable.where("term LIKE ?", "#{term}%").order(:term).limit(10)
    else
      @searchables = Searchable.order(:term).limit(10)
    end
  end
end