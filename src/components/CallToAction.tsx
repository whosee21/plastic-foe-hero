import { useState } from 'react';
import { Mail, Facebook, Twitter, Instagram, Share2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Welcome to the movement!",
        description: "You'll receive updates on how to make a bigger impact.",
      });
      setEmail('');
    }
  };

  const shareOnSocial = (platform: string) => {
    const url = window.location.href;
    const text = "Join me in fighting plastic pollution! Together we can stop the plastic crisis and protect our planet. 🌍";
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing, so we'll copy to clipboard
        navigator.clipboard.writeText(`${text} ${url}`);
        toast({
          title: "Link copied!",
          description: "Share this on Instagram to spread awareness.",
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Share this page to spread awareness about plastic pollution.",
    });
  };

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            The Time for Action is Now
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-up">
            Every minute we delay, 1 million more plastic bottles enter our environment. 
            Join thousands of Filipinos taking action against plastic pollution.
          </p>

          {/* Email Signup */}
          <div className="mb-12 animate-scale-in">
            <h3 className="text-2xl font-bold mb-6">
              Get Action Updates & Resources
            </h3>
            
            {!isSubscribed ? (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
                <Button type="submit" variant="action" size="lg">
                  Join Movement
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-green-300">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">You're part of the movement!</span>
              </div>
            )}
            
            <p className="text-sm opacity-70 mt-4">
              Get weekly action tips, local events, and impact updates. Unsubscribe anytime.
            </p>
          </div>

          {/* Social Sharing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Spread the Word
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Share this page to multiply our impact. Every share could inspire someone to join the fight.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => shareOnSocial('facebook')}
                variant="outline-hero"
                size="lg"
                className="flex items-center space-x-2"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </Button>
              
              <Button
                onClick={() => shareOnSocial('twitter')}
                variant="outline-hero"
                size="lg"
                className="flex items-center space-x-2"
              >
                <Twitter className="w-5 h-5" />
                <span>X (Twitter)</span>
              </Button>
              
              <Button
                onClick={() => shareOnSocial('instagram')}
                variant="outline-hero"
                size="lg"
                className="flex items-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </Button>
              
              <Button
                onClick={copyLink}
                variant="outline-hero"
                size="lg"
                className="flex items-center space-x-2"
              >
                <Share2 className="w-5 h-5" />
                <span>Copy Link</span>
              </Button>
            </div>
          </div>

          {/* Action Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">2,847</div>
              <p className="text-sm opacity-80">People have committed to going plastic-free this month</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">156</div>
              <p className="text-sm opacity-80">Community cleanup events organized this year</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">89%</div>
              <p className="text-sm opacity-80">Reduction in plastic use among committed participants</p>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Your Planet Needs You
            </h3>
            <p className="text-lg opacity-90 mb-8">
              Future generations will judge us by the actions we take today. 
              Be part of the solution, not the pollution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="action" size="lg" className="text-lg px-8 py-6">
                <Mail className="w-5 h-5 mr-2" />
                Contact Local Officials
              </Button>
              <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6">
                Find Local Groups
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};