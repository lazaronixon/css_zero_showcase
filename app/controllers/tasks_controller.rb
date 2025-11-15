class TasksController < ApplicationController
  include Pagy::Method

  def index
    @search = Task.ransack(params[:q])
    @pagy, @tasks = pagy(@search.result)
  end
end
