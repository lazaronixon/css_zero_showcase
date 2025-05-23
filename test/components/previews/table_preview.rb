# @display max_width 600px
class TablePreview < Lookbook::Preview
  def default
  end

  # Implementation
  # ---
  # - [index.html.erb](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/views/tasks/index.html.erb)
  # - [tasks_controller.rb](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/controllers/tasks_controller.rb)
  # - [task.rb](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/models/task.rb)
  # - [pagy.rb](https://github.com/lazaronixon/css_zero_showcase/blob/main/config/initializers/pagy.rb)
  # - [ransack.rb](https://github.com/lazaronixon/css_zero_showcase/blob/main/config/initializers/ransack.rb)
  #
  # Dependencies
  # ---
  # - [Pagy](https://github.com/ddnexus/pagy)
  # - [Ransack](https://github.com/activerecord-hackery/ransack)
  def data_table
  end
end
