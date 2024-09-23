# @css app/assets/stylesheets/button.css
class ButtonPreview < Lookbook::Preview
  # @!group Default
  def default
  end

  def primary
  end

  def secondary
  end

  def borderless
  end

  def positive
  end

  def negative
  end

  def rounded
  end  

  def plain
  end

  def disabled
  end
  # @!endgroup

  def with_icon
  end

  # Turbo adds `aria-busy` to the form while the form request is in progress,
  # check [here](https://turbo.hotwired.dev/reference/attributes#automatically-added-attributes).
  def loading
  end
end
