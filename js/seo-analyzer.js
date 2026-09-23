/* ============================================
   SEO Analyzer Engine
   ============================================ */

const SEOAnalyzer = {
    results: null,
    currentUrl: '',

    async analyze(url) {
        this.currentUrl = url;
        this.showLoading();

        // Simulate analysis delay for UX
        await new Promise(resolve => setTimeout(resolve, 1500));

        // For demo purposes, analyze the current site's pages
        const pageData = this.getPageData(url);
        this.results = this.performAudit(pageData);

        this.hideLoading();
        this.renderResults();
    },

    getPageData(url) {
        // Simulated page data for each page of this site
        const pages = {
            'index.html': {
                title: 'NovaTech — Premium Tech & Electronics | Shop Latest Gadgets',
                description: 'Discover cutting-edge electronics and premium tech at NovaTech. Shop headphones, laptops, smartwatches, and more with free shipping on orders over $100.',
                h1: 'Discover Premium Tech',
                headings: { h1: 1, h2: 4, h3: 8, h4: 3 },
                images: { total: 16, withAlt: 16, withoutAlt: 0 },
                wordCount: 850,
                links: { internal: 24, external: 3 },
                hasCanonical: true,
                hasRobots: true,
                hasSitemap: true,
                hasSSL: true,
                hasViewport: true,
                hasFavicon: true,
                hasOG: true,
                hasTwitterCard: true,
                hasSchema: true,
                schemaTypes: ['WebSite', 'Organization', 'Product'],
                loadTime: 1.2,
                mobileOptimized: true,
                keywords: ['premium tech', 'electronics', 'headphones', 'laptop', 'smartwatch', 'gadgets', 'online store', 'NovaTech', 'shop', 'free shipping', 'gaming', 'audio']
            },
            'products.html': {
                title: 'Shop All Products — NovaTech | Premium Electronics Collection',
                description: 'Browse our complete collection of premium electronics. Filter by category, price, and rating. Free shipping on orders over $100.',
                h1: 'All Products',
                headings: { h1: 1, h2: 2, h3: 12 },
                images: { total: 12, withAlt: 12, withoutAlt: 0 },
                wordCount: 620,
                links: { internal: 18, external: 0 },
                hasCanonical: true,
                hasRobots: true,
                hasSitemap: true,
                hasSSL: true,
                hasViewport: true,
                hasFavicon: true,
                hasOG: true,
                hasTwitterCard: true,
                hasSchema: true,
                schemaTypes: ['ItemList', 'Product'],
                loadTime: 1.5,
                mobileOptimized: true,
                keywords: ['products', 'electronics', 'audio', 'gaming', 'computers', 'cameras', 'shop', 'collection', 'filter', 'premium']
            },
            'about.html': {
                title: 'About NovaTech — Our Story & Mission | Premium Tech Retailer',
                description: 'Learn about NovaTech, our mission to deliver premium technology, and the passionate team behind the brand. Established 2020.',
                h1: 'About NovaTech',
                headings: { h1: 1, h2: 3, h3: 4 },
                images: { total: 5, withAlt: 5, withoutAlt: 0 },
                wordCount: 720,
                links: { internal: 12, external: 2 },
                hasCanonical: true,
                hasRobots: true,
                hasSitemap: true,
                hasSSL: true,
                hasViewport: true,
                hasFavicon: true,
                hasOG: true,
                hasTwitterCard: true,
                hasSchema: true,
                schemaTypes: ['Organization', 'AboutPage'],
                loadTime: 0.9,
                mobileOptimized: true,
                keywords: ['about', 'NovaTech', 'store', 'mission', 'team', 'premium', 'technology', 'brand', 'quality']
            },
            'contact.html': {
                title: 'Contact Us — NovaTech | Get in Touch',
                description: 'Have questions? Contact NovaTech via email, phone, or our contact form. Our support team is available 24/7.',
                h1: 'Get in Touch',
                headings: { h1: 1, h2: 2, h3: 3 },
                images: { total: 1, withAlt: 1, withoutAlt: 0 },
                wordCount: 340,
                links: { internal: 8, external: 1 },
                hasCanonical: true,
                hasRobots: true,
                hasSitemap: true,
                hasSSL: true,
                hasViewport: true,
                hasFavicon: true,
                hasOG: true,
                hasTwitterCard: true,
                hasSchema: true,
                schemaTypes: ['Organization', 'ContactPage'],
                loadTime: 0.7,
                mobileOptimized: true,
                keywords: ['contact', 'support', 'email', 'phone', 'help', 'NovaTech', 'store']
            },
            'seo-dashboard.html': {
                title: 'SEO Dashboard — NovaTech | SEO Analysis Tool',
                description: 'Analyze SEO health of any page with our built-in SEO audit tool. Check meta tags, keywords, structured data, and more.',
                h1: 'SEO Analysis Dashboard',
                headings: { h1: 1, h2: 5, h3: 6 },
                images: { total: 0, withAlt: 0, withoutAlt: 0 },
                wordCount: 480,
                links: { internal: 10, external: 0 },
                hasCanonical: true,
                hasRobots: true,
                hasSitemap: true,
                hasSSL: true,
                hasViewport: true,
                hasFavicon: true,
                hasOG: true,
                hasTwitterCard: true,
                hasSchema: true,
                schemaTypes: ['WebPage'],
                loadTime: 0.8,
                mobileOptimized: true,
                keywords: ['SEO', 'analysis', 'dashboard', 'audit', 'meta tags', 'keywords', 'structured data', 'optimization']
            }
        };

        // Extract page name from URL
        let pageName = url.split('/').pop() || 'index.html';
        if (!pageName.includes('.html')) pageName = 'index.html';

        return pages[pageName] || pages['index.html'];
    },

    performAudit(data) {
        const checks = [];
        let totalScore = 0;
        let maxScore = 0;

        // === Meta Tags ===
        // Title
        const titleLength = data.title ? data.title.length : 0;
        const titleScore = titleLength >= 30 && titleLength <= 65 ? 10 : (titleLength > 0 ? 6 : 0);
        checks.push({
            category: 'Meta Tags',
            name: 'Title Tag',
            status: titleScore === 10 ? 'pass' : titleScore > 0 ? 'warn' : 'fail',
            message: data.title ? `"${data.title}" (${titleLength} chars)` : 'Missing title tag',
            recommendation: titleLength < 30 ? 'Title is too short. Aim for 30-65 characters.' : titleLength > 65 ? 'Title is too long. Keep under 65 characters.' : 'Good length.'
        });
        totalScore += titleScore; maxScore += 10;

        // Description
        const descLength = data.description ? data.description.length : 0;
        const descScore = descLength >= 120 && descLength <= 160 ? 10 : (descLength > 0 ? 6 : 0);
        checks.push({
            category: 'Meta Tags',
            name: 'Meta Description',
            status: descScore === 10 ? 'pass' : descScore > 0 ? 'warn' : 'fail',
            message: data.description ? `"${data.description.substring(0, 80)}..." (${descLength} chars)` : 'Missing meta description',
            recommendation: descLength < 120 ? 'Description is too short. Aim for 120-160 characters.' : descLength > 160 ? 'Description is too long. Keep under 160 characters.' : 'Optimal length.'
        });
        totalScore += descScore; maxScore += 10;

        // Canonical
        checks.push({
            category: 'Meta Tags',
            name: 'Canonical URL',
            status: data.hasCanonical ? 'pass' : 'fail',
            message: data.hasCanonical ? 'Canonical URL is set' : 'Missing canonical URL',
            recommendation: data.hasCanonical ? 'Properly configured.' : 'Add a canonical URL to prevent duplicate content issues.'
        });
        totalScore += data.hasCanonical ? 5 : 0; maxScore += 5;

        // Viewport
        checks.push({
            category: 'Meta Tags',
            name: 'Viewport Meta',
            status: data.hasViewport ? 'pass' : 'fail',
            message: data.hasViewport ? 'Viewport meta tag present' : 'Missing viewport meta tag',
            recommendation: data.hasViewport ? 'Properly configured for mobile.' : 'Add viewport meta tag for mobile responsiveness.'
        });
        totalScore += data.hasViewport ? 5 : 0; maxScore += 5;

        // === Content ===
        // H1
        const h1Score = data.headings.h1 === 1 ? 10 : (data.headings.h1 > 1 ? 4 : 0);
        checks.push({
            category: 'Content',
            name: 'H1 Tag',
            status: h1Score === 10 ? 'pass' : h1Score > 0 ? 'warn' : 'fail',
            message: `Found ${data.headings.h1} H1 tag(s): "${data.h1}"`,
            recommendation: data.headings.h1 === 1 ? 'Perfect — one H1 per page.' : data.headings.h1 > 1 ? 'Multiple H1 tags found. Use only one H1 per page.' : 'Missing H1 tag.'
        });
        totalScore += h1Score; maxScore += 10;

        // Heading Hierarchy
        const hasProperHierarchy = data.headings.h1 > 0 && data.headings.h2 > 0;
        checks.push({
            category: 'Content',
            name: 'Heading Hierarchy',
            status: hasProperHierarchy ? 'pass' : 'warn',
            message: `H1: ${data.headings.h1}, H2: ${data.headings.h2}, H3: ${data.headings.h3 || 0}`,
            recommendation: hasProperHierarchy ? 'Proper heading hierarchy maintained.' : 'Ensure proper H1 → H2 → H3 hierarchy.'
        });
        totalScore += hasProperHierarchy ? 5 : 2; maxScore += 5;

        // Word Count
        const wcScore = data.wordCount >= 300 ? 10 : (data.wordCount >= 100 ? 5 : 2);
        checks.push({
            category: 'Content',
            name: 'Word Count',
            status: wcScore === 10 ? 'pass' : 'warn',
            message: `${data.wordCount} words`,
            recommendation: data.wordCount >= 300 ? 'Good content length.' : 'Consider adding more content for better SEO.'
        });
        totalScore += wcScore; maxScore += 10;

        // Images Alt Text
        const imgScore = data.images.total === 0 ? 5 : (data.images.withoutAlt === 0 ? 10 : 4);
        checks.push({
            category: 'Content',
            name: 'Image Alt Texts',
            status: imgScore >= 8 ? 'pass' : imgScore > 3 ? 'warn' : 'fail',
            message: `${data.images.withAlt}/${data.images.total} images have alt text`,
            recommendation: data.images.withoutAlt === 0 ? 'All images have alt text.' : `${data.images.withoutAlt} images missing alt text.`
        });
        totalScore += imgScore; maxScore += 10;

        // === Technical ===
        // SSL
        checks.push({
            category: 'Technical',
            name: 'HTTPS / SSL',
            status: data.hasSSL ? 'pass' : 'fail',
            message: data.hasSSL ? 'Site uses HTTPS' : 'Site does not use HTTPS',
            recommendation: data.hasSSL ? 'Secure connection confirmed.' : 'Migrate to HTTPS for security and SEO ranking.'
        });
        totalScore += data.hasSSL ? 5 : 0; maxScore += 5;

        // Mobile
        checks.push({
            category: 'Technical',
            name: 'Mobile Optimization',
            status: data.mobileOptimized ? 'pass' : 'fail',
            message: data.mobileOptimized ? 'Site is mobile-optimized' : 'Not mobile-optimized',
            recommendation: data.mobileOptimized ? 'Responsive design detected.' : 'Add responsive design for mobile users.'
        });
        totalScore += data.mobileOptimized ? 10 : 0; maxScore += 10;

        // Page Speed
        const speedScore = data.loadTime <= 1.5 ? 10 : (data.loadTime <= 3 ? 6 : 2);
        checks.push({
            category: 'Technical',
            name: 'Page Load Time',
            status: speedScore === 10 ? 'pass' : speedScore > 4 ? 'warn' : 'fail',
            message: `Estimated ${data.loadTime}s load time`,
            recommendation: data.loadTime <= 1.5 ? 'Excellent load time.' : 'Optimize images and assets to reduce load time.'
        });
        totalScore += speedScore; maxScore += 10;

        // Robots.txt
        checks.push({
            category: 'Technical',
            name: 'robots.txt',
            status: data.hasRobots ? 'pass' : 'fail',
            message: data.hasRobots ? 'robots.txt found' : 'robots.txt missing',
            recommendation: data.hasRobots ? 'Properly configured.' : 'Create a robots.txt file.'
        });
        totalScore += data.hasRobots ? 5 : 0; maxScore += 5;

        // Sitemap
        checks.push({
            category: 'Technical',
            name: 'XML Sitemap',
            status: data.hasSitemap ? 'pass' : 'fail',
            message: data.hasSitemap ? 'Sitemap available' : 'Sitemap missing',
            recommendation: data.hasSitemap ? 'XML sitemap found.' : 'Create an XML sitemap for better crawling.'
        });
        totalScore += data.hasSitemap ? 5 : 0; maxScore += 5;

        // === Social / Structured Data ===
        // Open Graph
        checks.push({
            category: 'Social',
            name: 'Open Graph Tags',
            status: data.hasOG ? 'pass' : 'fail',
            message: data.hasOG ? 'Open Graph meta tags present' : 'Missing Open Graph tags',
            recommendation: data.hasOG ? 'Social sharing optimized.' : 'Add og:title, og:description, og:image tags.'
        });
        totalScore += data.hasOG ? 5 : 0; maxScore += 5;

        // Twitter Card
        checks.push({
            category: 'Social',
            name: 'Twitter Cards',
            status: data.hasTwitterCard ? 'pass' : 'fail',
            message: data.hasTwitterCard ? 'Twitter Card tags present' : 'Missing Twitter Card tags',
            recommendation: data.hasTwitterCard ? 'Twitter sharing optimized.' : 'Add twitter:card meta tags.'
        });
        totalScore += data.hasTwitterCard ? 5 : 0; maxScore += 5;

        // Schema.org
        const schemaScore = data.hasSchema ? 10 : 0;
        checks.push({
            category: 'Social',
            name: 'Schema.org / JSON-LD',
            status: data.hasSchema ? 'pass' : 'fail',
            message: data.hasSchema ? `Structured data found: ${data.schemaTypes.join(', ')}` : 'No structured data found',
            recommendation: data.hasSchema ? 'Rich snippets enabled.' : 'Add JSON-LD structured data for rich search results.'
        });
        totalScore += schemaScore; maxScore += 10;

        // Internal Links
        const linkScore = data.links.internal >= 5 ? 5 : 2;
        checks.push({
            category: 'Content',
            name: 'Internal Links',
            status: linkScore === 5 ? 'pass' : 'warn',
            message: `${data.links.internal} internal, ${data.links.external} external links`,
            recommendation: data.links.internal >= 5 ? 'Good internal linking.' : 'Add more internal links for better crawlability.'
        });
        totalScore += linkScore; maxScore += 5;

        const overallScore = Math.round((totalScore / maxScore) * 100);

        return {
            score: overallScore,
            checks,
            keywords: data.keywords || [],
            data,
            totalScore,
            maxScore
        };
    },

    showLoading() {
        const loading = document.getElementById('dashboardLoading');
        const results = document.getElementById('dashboardResults');
        if (loading) loading.style.display = 'flex';
        if (results) results.classList.remove('active');
    },

    hideLoading() {
        const loading = document.getElementById('dashboardLoading');
        const results = document.getElementById('dashboardResults');
        if (loading) loading.style.display = 'none';
        if (results) results.classList.add('active');
    },

    renderResults() {
        if (!this.results) return;

        this.renderGauge();
        this.renderStats();
        this.renderChecklist();
        this.renderKeywords();
        this.renderOGPreview();
    },

    renderGauge() {
        const score = this.results.score;
        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (score / 100) * circumference;

        let gradeClass, gradeText, fillClass;
        if (score >= 90) { gradeClass = 'grade-excellent'; gradeText = 'Excellent'; fillClass = 'excellent'; }
        else if (score >= 70) { gradeClass = 'grade-good'; gradeText = 'Good'; fillClass = 'good'; }
        else if (score >= 50) { gradeClass = 'grade-fair'; gradeText = 'Fair'; fillClass = 'fair'; }
        else { gradeClass = 'grade-poor'; gradeText = 'Poor'; fillClass = 'poor'; }

        let scoreColor;
        if (score >= 90) scoreColor = '#38ef7d';
        else if (score >= 70) scoreColor = '#667eea';
        else if (score >= 50) scoreColor = '#f5af19';
        else scoreColor = '#f5576c';

        const gaugeEl = document.getElementById('scoreGauge');
        if (gaugeEl) {
            gaugeEl.innerHTML = `
                <div class="gauge-circle">
                    <svg viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:${scoreColor}" />
                                <stop offset="100%" style="stop-color:${scoreColor}88" />
                            </linearGradient>
                        </defs>
                        <circle class="gauge-bg" cx="100" cy="100" r="90"/>
                        <circle class="gauge-fill ${fillClass}" cx="100" cy="100" r="90"
                                stroke="url(#gaugeGrad)"
                                stroke-dasharray="${circumference}"
                                stroke-dashoffset="${circumference}"
                                style="transition: stroke-dashoffset 1.5s ease;"/>
                    </svg>
                    <div class="gauge-score">
                        <div class="score-number" style="color:${scoreColor}">0</div>
                        <div class="score-label">/ 100</div>
                    </div>
                </div>
                <span class="score-grade ${gradeClass}">${gradeText}</span>
            `;

            // Animate score
            setTimeout(() => {
                const fillCircle = gaugeEl.querySelector('.gauge-fill');
                if (fillCircle) fillCircle.style.strokeDashoffset = offset;

                const scoreNum = gaugeEl.querySelector('.score-number');
                if (scoreNum) {
                    let current = 0;
                    const interval = setInterval(() => {
                        current += 1;
                        if (current > score) { clearInterval(interval); return; }
                        scoreNum.textContent = current;
                    }, 15);
                }
            }, 200);
        }
    },

    renderStats() {
        const checks = this.results.checks;
        const categories = ['Meta Tags', 'Content', 'Technical', 'Social'];
        const icons = { 'Meta Tags': '🏷️', 'Content': '📝', 'Technical': '⚙️', 'Social': '📱' };
        const statIcons = { 'Meta Tags': 'meta', 'Content': 'content', 'Technical': 'technical', 'Social': 'social' };
        const barFills = { 'Meta Tags': 'fill-blue', 'Content': 'fill-green', 'Technical': 'fill-orange', 'Social': 'fill-pink' };

        const statsContainer = document.getElementById('scoreStats');
        if (!statsContainer) return;

        statsContainer.innerHTML = categories.map(cat => {
            const catChecks = checks.filter(c => c.category === cat);
            const passed = catChecks.filter(c => c.status === 'pass').length;
            const total = catChecks.length;
            const pct = Math.round((passed / total) * 100);
            const statusClass = pct >= 80 ? 'status-pass' : pct >= 50 ? 'status-warn' : 'status-fail';

            return `
                <div class="score-stat-card fade-in">
                    <div class="stat-header">
                        <span class="stat-icon ${statIcons[cat]}">${icons[cat]}</span>
                        <span class="stat-status ${statusClass}">${passed}/${total} Passed</span>
                    </div>
                    <div class="stat-title">${cat}</div>
                    <div class="stat-value">${pct}%</div>
                    <div class="stat-bar">
                        <div class="stat-bar-fill ${barFills[cat]}" style="width:0%"></div>
                    </div>
                </div>
            `;
        }).join('');

        // Animate bars
        setTimeout(() => {
            statsContainer.querySelectorAll('.stat-bar-fill').forEach((bar, i) => {
                const catChecks = checks.filter(c => c.category === categories[i]);
                const passed = catChecks.filter(c => c.status === 'pass').length;
                const pct = Math.round((passed / catChecks.length) * 100);
                bar.style.width = `${pct}%`;
            });
            statsContainer.querySelectorAll('.fade-in').forEach((el, i) => {
                setTimeout(() => el.classList.add('visible'), i * 100);
            });
        }, 300);
    },

    renderChecklist() {
        const container = document.getElementById('auditChecklist');
        if (!container) return;

        const categories = ['Meta Tags', 'Content', 'Technical', 'Social'];
        const icons = { pass: '✓', fail: '✕', warn: '⚠' };

        container.innerHTML = categories.map(cat => {
            const catChecks = this.results.checks.filter(c => c.category === cat);
            return `
                <div class="audit-section">
                    <h3 class="audit-section-title">${cat}</h3>
                    <div class="audit-grid">
                        ${catChecks.map(check => `
                            <div class="audit-item fade-in">
                                <div class="audit-status-icon ${check.status}">${icons[check.status]}</div>
                                <div>
                                    <div class="audit-item-title">${check.name}</div>
                                    <div class="audit-item-desc">${check.message}</div>
                                    <div class="audit-item-desc" style="color:var(--text-muted);margin-top:4px;font-style:italic;">${check.recommendation}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

        setTimeout(() => {
            container.querySelectorAll('.fade-in').forEach((el, i) => {
                setTimeout(() => el.classList.add('visible'), i * 50);
            });
        }, 500);
    },

    renderKeywords() {
        const container = document.getElementById('keywordAnalysis');
        if (!container) return;

        const keywords = this.results.keywords;
        const totalWords = this.results.data.wordCount;

        // Simulate keyword frequency
        const keywordData = keywords.map((kw, i) => {
            const count = Math.floor(Math.random() * 12) + 2;
            const density = ((count / totalWords) * 100).toFixed(2);
            return { keyword: kw, count, density: parseFloat(density) };
        }).sort((a, b) => b.count - a.count);

        const maxCount = Math.max(...keywordData.map(k => k.count));

        container.innerHTML = `
            <table class="keyword-table">
                <thead>
                    <tr>
                        <th>Keyword</th>
                        <th>Count</th>
                        <th>Density</th>
                        <th>Frequency</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${keywordData.map(kw => {
                        const barWidth = (kw.count / maxCount) * 100;
                        const densityClass = kw.density >= 1 && kw.density <= 3 ? 'density-good' :
                                            kw.density > 3 ? 'density-high' : 'density-low';
                        const densityLabel = kw.density >= 1 && kw.density <= 3 ? 'Optimal' :
                                            kw.density > 3 ? 'High' : 'Low';
                        return `
                            <tr>
                                <td><strong>${kw.keyword}</strong></td>
                                <td>${kw.count}</td>
                                <td>${kw.density}%</td>
                                <td>
                                    <div class="keyword-bar">
                                        <div class="keyword-bar-inner" style="width:${barWidth}%"></div>
                                    </div>
                                </td>
                                <td><span class="density-badge ${densityClass}">${densityLabel}</span></td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    },

    renderOGPreview() {
        const container = document.getElementById('ogPreview');
        if (!container) return;

        const data = this.results.data;

        container.innerHTML = `
            <div class="og-preview-tabs">
                <button class="og-tab active" onclick="switchOGTab(this, 'facebook')">Facebook</button>
                <button class="og-tab" onclick="switchOGTab(this, 'twitter')">Twitter</button>
                <button class="og-tab" onclick="switchOGTab(this, 'linkedin')">LinkedIn</button>
            </div>
            <div class="og-preview-card">
                <div class="og-preview-image">
                    <span style="font-size:2rem;">🖼️ og:image preview</span>
                </div>
                <div class="og-preview-content">
                    <div class="og-preview-domain">${this.currentUrl.replace(/https?:\/\//, '').split('/')[0] || 'luxestore.com'}</div>
                    <div class="og-preview-title">${data.title}</div>
                    <div class="og-preview-desc">${data.description}</div>
                </div>
            </div>
        `;
    }
};

function switchOGTab(tab, platform) {
    document.querySelectorAll('.og-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    const analyzeForm = document.getElementById('seoAnalyzeForm');
    if (analyzeForm) {
        analyzeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const url = document.getElementById('seoUrlInput').value.trim();
            if (url) SEOAnalyzer.analyze(url);
        });
    }

    // Quick links
    document.querySelectorAll('.quick-link').forEach(link => {
        link.addEventListener('click', () => {
            const url = link.dataset.url;
            document.getElementById('seoUrlInput').value = url;
            SEOAnalyzer.analyze(url);
        });
    });
});
