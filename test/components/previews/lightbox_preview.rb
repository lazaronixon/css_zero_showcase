# @css app/assets/stylesheets/lightbox.css
# @js app/javascript/controllers/lightbox_controller.js
class LightboxPreview < Lookbook::Preview

  # Initialization
  # ---
  # ```html
  # <body data-controller="lightbox">
  #   <%= yield %>
  # </body>
  # ```
  #
  # This component depends on `web_share_controller.js`.
  #
  def default
  end
end