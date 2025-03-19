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
  end

  def state_changed
  end
end
