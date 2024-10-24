class Searchable < ApplicationRecord
  enum :kind, %i[ suggestion historical ]
end
