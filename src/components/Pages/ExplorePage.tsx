import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const exploreData = [
  { id: "1", image: "/placeholder.svg", likes: 1234 },
  { id: "2", image: "/placeholder.svg", likes: 856 },
  { id: "3", image: "/placeholder.svg", likes: 2341 },
  { id: "4", image: "/placeholder.svg", likes: 445 },
  { id: "5", image: "/placeholder.svg", likes: 1567 },
  { id: "6", image: "/placeholder.svg", likes: 789 },
  { id: "7", image: "/placeholder.svg", likes: 3456 },
  { id: "8", image: "/placeholder.svg", likes: 234 },
  { id: "9", image: "/placeholder.svg", likes: 1890 },
];

export const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1">
        {exploreData.map((item, index) => (
          <Card
            key={item.id}
            className={`
              relative aspect-square overflow-hidden cursor-pointer border-0 rounded-none
              ${index === 0 ? "col-span-2 row-span-2" : ""}
            `}
          >
            <img
              src={item.image}
              alt="Explore post"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1">
                <span className="text-sm font-semibold">{item.likes.toLocaleString()}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};