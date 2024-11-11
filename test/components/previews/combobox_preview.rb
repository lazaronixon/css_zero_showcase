# @display max_width 400px
# @css app/assets/stylesheets/zcombobox.css
# @js app/javascript/controllers/combobox_controller.js
class ComboboxPreview < Lookbook::Preview
  # Depencencies
  # ---
  # - [Tom Select](https://github.com/orchidjs/tom-select)
  # - [Request.js](https://github.com/rails/request.js)
  def input
  end

  # @!group Select
  # Depencencies
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

  # Depencencies
  # ---
  # - [Tom Select](https://github.com/orchidjs/tom-select)
  # - [Request.js](https://github.com/rails/request.js)
  def multiple
  end

  # Depencencies
  # ---
  # - [Tom Select](https://github.com/orchidjs/tom-select)
  # - [Request.js](https://github.com/rails/request.js)
  def translation
  end

  # Implementation
  # ---
  # - [searchables_controller](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/controllers/searchables_controller.rb)
  # - [index.json.jbuilder](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/views/searchables/index.json.jbuilder)
  #
  # Depencencies
  # ---
  # - [Tom Select](https://github.com/orchidjs/tom-select)
  # - [Request.js](https://github.com/rails/request.js)
  def remote
  end
end