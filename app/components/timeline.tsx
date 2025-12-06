"use client";

import { useState } from "react";
import { timelineData, type TimelineItem } from "@/data/portfolio-data";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
    itemIndex: number;
    imageIndex: number;
    totalImages: number;
  } | null>(null);

  const handleClick = (index: number) => {
    const currentScrollY = window.scrollY;
    setExpandedIndex(expandedIndex === index ? null : index);
    requestAnimationFrame(() => {
      window.scrollTo(0, currentScrollY);
    });
  };

  const nextImage = (itemIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [itemIndex]: ((prev[itemIndex] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (itemIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [itemIndex]:
        ((prev[itemIndex] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const getCurrentImageIndex = (itemIndex: number) => {
    return currentImageIndex[itemIndex] || 0;
  };

  const openModal = (itemIndex: number, imageIndex: number, images: TimelineItem['richContent']['images']) => {
    if (!images || images.length === 0) return;
    setModalImage({
      ...images[imageIndex],
      itemIndex,
      imageIndex,
      totalImages: images.length,
    });
  };

  const nextModalImage = () => {
    if (!modalImage) return;
    const item = timelineData[modalImage.itemIndex];
    const images = item.richContent.images;
    if (!images) return;
    
    const newIndex = (modalImage.imageIndex + 1) % images.length;
    setModalImage({
      ...images[newIndex],
      itemIndex: modalImage.itemIndex,
      imageIndex: newIndex,
      totalImages: images.length,
    });
  };

  const prevModalImage = () => {
    if (!modalImage) return;
    const item = timelineData[modalImage.itemIndex];
    const images = item.richContent.images;
    if (!images) return;
    
    const newIndex = (modalImage.imageIndex - 1 + images.length) % images.length;
    setModalImage({
      ...images[newIndex],
      itemIndex: modalImage.itemIndex,
      imageIndex: newIndex,
      totalImages: images.length,
    });
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto py-12">
        <div className="space-y-0">
          {timelineData.map((item, index) => {
            const hasMultipleImages = item.richContent.images && item.richContent.images.length > 1;
            const images = item.richContent.images || [];
            const currentIdx = getCurrentImageIndex(index);

            return (
              <div key={index}>
                {/* Dot at the top */}
                <div className="relative flex justify-center">
                  <div className="w-6 h-6 bg-dot-bg rounded-full border-4 border-dot-border shadow-[1px_6px_5px_rgba(0,0,0,0.18)]" />
                </div>

                {/* Content */}
                <div className="text-center transition-all duration-300 flex flex-col items-center">
                  <div
                    className="pt-6 pb-1 cursor-pointer "
                    onClick={() => handleClick(index)}
                  >
                    {/* Date */}
                    <div className="text-2xl text-date-text mb-2 px-4 relative">
                      {item.date}
                    </div>

                    {/* Title */}
                    <div className="text-4xl text-title-text px-4 relative">
                      {item.title}
                    </div>
                  </div>

                  {/* Details (expandable) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedIndex === index
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-portfolio-text max-w-2xl mx-auto px-8 pb-6 text-left relative">
                      <div className="space-y-4">
                        {/* Description */}
                        {item.richContent.description && (
                          <p className="text-portfolio-text">
                            {item.richContent.description}
                          </p>
                        )}

                        {/* Bullet Points */}
                        {item.richContent.bullets && (
                          <ul className="list-disc list-inside space-y-2 text-portfolio-text">
                            {item.richContent.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        )}

                        {/* Technologies */}
                        {item.richContent.technologies && (
                          <div>
                            <p className="font-semibold mb-2">Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {item.richContent.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-technologies-btn text-technologies-btn-font rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Links */}
                        {item.richContent.links && (
                          <div className="flex flex-wrap justify-center gap-3 mt-4">
                            {item.richContent.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text px-4 py-2 font-medium rounded-lg transition-colors duration-200 whitespace-nowrap flex items-center justify-center gap-4"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {link.text}
                              </a>
                            ))}
                          </div>
                        )}

                        {/* Images - Carousel or Single */}
                        {images.length > 0 && (
                          <div className="space-y-4 mt-4">
                            <div className="space-y-2">
                              <div
                                className={`relative w-full rounded-lg overflow-hidden h-[500px] ${
                                  hasMultipleImages ? "group" : ""
                                }`}
                              >
                                <div
                                  className="cursor-pointer flex items-center justify-center w-full h-full"
                                  onClick={() =>
                                    openModal(index, currentIdx, images)
                                  }
                                >
                                  <Image
                                    src={images[currentIdx].src}
                                    alt={images[currentIdx].alt}
                                    width={800}
                                    height={600}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>

                                {/* Carousel Controls - only show if multiple images */}
                                {hasMultipleImages && (
                                  <>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage(index, images.length);
                                      }}
                                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                      aria-label="Previous image"
                                    >
                                      <ChevronLeft className="w-6 h-6" />
                                    </button>

                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage(index, images.length);
                                      }}
                                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                      aria-label="Next image"
                                    >
                                      <ChevronRight className="w-6 h-6" />
                                    </button>

                                    {/* Image indicator dots */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                      {images.map((_, i) => (
                                        <button
                                          key={i}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex((prev) => ({
                                              ...prev,
                                              [index]: i,
                                            }));
                                          }}
                                          className={`w-2 h-2 rounded-full transition-all ${
                                            currentIdx === i
                                              ? "bg-white w-6"
                                              : "bg-white/50"
                                          }`}
                                          aria-label={`Go to image ${i + 1}`}
                                        />
                                      ))}
                                    </div>
                                  </>
                                )}
                              </div>

                              {/* Caption */}
                              {images[currentIdx]?.caption && (
                                <p className="text-sm text-portfolio-text text-center">
                                  {images[currentIdx].caption}
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Line connecting to next dot */}
                {index < timelineData.length - 1 && (
                  <div className="relative flex justify-center py-2">
                    <div className="w-0.5 bg-line-bg h-8" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for full-size image */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons - only show if multiple images */}
          {modalImage.totalImages > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevModalImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextModalImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm z-10">
                {modalImage.imageIndex + 1} / {modalImage.totalImages}
              </div>
            </>
          )}

          <div className="max-w-7xl max-h-[90vh] flex flex-col items-center">
            <div className="relative">
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                width={1920}
                height={1080}
                className="max-h-[85vh] w-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            {modalImage.caption && (
              <p className="text-white text-center mt-4 text-lg">
                {modalImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}