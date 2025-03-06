class TasksController < ApplicationController
  include Pagy::Backend

  def index
    records = Task.all
    @search = records.ransack(params[:q])
    @pagy, @tasks = pagy(@search.result)
  end
end