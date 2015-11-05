User.create!(first_name: 'Travis',
             last_name: 'Montgomery',
             email: 'travisbm@gmail.com',
             password: 'password'
)

25.times do |n|
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  email = "example-#{n+1}@railstutorial.org"
  password = "password"
  User.create!(first_name: first_name,
               last_name: last_name,
               email: email,
               password: password
  )
end

3.times do
  name = Faker::Team.creature
  group = Group.create!(name: name)

  5.times do
    title = Faker::Book.title
    group.conversations.build(title: title)
  end

  group.save!
end

25.times do |n|
  user_id = n + 1
  group_id = rand(1..3)

  UserGroup.create!(user_id: user_id,
                     group_id: group_id
  )
end

200.times do
  title = Faker::Lorem.word
  body = Faker::Lorem.paragraphs(3).join(" ")
  user_id = rand(1..26)
  conversation_id = rand(1..15)

  Post.create!(title: title,
               body: body,
               user_id: user_id,
               conversation_id: conversation_id
  )

end

100.times do
  body = Faker::Lorem.sentence
  post_id = rand(1..200)
  user_id = rand(1..26)

  Comment.create!(body: body,
                  post_id: post_id,
                  user_id: user_id
  )

  Like.create!(user_id: user_id,
               post_id: post_id
  )
end

users = User.all
user  = users.first
following = users[2..26]
followers = users[3..26]
following.each { |followed| user.follow(followed) }
followers.each { |follower| follower.follow(user) }
