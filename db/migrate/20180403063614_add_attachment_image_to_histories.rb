class AddAttachmentImageToHistories < ActiveRecord::Migration[5.0]
  def self.up
    change_table :histories do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :histories, :image
  end
end
