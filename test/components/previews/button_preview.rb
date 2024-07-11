# @css app/assets/stylesheets/button.css
class ButtonPreview < Lookbook::Preview
  # @!group Basic
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
  # @!endgroup

  def with_icon
  end

  # Turbo automatically adds aria-busy on forms and disabled on buttons when submitting.
  def loading
  end
end
