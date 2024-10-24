json.array! @searchables do |searchable|
  json.value searchable.id
  json.text searchable.term
end