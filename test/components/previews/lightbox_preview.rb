# @css app/assets/stylesheets/lightbox.css
# @js app/javascript/controllers/lightbox_controller.js
class LightboxPreview < Lookbook::Preview
  #
  # This component depends on `web_share_controller.js`.
  #
  # ```html
  # <body data-controller="lightbox">
  #   <%= yield %>
  # </body>
  # ```
  def default
  end
end