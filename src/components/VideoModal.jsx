import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle2 } from 'lucide-react';

export default function VideoModal({ project, isOpen, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && isOpen && project?.type === 'video') {
        e.preventDefault();
        togglePlay();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, project]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: mute and play
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => setIsPlaying(false));
        }
      });
      setIsPlaying(true);
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current && duration) {
      videoRef.current.currentTime = pos * duration;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#121212] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8FF3E]">
                {project.category}
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs font-mono text-[#969696]">
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-[#969696] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-6 md:p-8 space-y-6">
            {/* Media Area */}
            {project.type === 'video' ? (
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden group border border-white/10">
                <video
                  ref={videoRef}
                  src={project.videoSrc}
                  poster={project.thumbnail}
                  onTimeUpdate={handleTimeUpdate}
                  onWaiting={() => setIsBuffering(true)}
                  onPlaying={() => setIsBuffering(false)}
                  onEnded={() => setIsPlaying(false)}
                  playsInline
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={togglePlay}
                />

                {/* Custom Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-200">
                  {/* Seek Bar */}
                  <div
                    onClick={handleSeek}
                    className="w-full h-1.5 bg-white/20 hover:h-2 transition-all cursor-pointer rounded-full mb-3 relative overflow-hidden"
                  >
                    <div
                      className="h-full bg-[#D8FF3E]"
                      style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-white text-xs font-mono">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={togglePlay}
                        className="text-white hover:text-[#D8FF3E] transition-colors p-1"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="text-white hover:text-[#D8FF3E] transition-colors p-1"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>

                      <span className="text-[#969696]">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline text-[#D8FF3E]">HD 1080P MASTER</span>
                      <button
                        onClick={toggleFullscreen}
                        className="text-white hover:text-[#D8FF3E] transition-colors p-1"
                        aria-label="Fullscreen"
                      >
                        <Maximize2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-mono text-[#D8FF3E] uppercase tracking-wider mb-1">
                    Organic Performance Case Study
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            )}

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {project.title}
                </h2>
                <p className="text-[#969696] text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#D8FF3E] uppercase tracking-wider">
                      The Objective
                    </span>
                    <p className="text-xs text-[#969696] leading-relaxed">
                      {project.challenge || 'Elevate visual engagement and market narrative clarity.'}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#D8FF3E] uppercase tracking-wider">
                      Strategic Solution
                    </span>
                    <p className="text-xs text-[#969696] leading-relaxed">
                      {project.solution || 'Engineered bespoke pacing, color grading curves, and targeted retention hooks.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-4 bg-[#181818] p-5 rounded-lg border border-white/10">
                <div>
                  <span className="text-[11px] font-mono text-[#969696] uppercase block mb-1">
                    Client & Scope
                  </span>
                  <p className="text-sm font-medium text-white">{project.client}</p>
                  <p className="text-xs text-[#969696]">{project.role}</p>
                </div>

                {project.stats && (
                  <div className="border-t border-white/10 pt-3 space-y-2">
                    <span className="text-[11px] font-mono text-[#D8FF3E] uppercase block">
                      Key Highlights (Demo Metrics)
                    </span>
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between items-baseline text-xs">
                        <span className="text-[#969696]">{stat.label}</span>
                        <span className="font-mono font-bold text-white tabular-nums">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-white/10 pt-3">
                  <span className="text-[11px] font-mono text-[#969696] uppercase block mb-2">
                    Deliverables
                  </span>
                  <div className="space-y-1.5">
                    {(project.deliverables || ['4K Master Cut', 'Social Teasers']).map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#F5F5F0]">
                        <CheckCircle2 size={13} className="text-[#D8FF3E] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
