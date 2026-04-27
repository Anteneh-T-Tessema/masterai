/**
 * LLM Basics - Golden Standard Specialization Engine
 */

const App = {
    // Inject Identity & SEO
    initIdentity(courseId, course) {
        window.COURSE_ID = courseId;
        window.COURSE_TITLE = course.title;
        
        document.title = `${course.title} | Global AI Academy`;
        document.getElementById('dynamic-desc').content = `Master ${course.title} with the Global AI Academy. Earn a verified professional certificate in ${courseId.toUpperCase()}.`;
        
        // Update Schema
        const schema = JSON.parse(document.getElementById('course-schema').innerHTML);
        schema.name = course.title;
        schema.description = `Professional specialization and certification in ${course.title}.`;
        document.getElementById('course-schema').innerHTML = JSON.stringify(schema);
    },

    state: {
        id: window.COURSE_ID || 'llm_basics',
        title: window.COURSE_TITLE || 'AI Specialization',
        chapters: window.CHAPTERS_DATA || [],
        glossary: window.GLOSSARY_DATA || [],
        scenarios: window.PLAYGROUND_SCENARIOS || {},
        currentView: 'dashboard',
        currentChapter: -1,
        currentUnit: -1,
        completedUnits: [],
        bookmarks: [],
        notes: {},
        unitScores: {}, 
        selectedAnswers: {}, 
        xp: parseInt(localStorage.getItem('academy_xp')) || 0,
        searchQuery: '',
        theme: 'light',
        streak: parseInt(localStorage.getItem('global_streak')) || 0,
        lastVisit: localStorage.getItem('global_last_visit') || ''
    },

    init() {
        this.updateStreak();
        // Load data specific to this course
        this.state.completedUnits = JSON.parse(localStorage.getItem(`${this.state.id}_completed`)) || [];
        this.state.bookmarks = JSON.parse(localStorage.getItem(`${this.state.id}_bookmarks`)) || [];
        this.state.notes = JSON.parse(localStorage.getItem(`${this.state.id}_notes`)) || {};
        this.state.unitScores = JSON.parse(localStorage.getItem(`${this.state.id}_scores`)) || {};
        this.state.xp = parseInt(localStorage.getItem('academy_xp')) || 0;
        this.state.theme = localStorage.getItem(`${this.state.id}_theme`) || 'dark';

        this.cacheDOM();
        this.bindEvents();
        this.applyTheme();
        
        // Centralized Branding Map
        const icons = {
            llm: 'L', nlp: 'N', agents: '🤖', claude: 'C', gemini: 'G', codex: '💻',
            safety: '🛡️', vision: '👁️', mlops: '🏗️', robotics: '🦾', 
            finance: '🏦', healthcare: '🏥', creative: '🎨', law: '⚖️',
            governance: '📋', audit: '🔍', security: '⚔️', energy: '⚡', defense: '🛰️',
            cyber: '🏴‍☠️', education: '🎓', marketing: '📈', logistics: '📦',
            media: '🎮', retail: '🛍️', agri: '🚜', hr: '👥', proptech: '🏠',
            smartcity: '🏙️', climate: '🌍'
        };

        // Update Global Branding
        if (this.els.sidebar) {
            const logoIcon = this.els.sidebar.querySelector('.logo-icon');
            const logoText = this.els.sidebar.querySelector('h1');
            if (logoIcon) logoIcon.textContent = icons[this.state.id] || 'A';
            if (logoText) logoText.textContent = this.state.title.split(' ')[0] + ' ' + (this.state.title.split(' ')[1] || '');
        }

        this.renderSidebar();
        
        if (this.els.breadcrumb) this.els.breadcrumb.textContent = `${this.state.title} Dashboard`;
        document.title = `${this.state.title} | Global Academy`;
        
        const saved = JSON.parse(localStorage.getItem(`${this.state.id}_current`));
        if (saved && saved.chapter !== -1 && saved.view === 'unit') {
            this.loadUnit(saved.chapter, saved.unit);
        } else if (saved && saved.view === 'playground') {
            this.loadPlayground();
        } else {
            this.loadDashboard();
        }
    },

    cacheDOM() {
        this.els = {
            chapterList: document.getElementById('chapter-list'),
            content: document.getElementById('chapter-content'),
            breadcrumb: document.getElementById('breadcrumb'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            progressFill: document.getElementById('progress-fill'),
            progressPercent: document.getElementById('progress-percent'),
            search: document.getElementById('sidebar-search'),
            themeToggle: document.querySelector('.theme-toggle'),
            mobileToggle: document.getElementById('mobile-toggle'),
            sidebar: document.querySelector('.sidebar'),
            modal: document.getElementById('completion-modal'),
            certModal: document.getElementById('cert-modal'),
            nav: document.getElementById('content-nav')
        };
    },

    bindEvents() {
        this.els.search.oninput = (e) => {
            this.state.searchQuery = e.target.value.toLowerCase();
            this.renderSidebar();
        };

        this.els.themeToggle.onclick = () => this.toggleTheme();
        this.els.mobileToggle.onclick = () => this.els.sidebar.classList.toggle('open');
        this.els.nextBtn.onclick = () => this.navigate(1);
        this.els.prevBtn.onclick = () => this.navigate(-1);
        
        window.loadUnit = (c, u) => this.loadUnit(c, u);
        window.toggleChapter = (i) => this.toggleChapter(i);
        window.loadDashboard = () => this.loadDashboard();
        window.loadGlossary = () => this.loadGlossary();
        window.loadPlayground = () => this.loadPlayground();
        window.toggleBookmark = (c, u) => this.toggleBookmark(c, u);
        window.saveNote = (id, val) => this.saveNote(id, val);
        window.selectAnswer = (qIdx, oIdx) => this.selectAnswer(qIdx, oIdx);
        window.submitQuiz = () => this.submitQuiz();
        window.resetQuiz = () => this.resetQuiz();
        window.checkoutCertification = () => this.checkoutCertification();
        window.showCertificate = () => this.showCertificate();
        window.closeCert = () => this.els.certModal.style.display = 'none';
        window.runSimulatedPrompt = () => this.runSimulatedPrompt();
        window.exportStudyMaterials = () => this.exportStudyMaterials();
    },

    shareToLinkedIn() {
        const text = `I am proud to announce that I have completed the ${this.state.title} at the Global AI Academy! 🚀\n\nI've mastered the frontiers of ${window.COURSE_ID.toUpperCase()} and earned my verified professional certificate. Looking forward to applying these specialized AI skills in the industry.\n\n#AI #Specialization #GlobalAIAcademy #CareerFrontier`;
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    },

    checkoutCertification() {
        alert(`Initializing Secure Checkout for ${this.state.title} Certification...\n\nTotal: $49.00 USD`);
        // In production: window.location.href = `https://checkout.stripe.com/...`;
    },

    generateCertificate() {
        alert("Generating Verified PDF Certificate... \n\nThis will include your name, specialization ID, and completion timestamp.");
    },

    closeModal() {
        this.els.modal.style.display = 'none';
    },

    updateStreak() {
        const today = new Date().toDateString();
        if (this.state.lastVisit === today) return;
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (this.state.lastVisit === yesterday.toDateString()) {
            this.state.streak++;
        } else {
            this.state.streak = 1;
        }
        
        this.state.lastVisit = today;
        localStorage.setItem('global_streak', this.state.streak);
        localStorage.setItem('global_last_visit', today);
        
        const streakEl = document.getElementById('global-streak');
        if (streakEl) streakEl.textContent = this.state.streak;
    },

    loadDashboard() {
        this.state.currentView = 'dashboard';
        this.state.currentChapter = -1;
        this.saveState();
        
        this.els.breadcrumb.textContent = "Specialization Dashboard";
        this.els.nav.style.display = "none";
        
        const totalUnits = this.getTotalUnits();
        const completedCount = this.state.completedUnits.length;
        const progress = Math.round((completedCount / totalUnits) * 100);
        const isCertified = progress === 100;

        const scores = Object.values(this.state.unitScores);
        const avgGrade = scores.length > 0 ? Math.round(scores.reduce((a,b) => a+b, 0) / scores.length) : 0;

        this.els.content.innerHTML = `
            <div class="dashboard-view" style="animation: slideUp 0.6s ease-out">
                <div style="display:flex; justify-content:space-between; align-items:center">
                    <div>
                        <h2>Generative AI Specialization</h2>
                        <p>The Golden Standard in LLM Education</p>
                    </div>
                    ${isCertified ? '<div class="badge certified">CERTIFIED MASTER</div>' : ''}
                </div>
                
                
                <div class="dashboard-grid">
                <div class="stat-card" style="border-bottom: 4px solid var(--accent-color)">
                    <div class="label">Industrial XP</div>
                    <div class="value" id="xp-display">${this.state.xp}</div>
                    <div class="sub">Level ${Math.floor(this.state.xp / 1000) + 1} Specialist</div>
                </div>
                <div class="stat-card">
                    <div class="label">Course Mastery</div>
                    <div class="value">${this.state.completedUnits.length}/${this.getTotalUnits()}</div>
                    <div class="sub">Modules Completed</div>
                </div>
                <div class="stat-card" style="border: 1px solid var(--accent-color); background: rgba(99, 102, 241, 0.05)">
                    <div class="label" style="color: var(--accent-color)">Career Certification</div>
                    <div class="value">Verified</div>
                    <div class="sub">Professional Credential</div>
                    <button class="nav-btn" style="background: var(--accent-color); color: white; margin-top: 1rem; width: 100%" onclick="App.checkoutCertification()">Get Certified ($49)</button>
                </div>
            </div>
        <div class="stat-card" onclick="loadGlossary()" style="cursor:pointer">
                        <h4>Research Tools</h4>
                        <div class="value" style="font-size: 1.5rem">Reference & A-Z →</div>
                    </div>
                </div>

                <div class="dashboard-grid" style="margin-top: 1.5rem">
                    <div class="stat-card" style="grid-column: span 2; background: var(--obj-bg); border: none">
                        <h3>Certification Hub</h3>
                        <p style="margin: 1rem 0; color: var(--text-secondary)">
                            ${isCertified 
                                ? 'Congratulations! You have completed the specialization. Your official certificate is ready.' 
                                : `You have mastered ${completedCount} of ${totalUnits} lectures. Complete all modules with 80%+ to unlock your certificate.`}
                        </p>
                        ${isCertified 
                            ? '<button class="nav-btn" style="background: var(--accent-color); color: white" onclick="showCertificate()">View Certificate</button>' 
                            : `<div class="progress-bar" style="max-width: 300px"><div class="progress-fill" style="width: ${progress}%"></div></div>`}
                    </div>
                    <div class="stat-card" style="cursor:pointer" onclick="loadPlayground()">
                        <h3>Lab Playground</h3>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem">Test your prompting techniques in our sandbox.</p>
                    </div>
                </div>
            </div>
        `;
        this.renderSidebar();
        this.updateProgressUI();
    },

    loadPlayground() {
        this.state.currentView = 'playground';
        this.state.currentChapter = -1;
        this.saveState();
        
                        `).join('')}
                    </div>
                    
                    <div class="chat-container" style="background: var(--sidebar-bg); border-radius: 16px; padding: 2rem; border: 1px solid var(--glass-border)">
                        <div id="playground-output" style="height: 350px; overflow-y: auto; margin-bottom: 2rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem">
                            <div class="message system">System: Select a technique and type a prompt to begin simulation.</div>
                        </div>
                        
                        <div style="display:flex; gap: 10px">
                            <input type="text" id="playground-input" placeholder="Enter your test prompt..." style="flex:1; padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); outline: none">
                            <button class="nav-btn" style="background: var(--accent-color); color: white; border: none" onclick="runSimulatedPrompt()">Execute</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    selectScenario(key) {
        this.state.currentScenario = key;
        document.querySelectorAll('.scenario-card').forEach(el => el.classList.remove('active'));
        document.getElementById(`scenario-${key}`).classList.add('active');
        
        const output = document.getElementById('playground-output');
        output.innerHTML += `<div class="message system" style="color: var(--accent-color); margin-top: 1rem">Technique active: ${this.state.scenarios[key].title}</div>`;
        output.scrollTo(0, output.scrollHeight);
    },

    runSimulatedPrompt() {
        const input = document.getElementById('playground-input');
        const output = document.getElementById('playground-output');
        const prompt = input.value;
        if (!prompt || !this.state.currentScenario) return;

        const scenario = this.state.scenarios[this.state.currentScenario];
        input.value = '';
        
        output.innerHTML += `<div class="message user" style="margin-top: 1.5rem"><strong>You:</strong> ${prompt}</div>`;
        output.innerHTML += `<div class="message assistant reasoning" style="color: var(--text-muted); font-size: 0.85rem; margin-top: 1rem; font-style: italic; border-left: 2px solid var(--accent-color); padding-left: 1rem">Thinking: ${scenario.expected_reasoning}</div>`;
        
        setTimeout(() => {
            output.innerHTML += `<div class="message assistant" style="margin-top: 1rem; background: var(--obj-bg); padding: 1rem; border-radius: 8px"><strong>LLM (Simulated):</strong> ${scenario.simulated_response}</div>`;
            output.scrollTo(0, output.scrollHeight);
        }, 1200);
    },

    showCertificate() {
        const totalUnits = this.getTotalUnits();
        if (this.state.completedUnits.length < totalUnits) return;

        // Prompt for Name if not set
        if (!this.state.userName) {
            const name = prompt("Enter your full name for the certificate:", "The Master Student");
            if (name) this.state.userName = name;
            else return;
        }

        const scores = Object.values(this.state.unitScores);
        const avgGrade = Math.round(scores.reduce((a,b) => a+b, 0) / scores.length);
        const date = new Date();
        const dateStr = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        const certRender = document.getElementById('certificate-render');
        certRender.innerHTML = `
            <div class="cert-border" style="border: 20px solid var(--accent-color); padding: 3rem; position: relative">
                <div class="cert-watermark">GOLDEN STANDARD</div>
                <h1 style="font-size: 3rem; margin-bottom: 1rem; font-family: var(--font-heading)">CERTIFICATE OF MASTERY</h1>
                <p style="font-size: 1.2rem; margin-bottom: 3rem">This honors the distinguished performance of</p>
                <div style="font-size: 3.5rem; font-weight: 800; border-bottom: 2px solid var(--text-primary); display: inline-block; padding: 0 3rem; margin-bottom: 3rem">${this.state.userName}</div>
                <p style="font-size: 1.1rem; max-width: 600px; margin: 0 auto 3rem">for the successful completion of the comprehensive specialization in Large Language Models with a final distinction of <strong>${avgGrade}%</strong>.</p>
                
                <div style="display:flex; justify-content: space-around; margin-top: 4rem">
                    <div>
                        <div style="font-weight: 700; border-bottom: 1px solid var(--text-primary)">LLM Basics Academy</div>
                        <div style="font-size: 0.8rem; margin-top: 5px">Verifying Authority</div>
                    </div>
                    <div>
                        <div style="font-weight: 700; border-bottom: 1px solid var(--text-primary)">${dateStr}</div>
                        <div style="font-size: 0.8rem; margin-top: 5px">Completion Date</div>
                    </div>
                </div>

                <div class="cert-share-actions" style="margin-top: 3rem; display: flex; justify-content: center; gap: 1rem">
                    <button class="nav-btn" style="background: var(--accent-color); color: white; border: none; font-size: 0.8rem" onclick="App.downloadCertificate()">
                        Download as Image (PNG)
                    </button>
                    <button class="nav-btn" style="background: #0077b5; color: white; border: none; font-size: 0.8rem" onclick="App.shareToLinkedIn()">
                        Share to LinkedIn
                    </button>
                </div>
            </div>
        `;
        this.els.certModal.style.display = 'flex';
    },

    downloadCertificate() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 1000;
        canvas.height = 750;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Border
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 40;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // Text Styles
        ctx.textAlign = 'center';
        ctx.fillStyle = '#1a1a1a';

        // Title
        ctx.font = '800 50px Outfit, Inter, sans-serif';
        ctx.fillText('CERTIFICATE OF MASTERY', canvas.width / 2, 150);

        // Subtitle
        ctx.font = '400 24px Inter, sans-serif';
        ctx.fillText('This honors the distinguished performance of', canvas.width / 2, 220);

        // Name
        ctx.font = '800 60px Outfit, Inter, sans-serif';
        ctx.fillText(this.state.userName, canvas.width / 2, 330);
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 250, 350);
        ctx.lineTo(canvas.width / 2 + 250, 350);
        ctx.stroke();

        // Grade
        const scores = Object.values(this.state.unitScores);
        const avgGrade = Math.round(scores.reduce((a,b) => a+b, 0) / scores.length);
        ctx.font = '400 22px Inter, sans-serif';
        ctx.fillText('for the successful completion of the specialization in', canvas.width / 2, 420);
        ctx.fillText('Large Language Models', canvas.width / 2, 450);
        ctx.font = '800 30px Inter, sans-serif';
        ctx.fillText(`Final Distinction: ${avgGrade}%`, canvas.width / 2, 500);

        // Authority & Date
        ctx.font = '700 20px Inter, sans-serif';
        ctx.fillText('LLM Basics Academy', canvas.width / 4, 630);
        ctx.fillText(new Date().toLocaleDateString(), (canvas.width / 4) * 3, 630);
        
        ctx.font = '400 14px Inter, sans-serif';
        ctx.fillText('Verifying Authority', canvas.width / 4, 655);
        ctx.fillText('Completion Date', (canvas.width / 4) * 3, 655);

        // Download Trigger
        const link = document.createElement('a');
        link.download = `LLM_Mastery_Certificate_${this.state.userName.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    },

    shareToLinkedIn() {
        const name = encodeURIComponent(this.state.userName);
        const certName = encodeURIComponent("LLM Mastery Specialization Certificate");
        const org = encodeURIComponent("LLM Basics Academy");
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        
        const url = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${certName}&organizationName=${org}&issueYear=${year}&issueMonth=${month}&certId=${Date.now()}`;
        window.open(url, '_blank');
    },

    shareToTwitter() {
        const text = encodeURIComponent(`I just mastered the LLM Specialization! Check out this Golden Standard curriculum. #LLM #AI #GenerativeAI`);
        const url = `https://twitter.com/intent/tweet?text=${text}`;
        window.open(url, '_blank');
    },

    exportStudyMaterials() {
        let md = `# LLM Specialization: Personal Study Guide\nGenerated on ${new Date().toLocaleDateString()}\n\n`;
        
        this.state.chapters.forEach(c => {
            md += `## Module ${c.id}: ${c.title}\n`;
            c.units.forEach(u => {
                const id = `${c.id-1}-${u.id.split('.')[1]-1}`; // Adjust for 0-indexing if needed
                const note = this.state.notes[id] || "No notes recorded.";
                const score = this.state.unitScores[id] || "N/A";
                md += `### Lecture: ${u.title}\n- **Grade:** ${score}%\n- **Notes:** ${note}\n\n`;
            });
            md += `---\n\n`;
        });

        const blob = new Blob([md], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `LLM_Study_Guide_${Date.now()}.md`;
        a.click();
    },

    loadUnit(cIdx, uIdx) {
        this.state.currentView = 'unit';
        this.state.currentChapter = cIdx;
        this.state.currentUnit = uIdx;
        this.state.selectedAnswers = {};
        this.saveState();

        const chapter = this.state.chapters[cIdx];
        const unit = chapter.units[uIdx];
        const unitId = `${cIdx}-${uIdx}`;
        const isBookmarked = this.state.bookmarks.includes(unitId);
        const savedScore = this.state.unitScores[unitId];

        this.els.nav.style.display = "flex";
        this.els.breadcrumb.innerHTML = `Module ${chapter.id} &rsaquo; ${unit.title}`;

        // YouTube Video Engine Integration
        const contributor = (window.ACADEMY_CONTRIBUTORS || []).find(c => c.specialization.toLowerCase().includes(this.state.title.toLowerCase()) || c.id === 'creator_01');
        const video = contributor ? contributor.videos[0] : null;

        const videoHtml = video ? `
            <div class="video-cinematic-container" style="position: relative; margin-bottom: 3rem; background: #000; border-radius: 24px; overflow: hidden; border: 1px solid var(--glass-border); box-shadow: 0 30px 60px rgba(0,0,0,0.5);">
                <!-- Institutional Seal Overlay -->
                <div style="position: absolute; top: 20px; right: 20px; z-index: 10; background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); border: 1px solid var(--accent-color); padding: 5px 12px; border-radius: 5px; color: var(--accent-color); font-size: 0.6rem; font-weight: 900; letter-spacing: 0.1em; pointer-events: none;">
                    OFFICIAL ACADEMY CERTIFIED
                </div>
                
                <div class="video-ratio" style="position: relative; padding-bottom: 56.25%; height: 0;">
                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                        src="https://www.youtube.com/embed/${video.youtube_id}?modestbranding=1&rel=0&iv_load_policy=3" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div class="contributor-attribution" style="padding: 1.5rem; display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.02);">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <span style="font-size: 1.5rem">${contributor.avatar}</span>
                        <div>
                            <div style="font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.1em;">Institutional Expert</div>
                            <div style="font-weight: 700;">${contributor.name}</div>
                        </div>
                    </div>
                    <div style="text-align: right">
                        <div style="font-size: 0.7rem; color: var(--text-dim);">CURRICULUM MODULE</div>
                        <div style="font-size: 0.8rem; color: var(--accent-color); font-weight: 800;">${video.title}</div>
                    </div>
                </div>
            </div>

            <!-- Standardized Learning Objectives -->
            <div class="learning-objectives" style="background: rgba(88, 166, 255, 0.05); border-left: 4px solid var(--accent-color); padding: 1.5rem; border-radius: 12px; margin-bottom: 3rem;">
                <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-color); margin-bottom: 1rem;">Module Learning Objectives</h4>
                <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.9rem; line-height: 1.6; color: var(--text-dim);">
                    <li>Analyze specialized architectural patterns in ${this.state.title}.</li>
                    <li>Execute industrial-grade research simulations using the Academy R&D Labs.</li>
                    <li>Validate mastery through official Graded Assessments.</li>
                    <li>Qualify for Institutional Certification upon 100% completion.</li>
                </ul>
            </div>
        ` : '';
        
        this.els.content.innerHTML = `
            ${this.renderVideoEngine(unit)}
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2rem">
                <h1 style="font-size: 2rem; font-weight: 700">${unit.title}</h1>
                <button onclick="toggleBookmark(${cIdx}, ${uIdx})" class="nav-btn" style="padding: 0.5rem 1rem; font-size: 0.75rem; border-color: ${isBookmarked ? 'var(--accent-color)' : 'var(--glass-border)'}">
                    ${isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
                </button>
            </div>
            <div class="lecture-body">${unit.content}</div>

            <!-- Floating AI Mentor Anchor -->
            <div id="mentor-anchor" style="position: fixed; bottom: 30px; right: 30px; z-index: 1000;">
                <button onclick="App.toggleMentorChat()" class="nav-btn primary" style="width: 60px; height: 60px; border-radius: 50%; box-shadow: 0 10px 30px rgba(88, 166, 255, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">🤖</button>
            </div>

            <!-- Mentor Chat Window (Hidden by Default) -->
            <div id="mentor-chat-window" style="display: none; position: fixed; bottom: 100px; right: 30px; width: 350px; height: 500px; background: #0d1117; border: 1px solid var(--glass-border); border-radius: 20px; z-index: 1001; flex-direction: column; box-shadow: 0 30px 60px rgba(0,0,0,0.5); overflow: hidden;">
                <div style="padding: 1.5rem; background: rgba(255,255,255,0.02); border-bottom: 1px solid var(--glass-border); display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                        <span id="mentor-avatar" style="font-size: 1.2rem;">👨‍🏫</span>
                        <div>
                            <div id="mentor-name" style="font-weight: 800; font-size: 0.9rem;">AI Mentor</div>
                            <div style="font-size: 0.6rem; color: var(--accent-color); text-transform: uppercase;">Frontier Intelligence</div>
                        </div>
                    </div>
                    <button onclick="App.toggleMentorChat()" style="background: none; border: none; color: white; cursor: pointer;">✕</button>
                </div>
                <div id="mentor-messages" style="flex: 1; padding: 1.5rem; overflow-y: auto; font-size: 0.85rem; line-height: 1.5;">
                    <!-- Messages Injected Here -->
                </div>
                <div style="padding: 1.5rem; border-top: 1px solid var(--glass-border); display: flex; gap: 0.5rem;">
                    <input type="text" id="mentor-input" placeholder="Ask your mentor..." style="flex: 1; background: rgba(0,0,0,0.2); border: 1px solid var(--glass-border); border-radius: 8px; padding: 0.8rem; color: white; outline: none;" onkeydown="if(event.key === 'Enter') App.sendMentorMessage()">
                    <button onclick="App.sendMentorMessage()" class="nav-btn primary" style="padding: 0.8rem;">Send</button>
                </div>
            </div>
            
            ${unit.questions && unit.questions.length > 0 ? `
                <div class="quiz-container" id="quiz-container" style="margin-top: 5rem; padding: 4rem 0; border-top: 1px solid var(--glass-border)">
                    <h2 style="font-size: 1.5rem; margin-bottom: 2rem">Graded Quiz</h2>
                    ${savedScore !== undefined ? this.renderQuizResult(savedScore) : `
                        ${unit.questions.map((q, qIdx) => `
                            <div class="quiz-section" style="margin-bottom: 2.5rem">
                                <p style="font-weight: 600; margin-bottom: 1.5rem; font-size: 1.1rem">${qIdx + 1}. ${q.question}</p>
                                <div class="quiz-options" id="options-${qIdx}">
                                    ${q.options.map((opt, oIdx) => `<button class="quiz-option" id="opt-${qIdx}-${oIdx}" onclick="selectAnswer(${qIdx}, ${oIdx})"><span class="radio-indicator"></span>${opt}</button>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                        <div style="text-align:center; margin-top: 3rem"><button class="nav-btn" style="padding: 1rem 3rem; background: var(--accent-color); color: white; border: none" onclick="submitQuiz()">Submit Assessment</button></div>
                    `}
                </div>
            ` : ''}

            <div class="study-notes" style="margin-top: 6rem; padding-top: 3rem; border-top: 1px solid var(--glass-border)">
                <h3 style="font-size: 1.1rem; margin-bottom: 1.5rem">Personal Notes</h3>
                <textarea id="unit-notes" oninput="saveNote('${unitId}', this.value)" style="width:100%; height: 180px; background: var(--sidebar-bg); border: 1px solid var(--glass-border); border-radius: 12px; color: var(--text-primary); padding: 1.5rem; font-family: var(--font-body); font-size: 0.95rem; outline: none">${this.state.notes[unitId] || ''}</textarea>
            </div>
        `;
        this.renderSidebar();
        this.updateNavButtons();
        this.updateProgressUI();
    },

    // --- Standard Methods ---
    renderSidebar() {
        this.els.chapterList.innerHTML = '';
        this.state.chapters.forEach((chapter, cIdx) => {
            const isExpanded = cIdx === this.state.currentChapter || this.state.searchQuery !== '';
            const chapterEl = document.createElement('div');
            chapterEl.className = `chapter-item ${cIdx === this.state.currentChapter ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`;
            chapterEl.innerHTML = `
                <div class="chapter-header" onclick="toggleChapter(${cIdx})">
                    <h3 style="font-size: 0.8rem">${chapter.title}</h3>
                    <span style="font-size: 0.6rem">${isExpanded ? '▼' : '▶'}</span>
                </div>
                <div class="unit-list" style="display: ${isExpanded ? 'block' : 'none'}">
                    ${chapter.units.map((unit, uIdx) => {
                        const id = `${cIdx}-${uIdx}`;
                        const isDone = this.state.completedUnits.includes(id);
                        return `<div class="unit-item ${cIdx === this.state.currentChapter && uIdx === this.state.currentUnit ? 'active' : ''}" onclick="loadUnit(${cIdx}, ${uIdx})">${unit.title} ${isDone ? '✓' : ''}</div>`;
                    }).join('')}
                </div>
            `;
            this.els.chapterList.appendChild(chapterEl);
        });
    },

    selectAnswer(qIdx, oIdx) {
        this.state.selectedAnswers[qIdx] = oIdx;
        const container = document.getElementById(`options-${qIdx}`);
        container.querySelectorAll('.quiz-option').forEach(btn => btn.classList.remove('selected'));
        document.getElementById(`opt-${qIdx}-${oIdx}`).classList.add('selected');
    },

    submitQuiz() {
        const chapter = this.state.chapters[this.state.currentChapter];
        const unit = chapter.units[this.state.currentUnit];
        const total = unit.questions.length;
        if (Object.keys(this.state.selectedAnswers).length < total) { alert("Please answer all questions."); return; }
        let correct = 0;
        unit.questions.forEach((q, i) => { if (this.state.selectedAnswers[i] === q.correctIndex) correct++; });
        const percentage = Math.round((correct / total) * 100);
        const unitId = `${this.state.currentChapter}-${this.state.currentUnit}`;
        this.state.unitScores[unitId] = percentage;
        localStorage.setItem(`${this.state.id}_scores`, JSON.stringify(this.state.unitScores));
        if (percentage >= 80) this.markCompleted(this.state.currentChapter, this.state.currentUnit);
        this.loadUnit(this.state.currentChapter, this.state.currentUnit);
    },

    renderQuizResult(score) {
        const passed = score >= 80;
        return `<div class="stat-card" style="border: 2px solid ${passed ? 'var(--success-color)' : 'var(--error-color)'}; text-align: center; padding: 3rem">
            <h2>${passed ? 'Passed' : 'Failed'}</h2><div class="value">${score}%</div>
            <p>${passed ? 'Mastered!' : 'Please retake to pass.'}</p>
            <button class="nav-btn" onclick="resetQuiz()">Retake Assessment</button>
        </div>`;
    },

    resetQuiz() {
        const id = `${this.state.currentChapter}-${this.state.currentUnit}`;
        delete this.state.unitScores[id];
        localStorage.setItem(`${this.state.id}_scores`, JSON.stringify(this.state.unitScores));
        this.loadUnit(this.state.currentChapter, this.state.currentUnit);
    },

    markCompleted(c, u) {
        const id = `${c}-${u}`;
        if (!this.state.completedUnits.includes(id)) {
            this.state.completedUnits.push(id);
            this.state.xp += 250; // Award Industrial XP
            localStorage.setItem('academy_xp', this.state.xp);
            localStorage.setItem(`${this.state.id}_completed`, JSON.stringify(this.state.completedUnits));
            
            this.renderSidebar();
            this.updateProgressUI();
            this.showNotification(`+250 XP: Module Mastered!`);
            
            // Trigger Certificate ONLY if Final Exam (Module 11) is passed
            if (c === this.state.chapters.length - 1) { 
                const score = this.state.unitScores[id];
                if (score >= 80) {
                    this.state.xp += 1000; // Bonus XP for full certification
                    localStorage.setItem('academy_xp', this.state.xp);
                    this.els.modal.querySelector('h2').textContent = `${this.state.title} Mastered!`;
                    this.els.modal.querySelector('p').textContent = `You have successfully completed all ${this.getTotalUnits()} modules with distinction. +1000 XP Awarded.`;
                    this.els.modal.style.display = 'flex';
                }
            }
        }
    },

    showNotification(msg) {
        const toast = document.createElement('div');
        toast.style = "position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: var(--accent-color); color: white; padding: 1rem 2rem; border-radius: 50px; font-weight: 800; font-size: 0.8rem; z-index: 9999; box-shadow: 0 10px 30px rgba(88,166,255,0.4); animation: slideUp 0.3s ease-out;";
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },

    toggleChapter(i) { this.state.currentChapter = this.state.currentChapter === i ? -1 : i; this.renderSidebar(); },
    navigate(dir) {
        if (this.state.currentChapter === -1) return;
        const chapter = this.state.chapters[this.state.currentChapter];
        let c = this.state.currentChapter, u = this.state.currentUnit + dir;
        if (u >= chapter.units.length) { c++; u = 0; }
        else if (u < 0) { c--; if (c >= 0) u = this.state.chapters[c].units.length - 1; }
        if (c >= 0 && c < this.state.chapters.length) this.loadUnit(c, u);
        else if (c < 0) this.loadDashboard();
    },
    loadGlossary() {
        this.state.currentView = 'glossary';
        this.state.currentChapter = -1;
        this.els.nav.style.display = "none";
        this.renderSidebar();
        let html = `<h2>Glossary</h2><div class="dashboard-grid">`;
        this.state.glossary.sort((a,b) => a.term.localeCompare(b.term)).forEach(i => {
            html += `<div class="stat-card"><h4>${i.term}</h4><p style="font-size: 0.9rem">${i.definition}</p></div>`;
        });
        this.els.content.innerHTML = html + `</div>`;
    },
    updateProgressUI() {
        const total = this.getTotalUnits(), done = this.state.completedUnits.length;
        const p = Math.round((done / total) * 100);
        this.els.progressFill.style.width = `${p}%`;
        this.els.progressPercent.textContent = `${p}%`;
    },
    updateNavButtons() { const isFirst = this.state.currentChapter === 0 && this.state.currentUnit === 0; this.els.prevBtn.textContent = isFirst ? '← Dashboard' : '← Back'; },
    getTotalUnits() { return this.state.chapters.reduce((acc, c) => acc + c.units.length, 0); },
    saveState() { localStorage.setItem(`${this.state.id}_current`, JSON.stringify({ view: this.state.currentView, chapter: this.state.currentChapter, unit: this.state.currentUnit })); },
    toggleTheme() { this.state.theme = document.documentElement.classList.toggle('dark-mode') ? 'dark' : 'light'; localStorage.setItem(`${this.state.id}_theme`, this.state.theme); },
    applyTheme() { if (this.state.theme === 'dark') document.documentElement.classList.add('dark-mode'); },

    toggleMentorChat() {
        const win = document.getElementById('mentor-chat-window');
        const isHidden = win.style.display === 'none';
        win.style.display = isHidden ? 'flex' : 'none';
        
        if (isHidden && document.getElementById('mentor-messages').children.length === 0) {
            const mentor = window.ACADEMY_MENTORS[this.state.id] || window.ACADEMY_MENTORS['finance'];
            document.getElementById('mentor-name').textContent = mentor.name;
            document.getElementById('mentor-messages').innerHTML = `<div class="message system" style="background: rgba(88, 166, 255, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-left: 2px solid var(--accent-color); font-style: italic;">${mentor.welcome}</div>`;
        }
    },

    sendMentorMessage() {
        const input = document.getElementById('mentor-input');
        const messages = document.getElementById('mentor-messages');
        const query = input.value;
        if (!query) return;

        input.value = '';
        messages.innerHTML += `<div class="message user" style="margin-bottom: 1.5rem; text-align: right;"><strong>You:</strong> ${query}</div>`;
        messages.scrollTo(0, messages.scrollHeight);

        const mentor = window.ACADEMY_MENTORS[this.state.id] || window.ACADEMY_MENTORS['finance'];
        
        // Simulated Reasoning Log
        messages.innerHTML += `<div class="message system" style="color: var(--text-dim); font-size: 0.7rem; margin-bottom: 1rem; font-family: 'Fira Code', monospace;">[THINKING]: Analyzing query against ${mentor.knowledge_base[0]} data...</div>`;

        setTimeout(() => {
            const response = `Based on my analysis of your query and the ${this.state.title} curriculum, I recommend focusing on ${mentor.knowledge_base[Math.floor(Math.random() * mentor.knowledge_base.length)]}. This is a critical competency for your final assessment.`;
            messages.innerHTML += `<div class="message assistant" style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;"><strong>${mentor.name}:</strong> ${response}</div>`;
            messages.scrollTo(0, messages.scrollHeight);
        }, 1200);
    },

    renderVideoEngine(unit) {
        const videoKey = `${this.state.id}_${unit.id.split('.')[0]}`;
        const video = (window.ACADEMY_VIDEOS || {})[videoKey] || (window.ACADEMY_VIDEOS || {})['finance_hft']; 
        if (!video) return '';
        const contributor = (window.ACADEMY_CONTRIBUTORS || []).find(c => c.id === video.creator_id) || {name: 'Academy Expert', avatar: '🎓'};

        return `
            <div class="video-streaming-engine animate-slide-up" style="margin-bottom: 4rem;">
                <div class="video-player-frame" style="position: relative; background: #000; border-radius: 32px; overflow: hidden; border: 1px solid var(--glass-border); box-shadow: 0 40px 80px rgba(0,0,0,0.6);">
                    <div style="position: absolute; top: 30px; left: 30px; z-index: 10; background: rgba(0,0,0,0.7); padding: 8px 15px; border-radius: 8px; border: 1px solid var(--accent-color);">
                        <span style="color: var(--accent-color); font-weight: 900; font-size: 0.7rem; letter-spacing: 0.1em;">CINEMA MODE ACTIVE</span>
                    </div>
                    <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                            src="https://www.youtube.com/embed/${video.youtube_id}?modestbranding=1&rel=0&showinfo=0&controls=1" 
                            frameborder="0" allowfullscreen>
                        </iframe>
                    </div>
                    <div class="player-footer" style="padding: 2rem; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.02); backdrop-filter: blur(10px);">
                        <div style="display: flex; align-items: center; gap: 1.5rem;">
                            <div style="font-size: 2rem;">${contributor.avatar}</div>
                            <div>
                                <div style="font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase;">Institutional Contributor</div>
                                <div style="font-weight: 700; font-size: 1.1rem;">${contributor.name}</div>
                            </div>
                        </div>
                        <div style="text-align: right">
                            <div style="font-size: 0.7rem; color: var(--text-dim);">${video.resolution}</div>
                            <div style="color: var(--accent-color); font-weight: 800;">${video.duration} Full Duration</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};

App.init();
