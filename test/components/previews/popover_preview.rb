# @display centered true
# @display padding 0px
# @css app/assets/stylesheets/popover.css
# @js app/javascript/controllers/popover_controller.js
class PopoverPreview < Lookbook::Preview
  # Partials
  # ---
  # - [\_dimensions_form.html.erb](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/views/lookbook/preview/_dimensions_form.html.erb)
  #
  # Dependencies
  # ---
  # - [Floating UI](https://floating-ui.com)
  def default
  end

  # Partials
  # ---
  # - [\_dimensions_form.html.erb](https://github.com/lazaronixon/css_zero_showcase/blob/main/app/views/lookbook/preview/_dimensions_form.html.erb)
  #
  # Dependencies
  # ---
  # - [Floating UI](https://floating-ui.com)
  def placement
  end

  # Dependencies
  # ---
  # - [Floating UI](https://floating-ui.com)
  def hover_card
  end

  # @!group Tooltip
  # @display centered false
  # @display padding 1.5rem
  def tooltip_custom
  end

  def tooltip_native
  end
  # @!endgroup
end