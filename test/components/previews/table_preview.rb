# @display max_width 600px
# @css app/assets/stylesheets/table.css
class TablePreview < Lookbook::Preview
  def default
  end

  # Implementation
  # ---
  # - [tasks_controller.rb](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/controllers/tasks_controller.rb)
  # - [index.html.erb](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/views/tasks/index.html.erb)
  #
  # Dependencies
  # ---
  # - [Pagy](https://github.com/ddnexus/pagy)
  # - [Ransack](https://github.com/activerecord-hackery/ransack)
  def data_table
  end
end