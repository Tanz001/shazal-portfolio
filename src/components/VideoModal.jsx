import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle2 } from 'lucide-react';

export default function VideoModal({ project, isOpen, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
        className="fixed inset-0 z-[9999] bg-canvas/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-surface rounded-2xl border border-line overflow-hidden flex flex-col max-h-[92vh]"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-elevated/50">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-accent">
                {project.category}
              </span>
              <span className="text-muted/40">·</span>
              <span className="text-xs font-mono text-muted">{project.year}</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-muted hover:text-ink hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto p-6 md:p-8 space-y-6">
            {project.type === 'video' ? (
              <div className="relative aspect-video bg-canvas overflow-hidden group rounded-2xl border border-line">
                <video
                  ref={videoRef}
                  src={project.videoSrc}
                  poster={project.thumbnail}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  playsInline
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={togglePlay}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div
                    onClick={handleSeek}
                    className="w-full h-1.5 bg-white/20 hover:h-2 transition-all cursor-pointer mb-3 relative overflow-hidden"
                  >
                    <div
                      className="h-full bg-accent"
                      style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-ink text-xs font-mono">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={togglePlay}
                        className="hover:text-accent transition-colors p-1 cursor-pointer"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="hover:text-accent transition-colors p-1 cursor-pointer"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>
                      <span className="text-muted">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline text-accent">HD Master</span>
                      <button
                        onClick={toggleFullscreen}
                        className="hover:text-accent transition-colors p-1 cursor-pointer"
                        aria-label="Fullscreen"
                      >
                        <Maximize2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-line">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
                    Organic case study
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-ink">
                    {project.title}
                  </h3>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-2">
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
                  {project.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-line">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-accent uppercase tracking-wider">
                      Objective
                    </span>
                    <p className="text-xs text-muted leading-relaxed">
                      {project.challenge || 'Elevate engagement and narrative clarity.'}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-accent uppercase tracking-wider">
                      Solution
                    </span>
                    <p className="text-xs text-muted leading-relaxed">
                      {project.solution || 'Bespoke pacing, grade, and retention hooks.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 bg-elevated/50 p-5 rounded-2xl border border-line">
                <div>
                  <span className="text-[11px] font-mono text-muted uppercase block mb-1">
                    Client & scope
                  </span>
                  <p className="text-sm font-medium text-ink">{project.client}</p>
                  <p className="text-xs text-muted">{project.role}</p>
                </div>

                {project.stats && (
                  <div className="border-t border-line pt-3 space-y-2">
                    <span className="text-[11px] font-mono text-accent uppercase block">
                      Highlights
                    </span>
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between items-baseline text-xs">
                        <span className="text-muted">{stat.label}</span>
                        <span className="font-mono font-bold text-ink tabular-nums">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-line pt-3">
                  <span className="text-[11px] font-mono text-muted uppercase block mb-2">
                    Deliverables
                  </span>
                  <div className="space-y-1.5">
                    {(project.deliverables || ['4K Master Cut', 'Social Teasers']).map(
                      (del, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-ink">
                          <CheckCircle2 size={13} className="text-accent shrink-0" />
                          <span>{del}</span>
                        </div>
                      )
                    )}
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
