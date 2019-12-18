User.create(email: "test@test.com", password: "111111", password_confirmation: "111111")
200.times do
    name = Faker::Movies::StarWars.character
    age = Faker::Number.within(range: 16..98)
    occupation = Faker::Job.field
    avatar = Faker::Avatar.image(slug: name, size: '100x400', format: 'png', set: 'set5')
    Person.create(name: name, age: age, occupation: occupation, avatar: avatar)    
end

puts "200 People Seeded"