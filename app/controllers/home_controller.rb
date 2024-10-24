class HomeController < ApplicationController
  def index
    redirect_to "/lookbook"
  end

  def slow_action
    sleep(3.seconds); head(:created)
  end
end
