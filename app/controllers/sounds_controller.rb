class SoundsController < ApplicationController
  before_action -> { sleep 2.seconds }, except: :index

  def index
  end

  def success
    redirect_to sounds_path, notice: "Card added"
  end

  def failure
    redirect_to sounds_path, alert: "Try again later"
  end
end
