// DOM Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const muteBtn = document.getElementById('muteBtn');
const progressBar = document.getElementById('progressBar');
const sections = document.querySelectorAll('.demo-section');

// State variables
let isPlaying = false;
let currentSection = 0;
let hasAudio = false;
let simulatedTime = 0;
let timerInterval = null;

/**
 * Initialize the application
 */
function init() {
    console.log('🎬 Initializing presentation...');

    // Check if audio is available
    audioPlayer.addEventListener('loadedmetadata', () => {
        hasAudio = true;
        console.log('✅ Audio loaded successfully!');
        console.log(`📊 Duration: ${audioPlayer.duration.toFixed(2)} seconds`);
    });

    audioPlayer.addEventListener('canplay', () => {
        console.log('✅ Audio can start playing');
    });

    audioPlayer.addEventListener('error', (e) => {
        hasAudio = false;
        console.error('❌ Audio error:', audioPlayer.error);
        console.log('⚠️ Falling back to timer mode');
    });

    audioPlayer.addEventListener('loadstart', () => {
        console.log('📥 Started loading audio...');
    });

    audioPlayer.addEventListener('progress', () => {
        console.log('📊 Loading audio...');
    });

    audioPlayer.addEventListener('play', () => {
        console.log('▶️ Audio started playing');
    });

    audioPlayer.addEventListener('pause', () => {
        console.log('⏸️ Audio paused');
    });

    // Event listeners
    playBtn.addEventListener('click', togglePlay);
    muteBtn.addEventListener('click', toggleMute);
    audioPlayer.addEventListener('timeupdate', () => updateSection());
    audioPlayer.addEventListener('ended', onAudioEnded);

    // Keyboard controls
    document.addEventListener('keydown', handleKeyboard);

    // Activate first section
    sections[0].classList.add('active');

    // Auto-start after 1 second
    console.log('⏳ Auto-starting in 1 second...');
    setTimeout(() => {
        console.log('🚀 Auto-starting presentation...');
        togglePlay();
    }, 1000);
}

/**
 * Toggle play/pause
 */
function togglePlay() {
    if (isPlaying) {
        if (hasAudio) {
            audioPlayer.pause();
            console.log('⏸️ Pausing audio playback');
        } else {
            stopTimer();
            console.log('⏸️ Stopping timer');
        }
        playBtn.textContent = '▶';
        isPlaying = false;
    } else {
        if (hasAudio) {
            console.log('▶️ Attempting to play audio...');
            audioPlayer.play().catch(err => {
                console.error('❌ Audio play blocked by browser!', err);
                console.log('⚠️ This is usually due to browser autoplay policy');
                console.log('💡 Solution: Click the play button manually');
                console.log('🔄 Falling back to timer mode');
                hasAudio = false;
                startTimer();
            });
        } else {
            console.log('⏱️ Starting timer mode (no audio available)');
            startTimer();
        }
        playBtn.textContent = '⏸';
        isPlaying = true;
    }
}

/**
 * Toggle mute
 */
function toggleMute() {
    audioPlayer.muted = !audioPlayer.muted;
    muteBtn.textContent = audioPlayer.muted ? '🔇' : '🔊';
}

/**
 * Start timer fallback when no audio is available
 */
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        simulatedTime += 0.1;
        updateSection(simulatedTime);

        // Stop at the end (79 seconds)
        if (simulatedTime >= 79) {
            stopTimer();
            playBtn.textContent = '▶';
            isPlaying = false;
            simulatedTime = 0;
        }
    }, 100);
}

/**
 * Stop timer
 */
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

/**
 * Update section based on time (audio or simulated)
 */
function updateSection(time = null) {
    const currentTime = time !== null ? time : audioPlayer.currentTime;
    const audioDuration = hasAudio ? audioPlayer.duration : 79;

    // Update progress bar
    if (audioDuration > 0) {
        progressBar.style.width = (currentTime / audioDuration * 100) + '%';
    }

    // Check which section should be active
    sections.forEach((section, index) => {
        const start = parseFloat(section.dataset.start);
        const end = parseFloat(section.dataset.end);

        if (currentTime >= start && currentTime < end) {
            if (currentSection !== index) {
                currentSection = index;
                section.classList.add('active');
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            section.classList.remove('active');
        }
    });
}

/**
 * Handle audio ended
 */
function onAudioEnded() {
    playBtn.textContent = '▶';
    isPlaying = false;
}

/**
 * Handle keyboard events
 */
function handleKeyboard(e) {
    if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
    } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
