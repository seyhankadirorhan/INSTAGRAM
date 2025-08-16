import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Search, MoreHorizontal, Heart, Image } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const conversations = [
  {
    id: "1",
    user: { username: "ahmet.yilmaz", avatar: "/placeholder.svg" },
    lastMessage: "Merhaba! Nasılsın?",
    timestamp: "2dk",
    unread: 2,
    online: true
  },
  {
    id: "2",
    user: { username: "zeynep_k", avatar: "/placeholder.svg" },
    lastMessage: "Fotoğrafların çok güzel olmuş!",
    timestamp: "1s",
    unread: 0,
    online: false
  },
  {
    id: "3",
    user: { username: "mehmet.dev", avatar: "/placeholder.svg" },
    lastMessage: "Proje hakkında konuşabilir miyiz?",
    timestamp: "5dk",
    unread: 1,
    online: true
  }
];

const messages = [
  {
    id: "1",
    sender: "ahmet.yilmaz",
    content: "Merhaba! Nasılsın?",
    timestamp: "14:32",
    isOwn: false
  },
  {
    id: "2",
    sender: "me",
    content: "Merhaba! İyiyim, sen nasılsın?",
    timestamp: "14:33",
    isOwn: true
  },
  {
    id: "3",
    sender: "ahmet.yilmaz",
    content: "Ben de iyiyim, teşekkürler! Bugün ne yapıyorsun?",
    timestamp: "14:34",
    isOwn: false
  },
  {
    id: "4",
    sender: "me",
    content: "Yeni projeler üzerinde çalışıyorum. Sen ne yapıyorsun?",
    timestamp: "14:35",
    isOwn: true
  }
];

export const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      setNewMessage("");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Conversations List */}
        <Card className="md:col-span-1">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Mesajlar</h2>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <ScrollArea className="h-full">
            <div className="p-2">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`
                    w-full p-3 rounded-lg text-left hover:bg-muted transition-colors
                    ${selectedConversation.id === conversation.id ? 'bg-muted' : ''}
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conversation.user.avatar} alt={conversation.user.username} />
                        <AvatarFallback>{conversation.user.username[0].toUpperCase()}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium truncate">{conversation.user.username}</span>
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground truncate">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unread > 0 && (
                          <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Chat Window */}
        <Card className="md:col-span-2 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={selectedConversation.user.avatar} alt={selectedConversation.user.username} />
                <AvatarFallback>{selectedConversation.user.username[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{selectedConversation.user.username}</div>
                <div className="text-sm text-muted-foreground">
                  {selectedConversation.online ? "Çevrimiçi" : "Son görülme 1s önce"}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`
                      max-w-xs lg:max-w-md px-4 py-2 rounded-2xl
                      ${message.isOwn 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                      }
                    `}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Image className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
              </Button>
              <div className="flex-1 flex items-center space-x-2">
                <Input
                  placeholder="Mesaj yaz..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button onClick={sendMessage} size="sm" disabled={!newMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};