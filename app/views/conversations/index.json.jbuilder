json.array!(@conversations) do |conversation|
  json.extract! conversation, :id, :title, :group_id
  json.url conversation_url(conversation, format: :json)
end
