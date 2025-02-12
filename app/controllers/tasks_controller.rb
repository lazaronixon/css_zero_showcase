class TasksController < ApplicationController
  include Pagy::Backend

  def index
    @pagy, @tasks = pagy(Task.all)
  end
end