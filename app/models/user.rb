class User < ActiveRecord::Base
  has_many :groups, through: :user_groups
  has_many :comments
  has_many :likes
  has_many :active_relationships, class_name: 'Relationship',
                                  foreign_key: 'follower_id',
                                  dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed
end
