require 'rails_helper'

RSpec.describe Reminder, type: :model do
  it "should have a date column in db" do
    is_expected.to have_db_column(:date).of_type :datetime
  end

  it "should validate :date presence true" do
    is_expected.to validate_presence_of(:date)
  end

end
