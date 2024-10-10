import ConversationCard from "@/components/ConversationCard"
import ChatWindow from "@/components/ChatWindow"

export default function MessagesPage() {
  const conversations = [
    { id: 1, user: "Alice", lastMessage: "Is the room still available?" },
    { id: 2, user: "Bob", lastMessage: "When can I move in?" },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Conversations</h2>
          {conversations.map((conv) => (
            <ConversationCard key={conv.id} conversation={conv} />
          ))}
        </div>
        <div className="md:col-span-2">
          <ChatWindow user="Alice" />
        </div>
      </div>
    </div>
  )
}