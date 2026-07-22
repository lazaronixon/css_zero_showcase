class SoundsController < ApplicationController
  before_action -> { sleep 2.seconds }, except: :index

  def index
  end

  def success
    redirect_to sounds_path, notice: "Event has been created"
  end

  def failure
    redirect_to sounds_path, alert: "Event has not been created"
  end
end
