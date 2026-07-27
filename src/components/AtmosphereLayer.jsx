export default function AtmosphereLayer() {
  return (
    <div className="fixed inset-0 -z-[5] overflow-hidden pointer-events-none">
      {/* nebula clouds */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-photon/20 blur-[120px] animate-float" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-signal/15 blur-[140px] animate-float-delay" />
      <div className="absolute top-[30%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-ion/10 blur-[100px] animate-pulse-slow" />

      {/* aurora glow band */}
      <div
        className="absolute top-0 left-0 right-0 h-[40vh] opacity-30"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,229,255,0.18) 0%, rgba(124,92,255,0.1) 40%, transparent 100%)',
        }}
      />

      {/* light rays */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          background:
            'conic-gradient(from 210deg at 70% 20%, transparent 0deg, rgba(0,229,255,0.15) 8deg, transparent 22deg, transparent 340deg)',
        }}
      />

      {/* perspective grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[45vh] [perspective:600px] opacity-40">
        <div
          className="absolute inset-0 hud-grid [transform:rotateX(70deg)] origin-bottom"
          style={{ maskImage: 'linear-gradient(to top, black, transparent)' }}
        />
      </div>

      {/* shooting stars */}
      <span className="shooting-star" style={{ top: '15%', left: '10%', animationDelay: '0s' }} />
      <span className="shooting-star" style={{ top: '35%', left: '65%', animationDelay: '3.2s' }} />
      <span className="shooting-star" style={{ top: '60%', left: '25%', animationDelay: '6.4s' }} />

      {/* twinkling micro stars (css, layered above the three.js starfield) */}
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-core animate-twinkle"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 10) * 0.3}s`,
          }}
        />
      ))}

      <style>{`
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(90deg, #fff, transparent);
          border-radius: 50%;
          box-shadow: 0 0 6px 1px #fff;
          animation: shoot 7s linear infinite;
          opacity: 0;
        }
        @keyframes shoot {
          0% { opacity: 0; transform: translate(0,0) rotate(35deg) scaleX(1); }
          3% { opacity: 1; }
          12% { opacity: 0; transform: translate(340px, 220px) rotate(35deg) scaleX(1); }
          100% { opacity: 0; }
        }
        .shooting-star::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 90px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.9), transparent);
          transform: translateX(-90px);
        }
      `}</style>
    </div>
  )
}
