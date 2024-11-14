# @display max_width 400px
# @css app/assets/stylesheets/input.css
class InputPreview < Lookbook::Preview
  # @!group Default
  def text_field
  end

  def email_field
  end

  def search_field
  end

  def integer_field
  end

  def decimal_field
  end

  def date_field
  end

  def datetime_field
  end

  def file_field
  end

  def pattern_field
  end

  def autocomplete_field
  end

  def color_field
  end

  def actor_field
  end

  def disabled_field
  end
  # @!endgroup

  # @!group Select
  def select
  end

  def select_with_multiple
  end

  def select_with_groups
  end

  def select_with_separator
  end
  # @!endgroup

  # @!group Text Area
  def text_area
  end

  # Text area with auto grow is not supported in [all browsers](https://caniuse.com/mdn-css_properties_field-sizing).
  def text_area_with_auto_grow
  end
  # @!endgroup

  # @!group Checkbox and Radio
  def checkbox
  end

  def radio
  end
  # @!endgroup

  # @!group Range
  def range
  end

  def range_with_tick_marks
  end
  # @!endgroup
end