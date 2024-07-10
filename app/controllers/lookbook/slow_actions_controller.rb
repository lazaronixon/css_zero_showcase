class Lookbook::SlowActionsController < Lookbook::ApplicationController
  layout "application"

  def create
    sleep 3.seconds; head :created
  end
end