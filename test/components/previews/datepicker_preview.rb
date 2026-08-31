# @display max_width 400px
# @js app/javascript/controllers/datepicker_controller.js
# @css app/assets/stylesheets/datepicker.css
class DatepickerPreview < Lookbook::Preview
  # @!group Basic
  # Install
  # ---
  # ```bash
  # bin/rails generate css_zero:add datepicker
  # ```
  #
  # Dependencies
  # ---
  # - [Flatpickr](https://github.com/flatpickr/flatpickr)
  def basic
  end

  def datetime
  end

  def disabled_dates
  end

  def multiple
  end

  def range
  end

  def time
  end
  # @!endgroup
end
