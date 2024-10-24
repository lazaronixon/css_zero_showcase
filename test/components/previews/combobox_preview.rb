# @display max_width 400px
# @css app/assets/stylesheets/zcombobox.css
# @js app/javascript/controllers/combobox_controller.js
class ComboboxPreview < Lookbook::Preview
  # Dependencies
  # ---
  # - `bin/importmaps pin tom-select`
  # - `bin/importmaps pin @rails/request.js`
  def input
  end

  # @!group Select
  # Dependencies
  # ---
  # - `bin/importmaps pin tom-select`
  # - `bin/importmaps pin @rails/request.js`
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
  # - `bin/importmaps pin tom-select`
  # - `bin/importmaps pin @rails/request.js`
  def multiple
  end

  # Dependencies
  # ---
  # - `bin/importmaps pin tom-select`
  # - `bin/importmaps pin @rails/request.js`
  def internationalization
  end

  # Dependencies
  # ---
  # - `bin/importmaps pin tom-select`
  # - `bin/importmaps pin @rails/request.js`
  def remote
  end
end