class AddSeatingToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :seating, :float
  end
end
