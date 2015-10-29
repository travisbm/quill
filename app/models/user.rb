class User < ActiveRecord::Base
  has_many :posts
  has_many :conversations, through: :posts
  has_many :user_groups
  has_many :groups, through: :user_groups
  has_many :comments
  has_many :likes
  has_many :active_relationships, class_name: 'Relationship',
                                  foreign_key: 'follower_id',
                                  dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed

  def full_name
    "#{first_name} #{last_name}"
  end

  # Follows a user.
  def follow(other_user)
    active_relationships.create(followed_id: other_user.id)
  end

  # Unfollows a user.
  def unfollow(other_user)
    active_relationships.find_by(followed_id: other_user.id).destroy
  end

  # Returns true if the current user is following the other user.
  def following?(other_user)
    following.include?(other_user)
  end
end
