class RenameItemToMovie < ActiveRecord::Migration[5.2]
  def change
    rename_table :items, :movies
  end
end
