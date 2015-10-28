class Post < ActiveRecord::Base
  belongs_to :user
  belongs_to :conversation
  has_many :comments, :likes
end
