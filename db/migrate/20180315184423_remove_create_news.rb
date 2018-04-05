class RemoveCreateNews < ActiveRecord::Migration[5.0]
  def change
  	rename_table :news, :news_
  end
end
