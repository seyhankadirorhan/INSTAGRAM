import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, UserPlus, AtSign } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const notifications = [
  {
    id: "1",
    type: "like",
    user: { username: "ahmet.yilmaz", avatar: "/placeholder.svg" },
    content: "gönderini beğendi",
    postImage: "/placeholder.svg",
    timestamp: "2dk",
    read: false
  },
  {
    id: "2",
    type: "comment",
    user: { username: "zeynep_k", avatar: "/placeholder.svg" },
    content: "gönderine yorum yaptı: \"Harika fotoğraf!\"",
    postImage: "/placeholder.svg",
    timestamp: "5dk",
    read: false
  },
  {
    id: "3",
    type: "follow",
    user: { username: "mehmet.dev", avatar: "/placeholder.svg" },
    content: "seni takip etmeye başladı",
    timestamp: "10dk",
    read: false
  },
  {
    id: "4",
    type: "mention",
    user: { username: "elif.photo", avatar: "/placeholder.svg" },
    content: "seni bir gönderide etiketledi",
    postImage: "/placeholder.svg",
    timestamp: "1s",
    read: true
  },
  {
    id: "5",
    type: "like",
    user: { username: "can_music", avatar: "/placeholder.svg" },
    content: "gönderini beğendi",
    postImage: "/placeholder.svg",
    timestamp: "2s",
    read: true
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "like":
      return <Heart className="h-8 w-8 text-red-500 fill-red-500" />;
    case "comment":
      return <MessageCircle className="h-8 w-8 text-blue-500" />;
    case "follow":
      return <UserPlus className="h-8 w-8 text-green-500" />;
    case "mention":
      return <AtSign className="h-8 w-8 text-purple-500" />;
    default:
      return <Heart className="h-8 w-8 text-muted-foreground" />;
  }
};

export const NotificationsPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Bildirimler</h2>
            <Button variant="ghost" size="sm">
              Tümünü okundu işaretle
            </Button>
          </div>
        </div>
        
        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="divide-y">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`
                  p-4 hover:bg-muted/50 transition-colors cursor-pointer
                  ${!notification.read ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''}
                `}
              >
                <div className="flex items-center space-x-3">
                  {/* User Avatar with notification icon overlay */}
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={notification.user.avatar} alt={notification.user.username} />
                      <AvatarFallback>{notification.user.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold">{notification.user.username}</span>
                          {" "}
                          <span className="text-muted-foreground">{notification.content}</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.timestamp}
                        </p>
                      </div>
                      
                      {/* Post thumbnail if applicable */}
                      {notification.postImage && (
                        <div className="ml-3 flex-shrink-0">
                          <img
                            src={notification.postImage}
                            alt="Post"
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Follow button for follow notifications */}
                  {notification.type === "follow" && (
                    <Button variant="outline" size="sm">
                      Takip Et
                    </Button>
                  )}

                  {/* Unread indicator */}
                  {!notification.read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};