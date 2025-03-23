# @display max_width 400px
# @js app/javascript/controllers/combobox_controller.js
# @css app/assets/stylesheets/combobox.css
class ComboboxPreview < Lookbook::Preview
  # Dependencies
  # ---
  # - [Tom Select](https://github.com/orchidjs/tom-select)
  # - [Request.js](https://github.com/rails/request.js)
  def input
  end

  # @!group Select
  # Dependencies
  # ---
  # - [Tom Select](https://github.com/orchidjs/tom-select)
  # - [Request.js](https://github.com/rails/request.js)
  def single
  end

  def disabled
  end

  def disabled_options
  end

  def grouped_options
  end
  # @!endgroup

  # Dependencies
  # ---
  # - [Tom Select](https://github.com/orchidjs/tom-select)
  # - [Request.js](https://github.com/rails/request.js)
  def multiple
  end

  # Dependencies
  # ---
  # - [Tom Select](https://github.com/orchidjs/tom-select)
  # - [Request.js](https://github.com/rails/request.js)
  def translation
  end

  # Implementation
  # ---
  # - [index.json.jbuilder](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/views/searchables/index.json.jbuilder)
  # - [searchables_controller.rb](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/controllers/searchables_controller.rb)
  # - [movie.rb](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/models/movie.rb)
  #
  # Dependencies
  # ---
  # - [Tom Select](https://github.com/orchidjs/tom-select)
  # - [Request.js](https://github.com/rails/request.js)
  def remote
  end
end
