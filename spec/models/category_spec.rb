require 'rails_helper'

RSpec.describe Category, type: :model do
  context "Check DB columns" do  
		it "should be created with a name" do 
			is_expected.to have_db_column(:name).of_type :string
		end
	end

	context "Check Validations" do 
		it "should have many subscriptions" do
			is_expected.to have_many(:subscriptions)
		end
	end
end
