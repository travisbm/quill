class Conversation < ActiveRecord::Base
  belongs_to :group
  has_many :posts
  has_many :users, through: :posts
end
