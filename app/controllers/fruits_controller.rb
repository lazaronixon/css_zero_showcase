class FruitsController < ApplicationController
  before_action :cant_be_less_than_min_limit, only: :destroy
  before_action :cant_be_greater_than_max_limit, only: :create

  def index
    @fruits = Fruit.order(:key)
  end

  def create
    Fruit.create(fruit_params); redirect_to(fruits_path)
  end

  def destroy
    Fruit.destroy(params[:id]); redirect_to(fruits_path)
  end

  private
    def cant_be_less_than_min_limit
      head :unprocessable_entity if Fruit.count <= 3
    end

    def cant_be_greater_than_max_limit
      head :unprocessable_entity if Fruit.count >= 10
    end

    def fruit_params
      YAML.load_file("#{Rails.root}/db/samples/fruits.yml").sample
    end
end
