require 'rails_helper'

RSpec.describe Category, type: :model do
  context "Check DB columns" do  
		{
			name: :string
		}.each do |attribute, type|
			it "should be created with #{attribute}" do 
				is_expected.to have_db_column(attribute).of_type type
			end
		end
	end

	context "Check Validations" do 
		it "should have many subscriptions" do
			is_expected.to have_many(:subscriptions)
		end
	end
end
