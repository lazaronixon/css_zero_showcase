class Task < ApplicationRecord
  def self.ransackable_attributes(auth_object = nil)
    %w[ title status priority ]
  end
end
