class Post < ActiveRecord::Base


   attr_accessible :title, :body, :category_ids
  has_and_belongs_to_many :categories

  validates :body ,:title, :presence=> true


end
