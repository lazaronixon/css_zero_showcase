class CreateMovies < ActiveRecord::Migration[7.1]
  def change
    create_table :movies do |t|
      t.string  :name
      t.integer :kind

      t.timestamps
    end
  end
end
