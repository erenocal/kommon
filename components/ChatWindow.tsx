import React from 'react';
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ChatWindowProps {
  user: string;
}

export default function ChatWindow({ user }: ChatWindowProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chat with {user}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-4">
          <p className="bg-gray-100 p-2 rounded-lg">Is the room still available?</p>
          <p className="bg-black text-white p-2 rounded-lg text-right">Yes, it is! Would you like to schedule a viewing?</p>
        </div>
        <div className="flex space-x-2">
          <Input placeholder="Type your message..." className="flex-grow" />
          <Button>Send</Button>
        </div>
      </CardContent>
    </Card>
  )
}