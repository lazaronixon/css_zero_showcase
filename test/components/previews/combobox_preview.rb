# @display max_width 400px
# @css app/assets/stylesheets/zcombobox.css
# @js app/javascript/controllers/combobox_controller.js
class ComboboxPreview < Lookbook::Preview
  # This component depends on [Tom Select](https://tom-select.js.org).
  def input
  end

  # @!group Select
  # This component depends on [Tom Select](https://tom-select.js.org).
  def single
  end

  def disabled
  end

  def disabled_options
  end

  def grouped_options
  end
  # @!endgroup

  # This component depends on [Tom Select](https://tom-select.js.org).
  def multiple
  end

  # This component depends on [Tom Select](https://tom-select.js.org).
  def translation
  end

  # Implementation
  # ---
  # - [searchables_controller](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/controllers/searchables_controller.rb)
  # - [index.json.jbuilder](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/views/searchables/index.json.jbuilder)
  #
  # This component depends on [Tom Select](https://tom-select.js.org).
  def remote
  end
end