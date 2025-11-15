class AddPositionToFruits < ActiveRecord::Migration[8.1]
  def change
    add_column :fruits, :position, :integer
  end
end
