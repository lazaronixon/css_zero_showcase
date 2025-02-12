module ApplicationHelper
  include Pagy::Frontend

  def fruit_options
    options_for_select(["Apple", "Banana", "Blueberry", "Grapes", "Pineaple"])
  end

  def framework_options
    options_for_select(["Ruby on Rails", "Laravel", "Next.js", "Astro", "Remix"])
  end

  def ice_cream_options
    options_for_select(["Chocolate", "Coconut", "Mint", "Strawberry", "Vanilla"])
  end

  def fruit_options_with_disabled_items
    options_for_select(["Apple", "Banana", "Blueberry", "Grapes", "Pineaple"], disabled: "Pineaple")
  end

  def car_brand_options
    grouped_options_for_select({"American" => ["Ford", "Chevrolet", "Dodge"], "European" => ["BMW", "Mercedes-Benz", "Volkswagen"], "Asian" => ["Toyota", "Honda", "Nissan"]})
  end
end
