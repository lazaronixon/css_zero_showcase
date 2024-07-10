class ButtonPreview < Lookbook::Preview
  include Lookbook::PanelHelper

  # @!group Actions

  def primary
    css_panel "button.css"
  end

  def secondary
    css_panel "button.css"
  end

  def outline
    css_panel "button.css"
  end

  def plain
    css_panel "button.css"
  end

  def positive
    css_panel "button.css"
  end

  def negative
    css_panel "button.css"
  end

  # @!endgroup

  def with_icon
    css_panel "button.css"
  end

  # Turbo automatically adds aria-busy on forms and disabled on buttons when submitting.
  def loading
    css_panel "button.css"
  end
end
