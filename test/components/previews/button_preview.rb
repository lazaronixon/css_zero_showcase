# @css app/assets/stylesheets/button.css
class ButtonPreview < Lookbook::Preview
  # @!group Default
  def primary
  end

  def secondary
  end

  def outline
  end

  def plain
  end

  def positive
  end

  def negative
  end

  def disabled
  end
  # @!endgroup

  def with_icon
  end

  # Turbo adds [aria-busy to the form and disabled to the form submitter while the form request is in progress](https://turbo.hotwired.dev/reference/attributes#automatically-added-attributes).
  def loading
  end
end
