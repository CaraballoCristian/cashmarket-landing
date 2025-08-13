/* Component Ready */

// Hooks
import { useState } from "react";
// UI
import { Video } from "lucide-react";
import FooterDisclaimer from "../ui/footerDisclaimer";
import CtaFeedback from "../ui/ctaFeedback";
import ButtonForm from "../ui/button.jsx";

export default function WatchDemoContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleVideoLoad = () => setIsVideoLoading(false);

  /* Fake Interactions */
  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full md:min-w-[600px] lg:min-w-[800px] flex flex-col gap-6">
      {/* Header */}
      <div className="text-center">
        {/* Green text */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Video className="text-accent dark:text-accent-dark" size={24} />
          <span className="font-semibold text-lg text-accent dark:text-accent-dark ">
            Platform Demo
          </span>
        </div>
        {/* Title */}
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">
          Watch the Demo
        </h2>
        {/* Bottom Line */}
        <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto" />
      </div>

      {/* Video Container */}
      <div className="relative">
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-bg dark:bg-bg-dark border-2 border-bg dark:border-bg-dark">
          {/* Loading state */}
          {isVideoLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-bg dark:bg-bg-dark">
              <div className="flex flex-col items-center gap-3">
                {/* Loader */}
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-muted dark:text-muted-dark">
                  Loading demo...
                </p>
              </div>
            </div>
          )}

          {/* YouTube Video - Never Gonna Give You Up */}
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Platform Demo"
            allowFullScreen
            onLoad={handleVideoLoad}
            className="w-full h-full border-0"
          />
        </div>
      </div>

      {/* CTA */}
      {!isSubmitted ? (
        /* CTA Waiting State */
        <div className="rounded-xl p-4 border border-accent/20 dark:border-accent-dark/20 bg-gradient-to-r from-accent/20 to-primary/20 dark:from-accent-dark/20 dark:to-primary-dark/20">
          <div className="text-center">
            {/* CTA Text */}
            <p className="font-semibold mb-2 text-text dark:text-text-dark">
              Ready to try it yourself?
            </p>

            {/* CTA Button */}
            <div className="max-w-[300px] mx-auto">
              <ButtonForm
                textValue={"Get Early Access"}
                isLoading={isLoading}
                loadingValue={"joining waitlist..."}
                handler={handleSubmit}
              />
            </div>
          </div>
        </div>
      ) : (
        /* CTA Feedback State */
        <CtaFeedback
          title={"✨ You're in!"}
          subtitle={"Check your email for next steps"}
        />
      )}

      {/* Footer Disclaimer */}
      <FooterDisclaimer msg="This is a visual prototype. The video is for demo purposes. No data is being submitted" />
    </div>
  );
}
