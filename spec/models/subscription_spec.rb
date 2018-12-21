require 'rails_helper'

RSpec.describe Subscription, type: :model do
  it "should be created with a title" do
    is_expected.to have_db_column(:title).of_type :string
  end

  it "should validate title" do
    is_expected.to validate_presence_of :title
  end
end
