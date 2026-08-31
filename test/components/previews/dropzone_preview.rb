# @display max_width 650px
# @css app/assets/stylesheets/dropzone.css
# @js app/javascript/controllers/dropzone_controller.js
class DropzonePreview < Lookbook::Preview
  # Install
  # ---
  # ```bash
  # bin/rails generate css_zero:add dropzone
  # ```
  #
  # Dependencies
  # ---
  # - [Dropzone](https://github.com/NicolasCARPi/dropzone)
  # - [Active Storage](https://guides.rubyonrails.org/active_storage_overview.html#direct-uploads)
  def basic
  end

  def validation
  end
end
