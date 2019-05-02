class Profile::UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    record == user
  end

  def update?
    user == user
  end
end
