class Lookbook::CustomPreviewController < Lookbook::PreviewController
  helper Lookbook::PreviewHelper

  before_action :reset_panels

  private
    def reset_panels
      Lookbook.update_panel(:css, { label: "CSS", disabled: true, locals: {} })
      Lookbook.update_panel(:js,  { label: "JS",  disabled: true, locals: {} })
    end
end