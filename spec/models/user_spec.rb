require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end


RSpec.describe User, type: :model do

	context "Check DB columns" do  
		{
			first_name: :string,
			email: :string
		}.each do |attribute, type|
			it "should be created with #{attribute}" do 
				is_expected.to have_db_column(attribute).of_type type
			end
		end
	end
  context "Check validations" do 
		[:subscriptions, :bank_accounts].each do |attribute|
	  	it "should have many #{attribute}" do
	   		is_expected.to have_many(attribute) 
	   	end
	 	end
 	end
end


