# @js app/javascript/controllers/sortable_controller.js
class SortablePreview < Lookbook::Preview
  # Install
  # ---
  # ```bash
  # bin/rails generate css_zero:add sortable
  # ```
  #
  # Implementation
  # ---
  # Dropping an item sends one request — `PUT` to that item's
  # `data-url-value`, with the new position and parent in the query string:
  #
  # ```bash
  # PUT /sortables/12?position=3&parent_id=1
  # ```
  #
  # Dependencies
  # ---
  # - [SortableJS](https://github.com/SortableJS/Sortable)
  # - [Request.js](https://github.com/rails/request.js)
  def simple
  end

  def handle
  end

  def shared
  end
end
