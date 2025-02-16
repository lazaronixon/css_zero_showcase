class TasksController < ApplicationController
  include Pagy::Backend

  def index
    records = Task.all

    if stale?(records)
      @search = records.ransack(params[:q])
      @pagy, @tasks = pagy(@search.result)
    end
  end
end