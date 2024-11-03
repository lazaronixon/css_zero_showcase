json.array! @movies do |movie|
  json.value movie.id
  json.text  movie.name
end