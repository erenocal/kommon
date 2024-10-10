import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ConversationCardProps {
  conversation: {
    id: number;
    user: string;
    lastMessage: string;
  }
}

export default function ConversationCard({ conversation }: ConversationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{conversation.user}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{conversation.lastMessage}</p>
      </CardContent>
    </Card>
  )
}