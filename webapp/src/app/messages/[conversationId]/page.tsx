'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  senderId: string;
  isRead: boolean;
  createdAt: string;
}

interface Participant {
  id: string;
  fullName: string;
  university: string;
  profilePhotoUrl: string | null;
}

export default function ConversationPage() {
  const params = useParams();
  const router = useRouter();
  const conversationId = params.conversationId as string;
  const [messages, setMessages] = useState<Message[]>([]);
  const [participants, setParticipants] = useState<{
    participant1: Participant | null;
    participant2: Participant | null;
  }>({ participant1: null, participant2: null });
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages();
    // Mark messages as read
    markAsRead();
    // Poll for new messages every 5 seconds
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [conversationId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`/api/messages/${conversationId}`, {
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages);
        setParticipants(data.participants);

        // Determine current user ID from messages
        if (data.messages.length > 0 && !currentUserId) {
          // Get profile to determine current user
          const profileResponse = await fetch('/api/profile/basic-info', {
            credentials: 'include',
          });
          if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            setCurrentUserId(profileData.id);
          }
        }
      } else if (response.status === 404 || response.status === 403) {
        router.push('/messages');
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async () => {
    try {
      await fetch(`/api/messages/${conversationId}`, {
        method: 'PATCH',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Error marking messages as read:', error);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    const otherParticipant =
      participants.participant1?.id === currentUserId
        ? participants.participant2
        : participants.participant1;

    if (!otherParticipant) return;

    try {
      setSending(true);
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          recipientId: otherParticipant.id,
          content: newMessage.trim(),
        }),
      });

      if (response.ok) {
        setNewMessage('');
        await fetchMessages();
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year:
          date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined,
      });
    }
  };

  const otherParticipant =
    participants.participant1?.id === currentUserId
      ? participants.participant2
      : participants.participant1;

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#F7F5F2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', color: '#6B7280' }}>
          Loading conversation...
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F7F5F2',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          padding: '16px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Link
            href="/messages"
            style={{ color: '#2E3A4B', textDecoration: 'none' }}
          >
            <ArrowLeft size={24} />
          </Link>
          {otherParticipant && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flex: 1,
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#E5E7EB',
                  overflow: 'hidden',
                }}
              >
                {otherParticipant.profilePhotoUrl ? (
                  <img
                    src={otherParticipant.profilePhotoUrl}
                    alt={otherParticipant.fullName}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#6B7280',
                    }}
                  >
                    {otherParticipant.fullName.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#2E3A4B',
                  }}
                >
                  {otherParticipant.fullName}
                </div>
                <div style={{ fontSize: '14px', color: '#6B7280' }}>
                  {otherParticipant.university}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '24px 16px',
          overflowY: 'auto',
        }}
      >
        {messages.length === 0 ? (
          <div
            style={{ textAlign: 'center', padding: '48px 0', color: '#6B7280' }}
          >
            No messages yet. Start the conversation!
          </div>
        ) : (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {messages.map((message, index) => {
              const isCurrentUser = message.senderId === currentUserId;
              const showDate =
                index === 0 ||
                formatDate(messages[index - 1].createdAt) !==
                  formatDate(message.createdAt);

              return (
                <div key={message.id}>
                  {showDate && (
                    <div style={{ textAlign: 'center', margin: '16px 0' }}>
                      <span
                        style={{
                          backgroundColor: '#E5E7EB',
                          color: '#6B7280',
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '500',
                        }}
                      >
                        {formatDate(message.createdAt)}
                      </span>
                    </div>
                  )}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: isCurrentUser ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '70%',
                        padding: '12px 16px',
                        borderRadius: '16px',
                        backgroundColor: isCurrentUser ? '#C86A50' : '#FFFFFF',
                        color: isCurrentUser ? '#F7F5F2' : '#2E3A4B',
                        border: isCurrentUser ? 'none' : '1px solid #E5E7EB',
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: '15px',
                          lineHeight: '1.5',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        }}
                      >
                        {message.content}
                      </p>
                      <div
                        style={{
                          fontSize: '11px',
                          marginTop: '4px',
                          opacity: 0.7,
                          textAlign: 'right',
                        }}
                      >
                        {formatTime(message.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Message Input */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #E5E7EB',
          padding: '16px',
        }}
      >
        <form
          onSubmit={sendMessage}
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            gap: '12px',
          }}
        >
          <input
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            disabled={sending}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1px solid #D1D5DB',
              borderRadius: '24px',
              fontSize: '15px',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={!newMessage.trim() || sending}
            style={{
              padding: '12px 24px',
              backgroundColor:
                newMessage.trim() && !sending ? '#C86A50' : '#9CA3AF',
              color: '#F7F5F2',
              border: 'none',
              borderRadius: '24px',
              cursor: newMessage.trim() && !sending ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: '600',
            }}
          >
            <Send size={18} />
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
