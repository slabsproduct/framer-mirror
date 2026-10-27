import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface FlipCardProps {
  frontImage: string;
  title: string;
  backTitle?: string;
  backText: React.ReactNode;
  actionButton?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "wine" | "olive" | "dark";
  };
}

export const FlipCard: React.FC<FlipCardProps> = ({
  frontImage,
  title,
  backTitle,
  backText,
  actionButton,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full max-w-[340px] h-[440px] perspective-1000 cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative w-full h-full transform-style-3d transition-transform duration-700 ease-out"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* FRONT: Polaroid Style Card */}
          <div className="absolute inset-0 backface-hidden bg-white rounded-[20px] p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-black/5 flex flex-col justify-between">
            <div className="relative w-full h-[340px] rounded-[14px] overflow-hidden bg-[#E5E3DF]">
              <img
                src={frontImage}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-manrope font-semibold text-[#363B1F]">
                Tocar para leer
              </div>
            </div>
            <div className="h-[60px] flex items-center justify-center">
              <h3 className="font-melagu text-xl text-[#151619] tracking-normal text-center">
                {title}
              </h3>
            </div>
          </div>

          {/* BACK: Detailed Editorial Content */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-[20px] p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col justify-between text-left overflow-y-auto">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-manrope font-bold text-[#6E0D23]">
                  {backTitle || title}
                </span>
                <span className="text-[10px] text-[#626262] font-manrope">Girar ↻</span>
              </div>
              <div className="text-xs sm:text-[13px] font-enoway text-[#333333] leading-relaxed space-y-2.5">
                {backText}
              </div>
            </div>

            {actionButton && (
              <div className="pt-4 mt-2 border-t border-black/5">
                {actionButton.href ? (
                  <a
                    href={actionButton.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`block w-full py-2.5 px-4 rounded-full text-center text-xs font-manrope font-bold tracking-wide transition-all shadow-xs ${
                      actionButton.variant === "wine"
                        ? "border border-[#6E0D23] text-[#6E0D23] hover:bg-[#6E0D23] hover:text-white"
                        : actionButton.variant === "dark"
                        ? "border border-[#363B1F] text-[#363B1F] hover:bg-[#363B1F] hover:text-white"
                        : "bg-[#363B1F] text-white hover:bg-[#272B15]"
                    }`}
                  >
                    {actionButton.label}
                  </a>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      actionButton.onClick?.();
                    }}
                    className="w-full py-2.5 px-4 rounded-full text-center text-xs font-manrope font-bold tracking-wide bg-[#363B1F] text-white hover:bg-[#272B15] transition-all cursor-pointer shadow-xs"
                  >
                    {actionButton.label}
                  </button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
