import { Stories } from "../Feed/Stories";
import { Post } from "../Feed/Post";

const postsData = [
  {
    id: "1",
    user: {
      username: "ahmet.yilmaz",
      avatar: "/placeholder.svg",
      verified: true
    },
    image: "/placeholder.svg",
    caption: "İstanbul'dan güzel bir gün batımı 🌅 #istanbul #sunset #photography",
    likes: 1247,
    comments: 34,
    timestamp: "2 saat önce",
    location: "İstanbul, Türkiye"
  },
  {
    id: "2",
    user: {
      username: "zeynep_k",
      avatar: "/placeholder.svg"
    },
    image: "/placeholder.svg",
    caption: "Bugünün motivasyonu ✨ Hayallerini gerçeğe dönüştür! #motivation #goals #lifestyle",
    likes: 892,
    comments: 12,
    timestamp: "4 saat önce"
  },
  {
    id: "3",
    user: {
      username: "mehmet.dev",
      avatar: "/placeholder.svg",
      verified: true
    },
    image: "/placeholder.svg",
    caption: "Yeni projem tamamlandı! React ve TypeScript kullanarak geliştirdim 🚀 #coding #react #typescript #webdev",
    likes: 2103,
    comments: 67,
    timestamp: "6 saat önce"
  }
];

export const HomePage = () => {
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <Stories />
      
      <div className="space-y-8">
        {postsData.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};