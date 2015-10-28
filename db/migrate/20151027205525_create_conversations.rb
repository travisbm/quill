class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.string :title
      t.references :group, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
