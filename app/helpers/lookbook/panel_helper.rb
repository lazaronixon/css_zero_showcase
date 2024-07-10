module Lookbook::PanelHelper
  def css_panel(file_name)
    Lookbook.update_panel(:css, { label: "CSS", disabled: false, locals: { filename: "app/assets/stylesheets/#{file_name}" } }); nil
  end

  def javascript_panel(file_name)
    Lookbook.update_panel(:js, { label: "JS", disabled: false, locals: { filename: "app/javascript/controllers/#{file_name}" } }); nil
  end
end