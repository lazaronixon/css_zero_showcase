class RegularActionsController < ApplicationController
  skip_forgery_protection

  def create
    redirect_back fallback_location: , notice:
  end

  private
    def fallback_location
      lookbook.lookbook_home_url
    end

    def notice
      "Contact info was updated for 3590.8768.6191@hey.com"
    end
end
