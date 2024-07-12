class Lookbook::RegularActionsController < Lookbook::ApplicationController
  layout "application"

  def create
    redirect_back fallback_location: lookbook.lookbook_home_url, notice: "Contact info was updated for 3590.8768.6191@hey.com"
  end
end
