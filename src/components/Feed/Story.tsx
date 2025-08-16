import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface StoryProps {
  user: {
    username: string;
    avatar: string;
  };
  hasNewStory?: boolean;
  isViewed?: boolean;
  isOwnStory?: boolean;
}

export const Story = ({ user, hasNewStory = true, isViewed = false, isOwnStory = false }: StoryProps) => {
  return (
    <div className="flex flex-col items-center space-y-1 cursor-pointer">
      <div
        className={cn(
          "p-0.5 rounded-full transition-all",
          hasNewStory && !isViewed 
            ? "bg-gradient-vibrant" 
            : isOwnStory 
            ? "bg-muted" 
            : "bg-muted/50"
        )}
      >
        <div className="p-0.5 bg-background rounded-full">
          <Avatar className="h-14 w-14">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          {isOwnStory && (
            <div className="absolute bottom-0 right-0 h-4 w-4 bg-primary rounded-full border-2 border-background flex items-center justify-center">
              <span className="text-xs text-primary-foreground">+</span>
            </div>
          )}
        </div>
      </div>
      <span className="text-xs text-center max-w-[70px] truncate">
        {isOwnStory ? "Hikayen" : user.username}
      </span>
    </div>
  );
};