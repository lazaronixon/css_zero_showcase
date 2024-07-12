# @css app/assets/stylesheets/dialog.css
# @js app/javascript/controllers/dialog_controller.js
class DialogPreview < Lookbook::Preview
  def alert_dialog
  end

  # Use `button_to_close_dialog` to render a button that will close the dialog.
  def dismissible_dialog
  end
end