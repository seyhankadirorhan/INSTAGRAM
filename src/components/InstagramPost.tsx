import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Download, Instagram, Smartphone } from "lucide-react";

interface PostData {
  title: string;
  content: string;
  gradient: string;
  textColor: string;
}

const gradients = [
  { name: "Vibrant", class: "bg-gradient-vibrant", text: "text-white" },
  { name: "Primary", class: "bg-gradient-primary", text: "text-white" },
  { name: "Secondary", class: "bg-gradient-secondary", text: "text-white" },
  { name: "Accent", class: "bg-gradient-accent", text: "text-white" },
  { name: "Soft", class: "bg-gradient-soft", text: "text-foreground" },
];

const templates = [
  {
    title: "Yaratıcılığın gücü ✨",
    content: "Her gün yeni bir başlangıç\nHayallerini gerçeğe dönüştür\n#yaratıcılık #motivasyon"
  },
  {
    title: "Minimalist yaşam 🌿",
    content: "Az ama öz\nKaliteli anlar\nSade güzellik"
  },
  {
    title: "Başarı hikayesi 🚀",
    content: "Küçük adımlar\nBüyük hayaller\nSınırsız potansiyel"
  }
];

export const InstagramPost = () => {
  const [postData, setPostData] = useState<PostData>({
    title: "Yaratıcılığın gücü ✨",
    content: "Her gün yeni bir başlangıç\nHayallerini gerçeğe dönüştür\n#yaratıcılık #motivasyon",
    gradient: "bg-gradient-vibrant",
    textColor: "text-white"
  });

  const [format, setFormat] = useState<"feed" | "story">("feed");

  const handleGradientChange = (gradient: string, textColor: string) => {
    setPostData(prev => ({ ...prev, gradient, textColor }));
  };

  const handleTemplateSelect = (template: any) => {
    setPostData(prev => ({ ...prev, title: template.title, content: template.content }));
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-vibrant bg-clip-text text-transparent mb-4">
            Instagram Post Creator
          </h1>
          <p className="text-muted-foreground text-lg">
            Modern, minimal ve canlı Instagram içerikleri oluşturun
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">İçerik Düzenle</h2>
              
              {/* Format Selection */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Format</label>
                <div className="flex gap-2">
                  <Button
                    variant={format === "feed" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFormat("feed")}
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Feed (4:5)
                  </Button>
                  <Button
                    variant={format === "story" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFormat("story")}
                    className="flex items-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    Story (9:16)
                  </Button>
                </div>
              </div>

              {/* Title Input */}
              <div className="mb-4">
                <label className="text-sm font-medium mb-2 block">Başlık</label>
                <Input
                  value={postData.title}
                  onChange={(e) => setPostData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Başlığınızı yazın..."
                  className="text-lg font-semibold"
                />
              </div>

              {/* Content Input */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">İçerik</label>
                <Textarea
                  value={postData.content}
                  onChange={(e) => setPostData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="İçeriğinizi yazın..."
                  rows={4}
                />
              </div>

              {/* Gradient Selection */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Arkaplan</label>
                <div className="grid grid-cols-3 gap-2">
                  {gradients.map((gradient) => (
                    <button
                      key={gradient.name}
                      onClick={() => handleGradientChange(gradient.class, gradient.text)}
                      className={`
                        h-12 rounded-lg ${gradient.class} border-2 transition-all
                        ${postData.gradient === gradient.class ? 'border-primary scale-105' : 'border-transparent hover:scale-105'}
                      `}
                    >
                      <span className={`text-xs font-medium ${gradient.text}`}>
                        {gradient.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Templates */}
              <div>
                <label className="text-sm font-medium mb-2 block">Şablonlar</label>
                <div className="space-y-2">
                  {templates.map((template, index) => (
                    <button
                      key={index}
                      onClick={() => handleTemplateSelect(template)}
                      className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <div className="font-medium text-sm">{template.title}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {template.content.split('\n')[0]}...
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Önizleme</h2>
                <Button size="sm" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  İndir
                </Button>
              </div>

              {/* Post Preview */}
              <div className="flex justify-center">
                <div
                  className={`
                    ${format === "feed" ? "aspect-instagram-feed w-80" : "aspect-instagram-story w-60"}
                    ${postData.gradient} ${postData.textColor}
                    rounded-xl overflow-hidden shadow-2xl flex flex-col justify-center items-center p-6 relative
                  `}
                >
                  {/* Content */}
                  <div className="text-center space-y-4 max-w-full">
                    <h1 className={`
                      ${format === "feed" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}
                      font-bold leading-tight
                    `}>
                      {postData.title}
                    </h1>
                    
                    <div className={`
                      ${format === "feed" ? "text-base" : "text-sm"}
                      leading-relaxed opacity-90 whitespace-pre-line
                    `}>
                      {postData.content}
                    </div>
                  </div>

                  {/* Subtle branding */}
                  <div className="absolute bottom-4 right-4 opacity-30">
                    <Instagram className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Format Info */}
              <div className="mt-4 text-center">
                <Badge variant="secondary">
                  {format === "feed" ? "1080 × 1350" : "1080 × 1920"} piksel
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};