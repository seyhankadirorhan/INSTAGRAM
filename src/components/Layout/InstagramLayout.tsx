import { useState } from "react";
import { Home, Search, PlusSquare, Heart, User, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface InstagramLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const InstagramLayout = ({ children, currentPage, onPageChange }: InstagramLayoutProps) => {
  const [notifications, setNotifications] = useState(3);

  const navItems = [
    { id: "home", icon: Home, label: "Ana Sayfa" },
    { id: "explore", icon: Search, label: "Keşfet" },
    { id: "create", icon: PlusSquare, label: "Oluştur" },
    { id: "notifications", icon: Heart, label: "Bildirimler", badge: notifications },
    { id: "messages", icon: Send, label: "Mesajlar" },
    { id: "profile", icon: User, label: "Profil" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <h1 className="text-2xl font-bold bg-gradient-vibrant bg-clip-text text-transparent">
              Instagram
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* Search will be here for larger screens */}
            </div>
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={cn(
                      "relative p-2 rounded-lg transition-colors hover:bg-accent",
                      currentPage === item.id && "text-primary"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                    {item.badge && item.badge > 0 && (
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-xs text-destructive-foreground flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="grid grid-cols-5 h-16">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={cn(
                  "relative flex flex-col items-center justify-center space-y-1 transition-colors",
                  currentPage === item.id && "text-primary"
                )}
              >
                <Icon className="h-6 w-6" />
                {item.badge && item.badge > 0 && (
                  <span className="absolute top-2 right-1/2 translate-x-2 h-4 w-4 rounded-full bg-destructive text-xs text-destructive-foreground flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};