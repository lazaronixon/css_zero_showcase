# @js app/javascript/controllers/local_time_controller.js
class LocalTimePreview < Lookbook::Preview
  # Initialization
  # ----
  #
  # ```html
  # <body data-controller="local-time">
  #   <%= yield %>
  # </body>
  # ```
  # @!group Default
  def time
  end

  def date
  end

  def date_time
  end
  # @!endgroup
end