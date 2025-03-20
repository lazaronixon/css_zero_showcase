class Citizen < ApplicationRecord
  belongs_to :city

  delegate :state, :state_id, to: :city, allow_nil: true
  delegate :country, :country_id, to: :state, allow_nil: true
end
