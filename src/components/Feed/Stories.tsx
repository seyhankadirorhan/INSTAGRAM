import { ScrollArea } from "@/components/ui/scroll-area";
import { Story } from "./Story";

const storiesData = [
  {
    user: { username: "senin_hikayen", avatar: "/placeholder.svg" },
    isOwnStory: true
  },
  {
    user: { username: "ahmet.yilmaz", avatar: "/placeholder.svg" },
    hasNewStory: true,
    isViewed: false
  },
  {
    user: { username: "zeynep_k", avatar: "/placeholder.svg" },
    hasNewStory: true,
    isViewed: false
  },
  {
    user: { username: "mehmet.dev", avatar: "/placeholder.svg" },
    hasNewStory: true,
    isViewed: true
  },
  {
    user: { username: "elif.photo", avatar: "/placeholder.svg" },
    hasNewStory: true,
    isViewed: false
  },
  {
    user: { username: "can_music", avatar: "/placeholder.svg" },
    hasNewStory: true,
    isViewed: true
  },
  {
    user: { username: "ayse.design", avatar: "/placeholder.svg" },
    hasNewStory: true,
    isViewed: false
  }
];

export const Stories = () => {
  return (
    <div className="border-b pb-4 mb-4">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 p-4">
          {storiesData.map((story, index) => (
            <Story
              key={index}
              user={story.user}
              hasNewStory={story.hasNewStory}
              isViewed={story.isViewed}
              isOwnStory={story.isOwnStory}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};