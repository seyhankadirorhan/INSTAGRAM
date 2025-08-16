import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Settings, Grid3X3, Bookmark, Tag, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const userPosts = [
  { id: "1", image: "/placeholder.svg", likes: 1234, comments: 45 },
  { id: "2", image: "/placeholder.svg", likes: 856, comments: 23 },
  { id: "3", image: "/placeholder.svg", likes: 2341, comments: 67 },
  { id: "4", image: "/placeholder.svg", likes: 445, comments: 12 },
  { id: "5", image: "/placeholder.svg", likes: 1567, comments: 34 },
  { id: "6", image: "/placeholder.svg", likes: 789, comments: 19 },
];

export const ProfilePage = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const user = {
    username: "senin_kullanici_adin",
    fullName: "Adın Soyadın",
    bio: "✨ Yaratıcı içerik üreticisi\n📸 Fotoğraf tutkunu\n🌍 İstanbul, Türkiye",
    avatar: "/placeholder.svg",
    posts: 127,
    followers: 2543,
    following: 891,
    verified: true
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Avatar */}
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback className="text-2xl">
              {user.fullName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>

          {/* Profile Info */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-semibold">{user.username}</h1>
                {user.verified && (
                  <Badge variant="secondary" className="text-xs">✓</Badge>
                )}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Profili Düzenle
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="font-semibold">{user.posts}</div>
                <div className="text-sm text-muted-foreground">gönderi</div>
              </div>
              <div className="text-center cursor-pointer">
                <div className="font-semibold">{user.followers.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">takipçi</div>
              </div>
              <div className="text-center cursor-pointer">
                <div className="font-semibold">{user.following}</div>
                <div className="text-sm text-muted-foreground">takip</div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className="font-semibold">{user.fullName}</div>
              <div className="text-sm whitespace-pre-line">{user.bio}</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts" className="flex items-center space-x-2">
            <Grid3X3 className="h-4 w-4" />
            <span className="hidden sm:inline">Gönderiler</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center space-x-2">
            <Bookmark className="h-4 w-4" />
            <span className="hidden sm:inline">Kaydedilenler</span>
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex items-center space-x-2">
            <Tag className="h-4 w-4" />
            <span className="hidden sm:inline">Etiketlenenler</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6">
          <div className="grid grid-cols-3 gap-1">
            {userPosts.map((post) => (
              <div
                key={post.id}
                className="relative aspect-square bg-muted cursor-pointer group overflow-hidden"
              >
                <img
                  src={post.image}
                  alt="User post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="text-white flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-5 w-5 fill-white" />
                      <span className="font-semibold">{post.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="text-center py-12">
            <Bookmark className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Henüz kaydettiğin gönderi yok</h3>
            <p className="text-muted-foreground">
              Kaydetmek istediğin gönderileri burada görebilirsin
            </p>
          </div>
        </TabsContent>

        <TabsContent value="tagged" className="mt-6">
          <div className="text-center py-12">
            <Tag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Etiketlendiğin gönderi yok</h3>
            <p className="text-muted-foreground">
              Fotoğraflarında etiketlendiğinde burada görünür
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};