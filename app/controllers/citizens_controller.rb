class CitizensController < ApplicationController
  def new
    @citizen = Citizen.new
  end

  def edit
    @citizen = Citizen.first
  end

  def create
    head :created
  end

  def update
    head :ok
  end

  def on_country_change
    @states = State.where(country_id: params[:country_id]).order(:name)
  end

  def on_state_change
    @cities = City.where(state_id: params[:state_id]).order(:name)
  end
end
