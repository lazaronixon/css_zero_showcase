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

  def country_changed
    @states = State.where(country_id: params[:country_id]).order(:name)
  end

  def state_changed
    @cities = City.where(state_id: params[:state_id]).order(:name)
  end
end
