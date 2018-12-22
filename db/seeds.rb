# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


	u1 = User.create({email: 'bdlb@utexas.edu', first_name: 'Bryan', password: '123456'})
	u2 = User.create({email: 'clara@gmail.co,', first_name: 'Clara', password: '123456'})
puts "users created"

categories = Category.create(
	[
		{name: 'Media'},
		{name: 'Entertainment'},
		{name: 'Phone'}
	]
)
puts "categories created"

bank_accounts = BankAccount.create(
	[
		{name: 'Chase Bank'},
		{name: 'N26'},
		{name: 'Revolut'},
		{name: 'ING Deutsch Bank'},
		{name: 'PayPal'}
	]
)
puts "bank accounts created"

subscriptions = Subscription.create(
	[
		{title: 'Netflix', frequency: 'Monthly', amount_cents: '950', end_date:'2019-12-05', due_date: '2018-11-05', user: u1, category: categories.sample, bank_account: bank_accounts.sample},
		{title: 'Spotify', frequency: 'Monthly', amount_cents: '1050', end_date:'2020-05-04', due_date: '2017-05-01', user: u2, category: categories.sample, bank_account: bank_accounts.sample},
		{title: 'Spotify', frequency: 'Monthly', amount_cents: '1050', end_date:'2020-05-04', due_date: '2017-05-01', user: u1, category: categories.sample, bank_account: bank_accounts.sample},
		{title: 'New York Times', frequency: 'Weekly', amount_cents: '400', end_date:'2025-10-23', due_date: '2015-08-01', user: u1, category: categories.sample, bank_account: bank_accounts.sample},
		{title: 'Credit Card Bill', frequency: 'Yearly', amount_cents: '50000', end_date:'2019-12-28', due_date: '2018-12-27', user: u2, category: categories.sample, bank_account: bank_accounts.sample}
	]
)

puts "subs created"

reminders = Reminder.create(
	[
		{date: '2019-01-05', subscription: subscriptions.last},
		{date: '2019-12-27', subscription: subscriptions.sample},
		{date: '2020-05-27', subscription: subscriptions.sample},
		{date: '2019-04-15', subscription: subscriptions.sample},
		{date: '2019-10-01', subscription: subscriptions.sample}
	]	
)

puts "seeds created"