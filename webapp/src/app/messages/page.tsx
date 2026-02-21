'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Search } from 'lucide-react';

interface Conversation {
  id: string;
  otherParticipant: {
    id: string;
    fullName: string;
    university: string;
    profilePhotoUrl: string | null;
    userType: string;
  } | null;
  lastMessage: {
    content: string;
    createdAt: string;
    senderId: string;
  } | null;
  unreadCount: number;
  createdAt: string;
}

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/messages', {
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setConversations(data.conversations);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const filteredConversations = conversations.filter(conv =>
    conv.otherParticipant?.fullName
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7F5F2' }}>
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
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link
            href="/dashboard"
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#2E3A4B',
              textDecoration: 'none',
            }}
          >
            Kommon
          </Link>
          <Link
            href="/dashboard"
            style={{
              color: '#2E3A4B',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px' }}
      >
        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#2E3A4B',
              marginBottom: '8px',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            Messages
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#6B7280',
              fontFamily: 'Lora, serif',
            }}
          >
            Connect with other students
          </p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ position: 'relative' }}>
            <Search
              size={20}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9CA3AF',
              }}
            />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 12px 12px 44px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            />
          </div>
        </div>

        {/* Conversations List */}
        {loading ? (
          <div
            style={{ textAlign: 'center', padding: '48px 0', color: '#6B7280' }}
          >
            Loading conversations...
          </div>
        ) : filteredConversations.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <MessageCircle
              size={48}
              style={{ margin: '0 auto 16px', color: '#9CA3AF' }}
            />
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#2E3A4B',
                marginBottom: '8px',
              }}
            >
              {searchQuery ? 'No conversations found' : 'No messages yet'}
            </h3>
            <p style={{ color: '#6B7280', marginBottom: '16px' }}>
              {searchQuery
                ? 'Try a different search term'
                : 'Start a conversation by contacting a listing provider'}
            </p>
            {!searchQuery && (
              <Link
                href="/listings"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#C86A50',
                  color: '#F7F5F2',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Browse Listings
              </Link>
            )}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              overflow: 'hidden',
            }}
          >
            {filteredConversations.map(conversation => (
              <Link
                key={conversation.id}
                href={`/messages/${conversation.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    borderBottom: '1px solid #E5E7EB',
                    cursor: 'pointer',
                    backgroundColor:
                      conversation.unreadCount > 0 ? '#FEF3C7' : '#FFFFFF',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (conversation.unreadCount === 0) {
                      e.currentTarget.style.backgroundColor = '#F9FAFB';
                    }
                  }}
                  onMouseLeave={e => {
                    if (conversation.unreadCount === 0) {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                    }
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#E5E7EB',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    {conversation.otherParticipant?.profilePhotoUrl ? (
                      <img
                        src={conversation.otherParticipant.profilePhotoUrl}
                        alt={conversation.otherParticipant.fullName}
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
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: '#6B7280',
                        }}
                      >
                        {conversation.otherParticipant?.fullName.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        marginBottom: '4px',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#2E3A4B',
                            marginBottom: '2px',
                          }}
                        >
                          {conversation.otherParticipant?.fullName}
                        </div>
                        <div style={{ fontSize: '14px', color: '#6B7280' }}>
                          {conversation.otherParticipant?.university}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: '#9CA3AF',
                          whiteSpace: 'nowrap',
                          marginLeft: '8px',
                        }}
                      >
                        {conversation.lastMessage &&
                          formatTime(conversation.lastMessage.createdAt)}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '14px',
                          color: '#6B7280',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          flex: 1,
                        }}
                      >
                        {conversation.lastMessage?.content || 'No messages yet'}
                      </p>
                      {conversation.unreadCount > 0 && (
                        <div
                          style={{
                            backgroundColor: '#C86A50',
                            color: '#F7F5F2',
                            borderRadius: '12px',
                            padding: '2px 8px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            marginLeft: '8px',
                          }}
                        >
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
