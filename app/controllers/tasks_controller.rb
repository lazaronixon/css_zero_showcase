class TasksController < ApplicationController
  include Pagy::Backend

  def index
    @search = Task.all.ransack(params[:q])
    @pagy, @tasks = pagy(@search.result)
  end
end