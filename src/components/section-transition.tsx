"use client";

export default function SectionTransition() {
  return (
    <div className="relative h-24 md:h-32 -mb-12 md:-mb-16 z-10">
      {/* Gradient blend from background to features bg */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #FAFAFA 0%, #F3F1EE 100%)",
        }}
      />

      {/* Blur overlay for soft transition */}
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(243, 241, 238, 0.5) 100%)",
        }}
      />
    </div>
  );
}
