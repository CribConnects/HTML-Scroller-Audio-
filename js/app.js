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
    // Check if audio is available
    audioPlayer.addEventListener('loadedmetadata', () => {
        hasAudio = true;
        console.log('Audio geladen en klaar!');
    });

    audioPlayer.addEventListener('error', () => {
        hasAudio = false;
        console.log('Geen audio beschikbaar - gebruik timer fallback');
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
    setTimeout(() => {
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
        } else {
            stopTimer();
        }
        playBtn.textContent = '▶';
        isPlaying = false;
    } else {
        if (hasAudio) {
            audioPlayer.play().catch(err => {
                console.log('Audio play geblokkeerd, gebruik timer:', err);
                hasAudio = false;
                startTimer();
            });
        } else {
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
