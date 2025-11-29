// A self-contained procedural audio engine using Web Audio API
// No external assets required.

class SoundManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private ambientOscillators: OscillatorNode[] = [];

  constructor() {
    // Singleton instance
  }

  // Initialize the Audio Context (must be called after user interaction)
  init() {
    if (this.ctx) return;
    
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    this.ctx = new AudioContextClass();
    
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.3; // Master volume
    this.masterGain.connect(this.ctx.destination);
    
    this.startAmbience();
  }

  private startAmbience() {
    if (!this.ctx || !this.masterGain) return;

    // Create a deep space drone (Binaural Beats style)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const ambientGain = this.ctx.createGain();

    // Low frequencies for "Space Hum"
    osc1.type = 'sine';
    osc1.frequency.value = 50; 
    
    osc2.type = 'triangle';
    osc2.frequency.value = 52; // Slight detune for oscillation

    // Filter out high pitch sharpness
    filter.type = 'lowpass';
    filter.frequency.value = 200;

    ambientGain.gain.value = 0.15; // Keep background quiet

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(this.masterGain);

    osc1.start();
    osc2.start();
    
    this.ambientOscillators.push(osc1, osc2);
  }

  // High-tech chirp for hover events
  playHover() {
    // Hover cannot initialize audio context in most browsers, 
    // so we only play if already initialized
    if (!this.ctx || !this.masterGain) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(this.masterGain);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  // Satisfying "click" / "engage" sound
  playClick() {
    // Auto-initialize on first click if needed
    if (!this.ctx) this.init();
    
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // Quick pitch drop for a "thud" or "switch" feel
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(this.masterGain);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  // NEW: A majestic "Reverbed Ting" for special buttons
  playReverbTing() {
    // Auto-initialize on first click if needed
    if (!this.ctx) this.init();

    if (!this.ctx || !this.masterGain) return;

    const t = this.ctx.currentTime;
    
    // 1. The Source (Crystal Bell)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // High C7 note, pure sine for that "ting"
    osc.type = 'sine';
    osc.frequency.setValueAtTime(2093, t); 
    
    // Envelope: Instant attack, long exponential release
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 2.0);
    
    osc.connect(gain);

    // 2. The Reverb (Delay Network)
    // We create a feedback loop to simulate echo/space
    const delay = this.ctx.createDelay();
    const feedback = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    delay.delayTime.value = 0.2; // 200ms echo
    feedback.gain.value = 0.4; // How much sound repeats
    filter.type = 'lowpass';
    filter.frequency.value = 1500; // Dampen repeats so they sound distant
    
    // Signal routing: Gain -> Delay -> Feedback -> Filter -> Delay
    gain.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay); // The Loop
    delay.connect(filter);
    filter.connect(this.masterGain);

    // Also connect dry signal to master
    gain.connect(this.masterGain);
    
    osc.start(t);
    osc.stop(t + 2.5);
  }
}

export const soundManager = new SoundManager();