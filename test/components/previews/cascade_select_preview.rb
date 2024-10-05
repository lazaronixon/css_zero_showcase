# @display max_width 400px
# @js app/javascript/controllers/cascade_select_controller.js
class CascadeSelectPreview < Lookbook::Preview
  def default
  end

  def performance
    states = CS.states(:BR).map { |code, name| [name, code] }
    cities = CS.states(:BR).keys.flat_map { |state| CS.cities(state, :BR).map { |city| [city, "data-value": state] } }
    render_with_template(locals: { states:, cities: })
  end
end