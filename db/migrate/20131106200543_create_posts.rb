class CreatePosts < ActiveRecord::Migration
  def up
		create_table :posts do |t|
			t.string  :title
			t.text :body
			t.timestamps
		end
	end
end
