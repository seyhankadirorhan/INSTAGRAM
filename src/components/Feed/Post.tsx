import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostProps {
  id: string;
  user: {
    username: string;
    avatar: string;
    verified?: boolean;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  location?: string;
}

export const Post = ({ user, image, caption, likes, comments, timestamp, location }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="w-full max-w-lg mx-auto overflow-hidden border-0 shadow-none">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-semibold">{user.username}</span>
              {user.verified && (
                <span className="text-blue-500 text-xs">✓</span>
              )}
            </div>
            {location && (
              <span className="text-xs text-muted-foreground">{location}</span>
            )}
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Image */}
      <div className="relative aspect-square">
        <img
          src={image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className="p-0 h-auto hover:bg-transparent"
            >
              <Heart
                className={cn(
                  "h-6 w-6 transition-colors",
                  isLiked ? "fill-red-500 text-red-500" : "text-foreground"
                )}
              />
            </Button>
            <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
              <Send className="h-6 w-6" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSaved(!isSaved)}
            className="p-0 h-auto hover:bg-transparent"
          >
            <Bookmark
              className={cn(
                "h-6 w-6 transition-colors",
                isSaved ? "fill-foreground" : "text-foreground"
              )}
            />
          </Button>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <span className="text-sm font-semibold">{likesCount.toLocaleString()} beğeni</span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="text-sm">
            <span className="font-semibold mr-2">{user.username}</span>
            {caption}
          </span>
        </div>

        {/* Comments */}
        {comments > 0 && (
          <button className="text-sm text-muted-foreground mb-2">
            {comments} yorumun tümünü gör
          </button>
        )}

        {/* Timestamp */}
        <div className="text-xs text-muted-foreground uppercase">
          {timestamp}
        </div>
      </div>
    </Card>
  );
};