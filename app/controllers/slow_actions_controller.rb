class SlowActionsController < ApplicationController
  skip_forgery_protection

  def create
    sleep 3.seconds; head :created
  end
end