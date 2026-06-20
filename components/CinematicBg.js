'use client';

export default function CinematicBg() {
  return (
    <div className="cbg" aria-hidden="true">
      {/* Animated gradient orbs — projector light vibes */}
      <div className="cbg-orb cbg-orb-purple" />
      <div className="cbg-orb cbg-orb-teal"   />
      <div className="cbg-orb cbg-orb-blue"   />

      {/* Film strip edges */}
      <div className="cbg-strip cbg-strip-l">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="cbg-hole" />
        ))}
      </div>
      <div className="cbg-strip cbg-strip-r">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="cbg-hole" />
        ))}
      </div>

      {/* Film grain overlay */}
      <div className="cbg-grain" />

      {/* Edge vignette */}
      <div className="cbg-vignette" />
    </div>
  );
}
