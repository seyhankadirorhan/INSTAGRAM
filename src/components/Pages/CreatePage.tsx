import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Camera, Image as ImageIcon, Smartphone, Instagram } from "lucide-react";

interface PostData {
  image: string;
  caption: string;
  location: string;
}

const gradients = [
  { name: "Vibrant", class: "bg-gradient-vibrant" },
  { name: "Primary", class: "bg-gradient-primary" },
  { name: "Secondary", class: "bg-gradient-secondary" },
  { name: "Accent", class: "bg-gradient-accent" },
  { name: "Soft", class: "bg-gradient-soft" },
];

export const CreatePage = () => {
  const [step, setStep] = useState<"upload" | "edit" | "share">("upload");
  const [postData, setPostData] = useState<PostData>({
    image: "",
    caption: "",
    location: ""
  });
  const [selectedGradient, setSelectedGradient] = useState("bg-gradient-vibrant");

  const handleImageUpload = () => {
    // Simulate image upload
    setPostData(prev => ({ ...prev, image: "/placeholder.svg" }));
    setStep("edit");
  };

  const renderUploadStep = () => (
    <Card className="p-8 text-center">
      <div className="space-y-6">
        <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center">
          <Camera className="h-12 w-12 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-semibold">Yeni Gönderi Oluştur</h2>
        <p className="text-muted-foreground">
          Fotoğraf veya video paylaşmaya başla
        </p>
        <div className="space-y-3">
          <Button onClick={handleImageUpload} className="w-full" size="lg">
            <ImageIcon className="mr-2 h-4 w-4" />
            Galeriden Seç
          </Button>
          <Button variant="outline" className="w-full" size="lg">
            <Camera className="mr-2 h-4 w-4" />
            Fotoğraf Çek
          </Button>
        </div>
      </div>
    </Card>
  );

  const renderEditStep = () => (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Editor */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Düzenle</h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Açıklama</label>
            <Textarea
              placeholder="Açıklama yazın..."
              value={postData.caption}
              onChange={(e) => setPostData(prev => ({ ...prev, caption: e.target.value }))}
              rows={3}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Konum</label>
            <Input
              placeholder="Konum ekle..."
              value={postData.location}
              onChange={(e) => setPostData(prev => ({ ...prev, location: e.target.value }))}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Arkaplan Efekti</label>
            <div className="grid grid-cols-3 gap-2">
              {gradients.map((gradient) => (
                <button
                  key={gradient.name}
                  onClick={() => setSelectedGradient(gradient.class)}
                  className={`
                    h-10 rounded-lg ${gradient.class} border-2 transition-all
                    ${selectedGradient === gradient.class ? 'border-primary scale-105' : 'border-transparent hover:scale-105'}
                  `}
                >
                  <span className="text-xs font-medium text-white">
                    {gradient.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <Button onClick={() => setStep("share")} className="w-full" size="lg">
            Devam Et
          </Button>
        </div>
      </Card>

      {/* Preview */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Önizleme</h2>
        <div className="flex justify-center">
          <div className="aspect-square w-80 bg-muted rounded-lg overflow-hidden">
            <img
              src={postData.image}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Card>
    </div>
  );

  const renderShareStep = () => (
    <Card className="p-8 text-center max-w-md mx-auto">
      <div className="space-y-6">
        <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <Instagram className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold">Gönderin Paylaşıldı!</h2>
        <p className="text-muted-foreground">
          Gönderiniz başarıyla paylaşıldı ve takipçileriniz tarafından görülebilir.
        </p>
        <div className="space-y-3">
          <Button onClick={() => setStep("upload")} className="w-full" size="lg">
            Yeni Gönderi Oluştur
          </Button>
          <Button variant="outline" className="w-full" size="lg">
            Gönderimi Görüntüle
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {step === "upload" && renderUploadStep()}
      {step === "edit" && renderEditStep()}
      {step === "share" && renderShareStep()}
    </div>
  );
};