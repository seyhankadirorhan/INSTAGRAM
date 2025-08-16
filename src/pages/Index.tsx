import { useState } from "react";
import { InstagramLayout } from "@/components/Layout/InstagramLayout";
import { HomePage } from "@/components/Pages/HomePage";
import { ExplorePage } from "@/components/Pages/ExplorePage";
import { CreatePage } from "@/components/Pages/CreatePage";
import { NotificationsPage } from "@/components/Pages/NotificationsPage";
import { MessagesPage } from "@/components/Pages/MessagesPage";
import { ProfilePage } from "@/components/Pages/ProfilePage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "explore":
        return <ExplorePage />;
      case "create":
        return <CreatePage />;
      case "notifications":
        return <NotificationsPage />;
      case "messages":
        return <MessagesPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <InstagramLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </InstagramLayout>
  );
};

export default Index;
