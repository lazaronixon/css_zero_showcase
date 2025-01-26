class HomeController < ApplicationController
  def index
    redirect_to "/lookbook"
  end

  def slow_action
    sleep(2.seconds); head(:created)
  end
end
