// ============================================
// APP LOGIC — Quiz Engine with Set Selection
// ============================================

let currentSection = 0;
let userAnswers = {};
let studentName = "";
let testStartTime = null;
let selectedSetNumber = null;
let activeQuizData = null;
let timerInterval = null;
const TIME_LIMIT = 45 * 60; // 45 minutes in seconds
let timeRemaining = TIME_LIMIT;

// Security
let tabSwitchCount = 0;
const MAX_WARNINGS = 3;
let isTestActive = false;
let audioCtx = null;

// Google Sheet Backend
const GOOGLE_SHEET_URL = "YOUR_APPS_SCRIPT_URL_HERE";
const GOOGLE_SHEET_VIEW = "https://docs.google.com/spreadsheets/d/10KT6uJlqzGeMqgG6BxQjCPtfxqSIYQPwuArQASGQrVY/edit?usp=sharing";

// Section info for preview
const setInfo = {
    1: [
        { letter: "A", name: "Behaviour Over Time Graphs (BoT)" },
        { letter: "B", name: "Causal Loop Diagrams (CLD)" },
        { letter: "C", name: "Stock, Flow & Dynamic Equilibrium" },
        { letter: "D", name: "Leverage Points & Mental Models" },
        { letter: "E", name: "City Pollution — Fill in the Blanks" }
    ],
    2: [
        { letter: "A", name: "Iceberg Model & Systemic Problems" },
        { letter: "B", name: "System Archetypes & Game Theory" },
        { letter: "C", name: "From BoT to CLD" },
        { letter: "D", name: "Stocks, Flows, Buffers & Delays" },
        { letter: "E", name: "Online Platform — Fill in the Blanks" }
    ],
    3: [
        { letter: "A", name: "System, Elements & Interconnections" },
        { letter: "B", name: "Boundary, Environment & Open Systems" },
        { letter: "C", name: "Iceberg Model Deep Dive" },
        { letter: "D", name: "Archetypes, Feedback & Game Theory" },
        { letter: "E", name: "Digital Distraction — Fill in the Blanks" }
    ],
    4: [
        { letter: "A", name: "BoT, Variables & Problem Formulation" },
        { letter: "B", name: "CLD, S/O Links & Delays" },
        { letter: "C", name: "Fixes That Fail & Drifting Goals" },
        { letter: "D", name: "Mental Models & Ladder of Inference" },
        { letter: "E", name: "Hostel Food Waste — Fill in the Blanks" }
    ]
};

// ============================================
// SET SELECTION
// ============================================
// ============================================
// AUTHOR → SET SELECTION
// ============================================
function goToSets() {
    document.getElementById("authorScreen").style.display = "none";
    document.getElementById("setSelectionScreen").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectSet(setNum) {
    selectedSetNumber = setNum;
    const setMap = { 1: quizData, 2: quizDataSet2, 3: quizDataSet3, 4: quizDataSet4 };
    activeQuizData = setMap[setNum];

    // Highlight selected card
    for (let i = 1; i <= 4; i++) document.getElementById(`setCard${i}`).classList.toggle("selected", setNum === i);

    // Update start screen
    document.getElementById("selectedSetTitle").textContent = `Set ${setNum} Selected`;
    document.getElementById("selectedSetDesc").innerHTML = `You are about to take <strong>Set ${setNum}</strong>. Enter your name to begin.`;

    // Build section previews
    const container = document.getElementById("sectionPreviewContainer");
    container.innerHTML = setInfo[setNum].map(s =>
        `<div class="section-preview-item"><span class="section-letter">${s.letter}</span> ${s.name}</div>`
    ).join("");

    // Show start screen, hide set selection
    document.getElementById("setSelectionScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBackToSets() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("setSelectionScreen").style.display = "block";
    for (let i = 1; i <= 4; i++) document.getElementById(`setCard${i}`).classList.remove("selected");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================
// START TEST
// ============================================
function startTest() {
    const nameInput = document.getElementById("studentName");
    const name = nameInput.value.trim();

    if (!name) {
        nameInput.style.borderColor = "var(--accent-red)";
        nameInput.style.animation = "shake 0.4s ease";
        nameInput.placeholder = "Please enter your name!";
        setTimeout(() => {
            nameInput.style.borderColor = "var(--border)";
            nameInput.style.animation = "";
        }, 1000);
        return;
    }

    studentName = name;
    testStartTime = Date.now();
    timeRemaining = TIME_LIMIT;
    tabSwitchCount = 0;
    isTestActive = true;

    // Update header
    document.getElementById("mainTitle").textContent = `Systems Thinking — Set ${selectedSetNumber}`;

    document.getElementById("startScreen").style.display = "none";
    buildSections();
    document.getElementById("quizContainer").style.display = "block";
    showSection(0);
    startTimer();
    enterFullscreen();
    startSecurityMonitor();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================
// SECURITY — Fullscreen, Tab Switch, Alarm
// ============================================
function enterFullscreen() {
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (req) req.call(el).catch(() => {});
}

function exitFullscreen() {
    const req = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
    if (req && document.fullscreenElement) req.call(document).catch(() => {});
}

function playAlarmSound() {
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        // Play 3 loud beeps
        for (let i = 0; i < 3; i++) {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'square';
            osc.frequency.value = 880 + (i * 200);
            gain.gain.value = 0.8;
            osc.start(audioCtx.currentTime + i * 0.3);
            osc.stop(audioCtx.currentTime + i * 0.3 + 0.25);
        }
    } catch (e) {}
}

function showWarningOverlay(count) {
    // Remove existing overlay
    const existing = document.getElementById('securityOverlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'securityOverlay';
    overlay.innerHTML = `
        <div class="security-modal">
            <div class="security-icon">🚨</div>
            <h2>Tab Switch Detected!</h2>
            <p>You switched away from the test window.</p>
            <div class="warning-counter">
                <span class="warning-dot ${count >= 1 ? 'active' : ''}"></span>
                <span class="warning-dot ${count >= 2 ? 'active' : ''}"></span>
                <span class="warning-dot ${count >= 3 ? 'active' : ''}"></span>
            </div>
            <p class="warning-text">Warning ${count} of ${MAX_WARNINGS}</p>
            <p class="warning-sub">${MAX_WARNINGS - count} warning(s) remaining. On the next violation, your test will be auto-submitted.</p>
            <button onclick="dismissWarning()" class="btn-primary" style="margin-top:16px;">I Understand — Resume Test</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

function dismissWarning() {
    const overlay = document.getElementById('securityOverlay');
    if (overlay) overlay.remove();
    enterFullscreen();
}

function startSecurityMonitor() {
    // Tab visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);
    // Fullscreen exit detection
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
}

function stopSecurityMonitor() {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
}

function handleVisibilityChange() {
    if (!isTestActive) return;
    if (document.hidden) {
        tabSwitchCount++;
        playAlarmSound();
        if (tabSwitchCount > MAX_WARNINGS) {
            isTestActive = false;
            stopSecurityMonitor();
            const overlay = document.getElementById('securityOverlay');
            if (overlay) overlay.remove();
            alert('🚫 You exceeded the maximum tab switches. Your test is being submitted.');
            exitFullscreen();
            submitTest(true);
        } else {
            showWarningOverlay(tabSwitchCount);
        }
    }
}

function handleFullscreenChange() {
    if (!isTestActive) return;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        // User exited fullscreen — treat as tab switch
        tabSwitchCount++;
        playAlarmSound();
        if (tabSwitchCount > MAX_WARNINGS) {
            isTestActive = false;
            stopSecurityMonitor();
            alert('🚫 You exceeded the maximum tab switches. Your test is being submitted.');
            submitTest(true);
        } else {
            showWarningOverlay(tabSwitchCount);
        }
    }
}

// ============================================
// TIMER
// ============================================
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert('⏰ Time is up! Your test will be submitted automatically.');
            submitTest(true);
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    const display = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const el = document.getElementById('timerDisplay');
    if (el) {
        el.textContent = `⏱️ ${display}`;
        el.style.color = timeRemaining <= 300 ? 'var(--accent-red)' : 'var(--text-secondary)';
        el.style.fontWeight = timeRemaining <= 300 ? '700' : '600';
        if (timeRemaining <= 60) el.style.animation = 'pulse 1s ease infinite';
    }
}

// ============================================
// BUILD SECTIONS
// ============================================
function buildSections() {
    const wrapper = document.getElementById("sectionsWrapper");
    wrapper.innerHTML = "";

    activeQuizData.sections.forEach((section, sIndex) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "section-card";
        sectionDiv.id = `section-${sIndex}`;

        let html = `
            <div class="section-title-card">
                <div class="card-body">
                    <span class="section-tag">Section ${section.id}</span>
                    <h2>${section.title}</h2>
                    <p class="section-subtitle">${section.subtitle}</p>
                </div>
            </div>
            <div class="case-card">
                <div class="case-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                    CASE PARAGRAPH
                </div>
                <p class="case-text">${section.caseParagraph.replace(/\n/g, '<br><br>')}</p>
            </div>
        `;

        if (section.type === "fib" && section.keywords) {
            html += `
                <div class="keyword-bank">
                    <h3>📌 Keyword Bank</h3>
                    <div class="keyword-tags">
                        ${section.keywords.map(kw => `<span class="keyword-tag">${kw}</span>`).join("")}
                    </div>
                </div>
            `;
        }

        section.questions.forEach((q, qIndex) => {
            html += section.type === "mcq" ? buildMCQ(q, sIndex, qIndex) : buildFIB(q, sIndex, qIndex);
        });

        sectionDiv.innerHTML = html;
        wrapper.appendChild(sectionDiv);

        setTimeout(() => attachListeners(sIndex, section), 0);
    });
}

// ============================================
// BUILD MCQ CARD
// ============================================
function buildMCQ(q, sIndex, qIndex) {
    const letters = ["A", "B", "C", "D"];
    const qKey = `${sIndex}-${qIndex}`;
    const total = activeQuizData.sections[sIndex].questions.length;

    return `
        <div class="question-card" id="qcard-${qKey}">
            <div class="question-body">
                <div class="question-number">QUESTION ${qIndex + 1} OF ${total}</div>
                <p class="question-text">${q.text}</p>
                <div class="options-group">
                    ${q.options.map((opt, i) => `
                        <label class="option-label" id="opt-${qKey}-${i}" for="q-${qKey}-${i}">
                            <input type="radio" name="q-${qKey}" id="q-${qKey}-${i}" value="${i}">
                            <span class="radio-custom"></span>
                            <span class="option-text"><strong>${letters[i]}.</strong> ${opt}</span>
                        </label>
                    `).join("")}
                </div>
                <div class="feedback" id="feedback-${qKey}"></div>
            </div>
        </div>
    `;
}

// ============================================
// BUILD FIB CARD
// ============================================
function buildFIB(q, sIndex, qIndex) {
    const qKey = `${sIndex}-${qIndex}`;
    const total = activeQuizData.sections[sIndex].questions.length;
    const displayText = q.text.replace(/__________/, '<span class="fib-blank">___________</span>');

    return `
        <div class="fib-card" id="qcard-${qKey}">
            <div class="fib-body">
                <div class="question-number">QUESTION ${qIndex + 1} OF ${total}</div>
                <p class="fib-question">${displayText}</p>
                <input type="text" class="fib-input" id="fib-${qKey}" placeholder="Type your answer here..." autocomplete="off">
                <div class="feedback" id="feedback-${qKey}"></div>
            </div>
        </div>
    `;
}

// ============================================
// ATTACH EVENT LISTENERS
// ============================================
function attachListeners(sIndex, section) {
    section.questions.forEach((q, qIndex) => {
        const qKey = `${sIndex}-${qIndex}`;

        if (section.type === "mcq") {
            document.querySelectorAll(`input[name="q-${qKey}"]`).forEach(radio => {
                radio.addEventListener("change", (e) => {
                    userAnswers[qKey] = parseInt(e.target.value);
                    const card = document.getElementById(`qcard-${qKey}`);
                    card.classList.add("answered");
                    card.querySelectorAll(".option-label").forEach(l => l.classList.remove("selected"));
                    e.target.closest(".option-label").classList.add("selected");
                    updateProgress();
                });
            });
        } else {
            const input = document.getElementById(`fib-${qKey}`);
            if (input) {
                input.addEventListener("input", (e) => {
                    const val = e.target.value.trim();
                    userAnswers[qKey] = val;
                    const card = document.getElementById(`qcard-${qKey}`);
                    card.classList.toggle("answered", val.length > 0);
                    updateProgress();
                });
            }
        }
    });
}

// ============================================
// NAVIGATION
// ============================================
function showSection(index) {
    document.querySelectorAll(".section-card").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(`section-${index}`);
    if (target) target.classList.add("active");
    currentSection = index;
    updateNavButtons();
    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextSection() {
    if (currentSection < activeQuizData.sections.length - 1) showSection(currentSection + 1);
}

function prevSection() {
    if (currentSection > 0) showSection(currentSection - 1);
}

function updateNavButtons() {
    document.getElementById("prevBtn").style.display = currentSection > 0 ? "inline-flex" : "none";
    const isLast = currentSection === activeQuizData.sections.length - 1;
    document.getElementById("nextBtn").style.display = isLast ? "none" : "inline-flex";
    document.getElementById("submitBtn").style.display = isLast ? "inline-flex" : "none";
}

// ============================================
// PROGRESS
// ============================================
function updateProgress() {
    const total = getTotalQuestions();
    const answered = Object.keys(userAnswers).filter(k => userAnswers[k] !== undefined && userAnswers[k] !== null && userAnswers[k] !== "").length;
    const percent = Math.round((answered / total) * 100);
    document.getElementById("progressFill").style.width = `${percent}%`;
    document.getElementById("progressPercent").textContent = `${percent}%`;
    document.getElementById("progressText").textContent = `Section ${currentSection + 1} of ${activeQuizData.sections.length} • ${answered}/${total} answered`;
    // Ensure timer display exists
    if (!document.getElementById('timerDisplay')) {
        const timerEl = document.createElement('span');
        timerEl.id = 'timerDisplay';
        timerEl.style.cssText = 'font-size:13px;font-weight:600;color:var(--text-secondary);';
        document.querySelector('.progress-info').appendChild(timerEl);
    }
}

function getTotalQuestions() {
    let t = 0;
    activeQuizData.sections.forEach(s => t += s.questions.length);
    return t;
}

// ============================================
// SUBMIT
// ============================================
function submitTest(autoSubmit = false) {
    const total = getTotalQuestions();
    const answered = Object.keys(userAnswers).filter(k => userAnswers[k] !== undefined && userAnswers[k] !== null && userAnswers[k] !== "").length;

    if (!autoSubmit && answered < total) {
        if (!confirm(`You have ${total - answered} unanswered question(s). Submit anyway?`)) return;
    }

    stopTimer();
    isTestActive = false;
    stopSecurityMonitor();
    exitFullscreen();
    const results = calculateResults();
    document.getElementById("quizContainer").style.display = "none";
    showResults(results);
    if (results.percentage >= 60) launchConfetti();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================
// CALCULATE RESULTS
// ============================================
function calculateResults() {
    let totalCorrect = 0, totalQuestions = 0;
    const sectionResults = [];

    activeQuizData.sections.forEach((section, sIndex) => {
        let correct = 0;
        section.questions.forEach((q, qIndex) => {
            const ans = userAnswers[`${sIndex}-${qIndex}`];
            if (section.type === "mcq") {
                if (ans === q.correct) correct++;
            } else {
                if (ans && q.acceptableAnswers.some(a => a.toLowerCase().trim() === ans.toLowerCase().trim())) correct++;
            }
        });
        totalCorrect += correct;
        totalQuestions += section.questions.length;
        sectionResults.push({ id: section.id, title: section.title, correct, total: section.questions.length, percentage: Math.round((correct / section.questions.length) * 100) });
    });

    const timeTaken = Math.round((Date.now() - testStartTime) / 1000);
    return {
        name: studentName, setNumber: selectedSetNumber,
        totalCorrect, totalQuestions,
        percentage: Math.round((totalCorrect / totalQuestions) * 100),
        sectionResults,
        timeTaken: `${Math.floor(timeTaken / 60)}m ${timeTaken % 60}s`
    };
}

// ============================================
// SHOW RESULTS
// ============================================
function showResults(results) {
    const el = document.getElementById("resultsScreen");
    el.style.display = "block";

    let emoji = "🎉", msg = "Excellent work!";
    if (results.percentage < 40) { emoji = "📖"; msg = "Keep studying, you'll get there!"; }
    else if (results.percentage < 60) { emoji = "💪"; msg = "Good effort! Review the concepts."; }
    else if (results.percentage < 80) { emoji = "👏"; msg = "Great job! Almost perfect!"; }
    else if (results.percentage < 100) { emoji = "🌟"; msg = "Outstanding performance!"; }
    else { emoji = "🏆"; msg = "Perfect score! Incredible!"; }

    const warningText = tabSwitchCount > 0 ? `<div style="margin-top:8px;font-size:13px;color:var(--accent-red);">⚠️ Tab Switches: <strong>${tabSwitchCount}</strong></div>` : `<div style="margin-top:8px;font-size:13px;color:#4caf50;">✅ No tab switches — Fair attempt!</div>`;

    el.innerHTML = `
        <div class="results-header pop-in">
            <div class="header-accent"></div>
            <div class="results-header-content">
                <div style="font-size:52px;margin-bottom:12px;">${emoji}</div>
                <div class="results-name">${results.name}'s Results — Set ${results.setNumber}</div>
                <div class="results-subtitle">${msg}</div>
                <div class="score-circle" style="--score-percent:${results.percentage}%;margin-top:28px;">
                    <span class="score-value">${results.percentage}%</span>
                    <span class="score-label">${results.totalCorrect}/${results.totalQuestions}</span>
                </div>
                <div style="margin-top:16px;font-size:14px;color:var(--text-secondary);">⏱️ Time: <strong>${results.timeTaken}</strong></div>
                ${warningText}
                <div class="section-scores">
                    ${results.sectionResults.map(sr => `<div class="section-score-card"><div class="section-score-label">Section ${sr.id}</div><div class="section-score-value">${sr.correct}/${sr.total}</div></div>`).join("")}
                </div>
                <div id="saveStatus" style="margin-top:16px;font-size:13px;color:var(--text-secondary);">📤 Saving results...</div>
                <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
                    <button class="review-toggle" onclick="toggleReview()">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        Review Answers
                    </button>
                    <button class="btn-leaderboard" onclick="window.open(GOOGLE_SHEET_VIEW, '_blank')">
                        🏆 View Leaderboard
                    </button>
                    <button class="btn-primary" onclick="goHome()">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                        Back to Sets
                    </button>
                </div>
            </div>
        </div>
        <div id="reviewContainer" style="display:none;">${buildReview()}</div>
    `;

    // Send results to Google Sheet
    sendResultsToSheet(results);
}

// ============================================
// GOOGLE SHEET BACKEND
// ============================================
function sendResultsToSheet(results) {
    if (GOOGLE_SHEET_URL === "YOUR_APPS_SCRIPT_URL_HERE") {
        document.getElementById("saveStatus").innerHTML = `⚠️ Sheet URL not configured. <a href="${GOOGLE_SHEET_VIEW}" target="_blank" style="color:var(--primary);">View Sheet</a>`;
        return;
    }

    const sectionMap = {};
    results.sectionResults.forEach(sr => {
        sectionMap[`section${sr.id}`] = `${sr.correct}/${sr.total}`;
    });

    const payload = {
        name: results.name,
        setNumber: results.setNumber,
        totalCorrect: results.totalCorrect,
        totalQuestions: results.totalQuestions,
        percentage: results.percentage,
        warnings: tabSwitchCount,
        timeTaken: results.timeTaken,
        sectionA: sectionMap.sectionA || "-",
        sectionB: sectionMap.sectionB || "-",
        sectionC: sectionMap.sectionC || "-",
        sectionD: sectionMap.sectionD || "-",
        sectionE: sectionMap.sectionE || "-"
    };

    fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(() => {
        const el = document.getElementById("saveStatus");
        if (el) el.innerHTML = `✅ Results saved! <a href="${GOOGLE_SHEET_VIEW}" target="_blank" style="color:var(--primary);font-weight:600;">View Leaderboard →</a>`;
    })
    .catch(() => {
        const el = document.getElementById("saveStatus");
        if (el) el.textContent = "⚠️ Could not save results. Check connection.";
    });
}

// ============================================
// BUILD REVIEW
// ============================================
function buildReview() {
    const letters = ["A", "B", "C", "D"];
    let html = "";

    activeQuizData.sections.forEach((section, sIndex) => {
        html += `<div class="review-section"><div class="review-section-title">Section ${section.id}: ${section.title}</div>`;
        html += `<div class="case-card"><div class="case-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> CASE PARAGRAPH</div><p class="case-text">${section.caseParagraph.replace(/\n/g, '<br><br>')}</p></div>`;

        section.questions.forEach((q, qIndex) => {
            const qKey = `${sIndex}-${qIndex}`;
            const userAns = userAnswers[qKey];

            if (section.type === "mcq") {
                const isCorrect = userAns === q.correct;
                html += `<div class="question-card ${isCorrect ? 'correct' : 'incorrect'}"><div class="question-body">
                    <div class="question-number">QUESTION ${qIndex + 1}</div>
                    <p class="question-text">${q.text}</p>
                    <div class="options-group">
                        ${q.options.map((opt, i) => {
                            let cls = "";
                            if (i === q.correct) cls = "correct-answer";
                            else if (i === userAns && !isCorrect) cls = "wrong-answer";
                            return `<label class="option-label ${cls}" style="cursor:default;"><span class="radio-custom"></span><span class="option-text"><strong>${letters[i]}.</strong> ${opt}</span></label>`;
                        }).join("")}
                    </div>
                    <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? '✅ Correct!' : `❌ Incorrect. Correct: <strong>${letters[q.correct]}. ${q.options[q.correct]}</strong>`}
                    </div>
                </div></div>`;
            } else {
                const isCorrect = userAns && q.acceptableAnswers.some(a => a.toLowerCase().trim() === (userAns || "").toLowerCase().trim());
                html += `<div class="fib-card ${isCorrect ? 'correct' : 'incorrect'}"><div class="fib-body">
                    <div class="question-number">QUESTION ${qIndex + 1}</div>
                    <p class="fib-question">${q.text.replace(/__________/, `<span class="fib-blank">${userAns || '(no answer)'}</span>`)}</p>
                    <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? '✅ Correct!' : `❌ Incorrect. Your answer: "<strong>${userAns || '(blank)'}</strong>" — Correct: <strong>${q.answer}</strong>`}
                    </div>
                </div></div>`;
            }
        });
        html += `</div>`;
    });
    return html;
}

// ============================================
// TOGGLE REVIEW
// ============================================
function toggleReview() {
    const c = document.getElementById("reviewContainer");
    const btn = document.querySelector(".review-toggle");
    if (c.style.display === "none") {
        c.style.display = "block";
        btn.textContent = "Hide Review";
    } else {
        c.style.display = "none";
        btn.textContent = "Review All Answers";
    }
}

// ============================================
// GO HOME / RETAKE
// ============================================
function goHome() {
    stopTimer();
    isTestActive = false;
    stopSecurityMonitor();
    exitFullscreen();
    userAnswers = {};
    currentSection = 0;
    selectedSetNumber = null;
    activeQuizData = null;
    timeRemaining = TIME_LIMIT;
    tabSwitchCount = 0;

    document.getElementById("resultsScreen").style.display = "none";
    document.getElementById("resultsScreen").innerHTML = "";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("setSelectionScreen").style.display = "block";
    document.getElementById("mainTitle").textContent = "Systems Thinking — Practice Test";
    for (let i = 1; i <= 4; i++) document.getElementById(`setCard${i}`).classList.remove("selected");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================
// CONFETTI
// ============================================
function launchConfetti() {
    const container = document.createElement("div");
    container.className = "confetti-container";
    document.body.appendChild(container);
    const colors = ["#673ab7", "#9c27b0", "#e040fb", "#7c4dff", "#ff9100", "#00c853", "#2979ff", "#ff1744"];
    for (let i = 0; i < 80; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "%";
        c.style.animationDelay = Math.random() * 2 + "s";
        c.style.animationDuration = (2 + Math.random() * 2) + "s";
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        c.style.width = (6 + Math.random() * 8) + "px";
        c.style.height = (6 + Math.random() * 8) + "px";
        c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        container.appendChild(c);
    }
    setTimeout(() => container.remove(), 5000);
}

// Shake + pulse animations
const s = document.createElement("style");
s.textContent = `@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}50%{transform:translateX(6px)}75%{transform:translateX(-4px)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}#securityOverlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:99999;display:flex;align-items:center;justify-content:center;animation:fadeIn .3s ease}.security-modal{background:#fff;border-radius:20px;padding:48px 40px;text-align:center;max-width:440px;width:90%;box-shadow:0 25px 60px rgba(0,0,0,0.4);animation:popIn .4s ease}.security-icon{font-size:64px;margin-bottom:16px;animation:shake .5s ease}.security-modal h2{font-size:22px;font-weight:800;color:#c62828;margin-bottom:8px}.security-modal p{font-size:14px;color:#555;line-height:1.6}.warning-counter{display:flex;gap:12px;justify-content:center;margin:20px 0}.warning-dot{width:20px;height:20px;border-radius:50%;background:#e0e0e0;transition:all .3s}.warning-dot.active{background:#c62828;box-shadow:0 0 12px rgba(198,40,40,0.5)}.warning-text{font-size:18px;font-weight:800;color:#c62828}.warning-sub{font-size:13px;color:#888;margin-top:4px}@keyframes fadeIn{from{opacity:0}to{opacity:1}}`;
document.head.appendChild(s);
