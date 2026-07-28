// 유령 데이터 베이스 예시
const ghosts = [
    { name: "스피릿 (Spirit)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "고스트 라이팅", "스피릿 박스"], tip: "💡 향을 피우면 180초 동안 공격하지 못합니다. (일반 유령은 90초)" },
    { name: "레이스 (Wraith)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "고스트 오브", "DOTS"], tip: "💡 소금을 절대 밟지 않으며, 벽을 관통하여 플레이어 위치로 텔레포트할 수 있습니다." },
    { name: "팬텀 (Phantom)", speed: "1.7 m/s", sanity: "50%", evidence: ["스피릿 박스", "손자국", "DOTS"], tip: "💡 사진을 찍으면 실체가 실시간으로 사라지며, 실체화 시 깜빡이는 주기가 깁니다." },
    { name: "폴터가이스트 (Poltergeist)", speed: "1.7 m/s", sanity: "50%", evidence: ["스피릿 박스", "손자국", "고스트 라이팅"], tip: "💡 여러 물건을 한 번에 날려 정신력을 대폭 감소시키는 폭발 능력이 있습니다." },
    { name: "밴시 (Banshee)", speed: "1.7 m/s", sanity: "50%", evidence: ["손자국", "고스트 오브", "DOTS"], tip: "💡 타겟으로 지정한 1명의 정신력만 기준으로 헌팅을 시작하며, 음파 측정기로 고유 비명을 들려줍니다." },
    { name: "진 (Jinn)", speed: "1.7 ~ 2.5 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "서늘함"], tip: "💡 두꺼비집이 켜져 있을 때 멀리 있는 플레이어를 보면 빠른 속도로 추격합니다." },
    { name: "마레 (Mare)", speed: "1.7 m/s", sanity: "불 꺼짐 60% / 불 켜짐 40%", evidence: ["스피릿 박스", "고스트 오브", "고스트 라이팅"], tip: "💡 어둠 속에서 공격성이 증가하며, 불을 켜면 즉시 스위치를 꺼버리는 특성이 있습니다." },
    { name: "레버넌트 (Revenant)", speed: "1.0 / 3.0 m/s", sanity: "50%", evidence: ["고스트 오브", "고스트 라이팅", "서늘함"], tip: "💡 시야에 플레이어가 없을 때는 매우 둔하지만, 목격 즉시 엄청난 속도로 추격합니다." },
    { name: "셰이드 (Shade)", speed: "1.7 m/s", sanity: "35%", evidence: ["EMF 5", "고스트 라이팅", "서늘함"], tip: "💡 수줍음이 많아 같은 방에 사람이 많으면 행동을 멈추고 헌팅 기준 정신력이 매우 낮습니다." },
    { name: "데몬 (Demon)", speed: "1.7 m/s", sanity: "70%", evidence: ["손자국", "고스트 라이팅", "서늘함"], tip: "💡 정신력과 상관없이 특수 능력으로 헌팅을 시작할 수 있으며, 십자가 영향 범위가 넓습니다." },
    { name: "유레이 (Yurei)", speed: "1.7 m/s", sanity: "50%", evidence: ["고스트 오브", "서늘함", "DOTS"], tip: "💡 문을 세게 닫으며 주변 플레이어의 정신력을 대폭 깎는 능력이 있습니다." },
    { name: "오니 (Oni)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "서늘함", "DOTS"], tip: "💡 활동성이 매우 높으며 실체화 시 모습이 거의 투명해지지 않고 선명하게 보입니다." },
    { name: "요괴 (Yokai)", speed: "1.7 m/s", sanity: "80% (목소리 반응)", evidence: ["스피릿 박스", "고스트 오브", "DOTS"], tip: "💡 근처에서 목소리를 내면 높은 정신력에서도 헌팅하며, 헌팅 중 청력이 매우 둔합니다." },
    { name: "한투 (Hantu)", speed: "1.4 ~ 2.7 m/s", sanity: "50%", evidence: ["손자국", "고스트 오브", "서늘함"], tip: "💡 온도가 낮은 방일수록 이동 속도가 빠르며, 두꺼비집을 켜는 것을 싫어합니다." },
    { name: "고료 (Goryo)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "DOTS"], tip: "💡 DOTS 증거는 비디오 카메라를 통해서만 확인할 수 있으며, 다른 방으로 이사를 잘 가지 않습니다." },
    { name: "마이링 (Myling)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "고스트 라이팅"], tip: "💡 헌팅 시 발소리가 매우 조용하여 가까이 접근할 때까지 잘 들리지 않습니다." },
    { name: "온료 (Onryo)", speed: "1.7 m/s", sanity: "60%", evidence: ["스피릿 박스", "고스트 오브", "서늘함"], tip: "💡 불꽃(촛불)을 두려워하며, 촛불이 3번 꺼질 때마다 확정적으로 헌팅을 시도합니다." },
    { name: "라이주 (Raiju)", speed: "1.7 ~ 2.5 m/s", sanity: "65%", evidence: ["EMF 5", "고스트 오브", "DOTS"], tip: "💡 작동 중인 전자제품 근처에서 속도가 빨라지며, 장비 교란 범위를 넓게 가집니다." },
    { name: "오바케 (Obake)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "고스트 오브"], tip: "💡 6손가락 지문을 남길 확률이 있으며, 헌팅 도중 순간적으로 다른 유령으로 변신합니다." },
    { name: "미믹 (The Mimic)", speed: "변동 (복제)", sanity: "변동", evidence: ["스피릿 박스", "손자국", "서늘함"], tip: "💡 다른 유령의 특성을 복제하며, 항상 거짓 증거로 '고스트 오브'를 보여줍니다." },
    { name: "모로이 (Moroi)", speed: "1.5 ~ 2.25 m/s", sanity: "50%", evidence: ["스피릿 박스", "고스트 라이팅", "서늘함"], tip: "💡 스피릿 박스 음성을 들은 조사관에게 저주를 걸어 정신력을 빠르게 깎으며, 정신력이 낮을수록 속도가 빨라집니다." },
    { name: "데오겐 (Deogen)", speed: "0.4 ~ 3.0 m/s", sanity: "40%", evidence: ["스피릿 박스", "고스트 라이팅", "DOTS"], tip: "💡 숨어있는 플레이어의 위치를 항상 알고 다가오며, 가깝게 접근하면 속도가 현저히 느려집니다. 스피릿 박스 특수 숨소리 주파수가 존재합니다." },
    { name: "타에 (Thaye)", speed: "1.0 ~ 2.75 m/s", sanity: "75%", evidence: ["고스트 오브", "고스트 라이팅", "DOTS"], tip: "💡 초기에는 매우 빠르고 공격적이지만, 플레이어가 근처에 머물수록 나이를 먹어 약해집니다." }
];

const selectedIncludes = new Set();
const selectedExcludes = new Set();

// 네비게이션 탭 전환
function switchTab(tabName) {
    document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// UI 렌더링 함수
function renderUI() {
    const container = document.getElementById('ghost-list-container');
    const countBadge = document.getElementById('ghost-count');

    const filtered = ghosts.filter(ghost => {
        for (let inc of selectedIncludes) {
            if (!ghost.evidence.includes(inc)) {
                if (ghost.name.includes("미믹") && inc === "고스트 오브") continue;
                return false;
            }
        }
        for (let exc of selectedExcludes) {
            if (ghost.evidence.includes(exc)) {
                if (ghost.name.includes("미믹") && exc === "고스트 오브") return false;
                return false;
            }
        }
        return true;
    });

    countBadge.innerText = filtered.length;

    container.innerHTML = filtered.map(ghost => `
        <div class="ghost-card">
            <div class="ghost-card-header">
                <span class="ghost-name">${ghost.name}</span>
                <div class="ghost-badge-group">
                    <span class="ghost-speed">속도: ${ghost.speed}</span>
                    <span class="ghost-sanity">정신력 기준: ${ghost.sanity}</span>
                </div>
            </div>
            <div class="ghost-evidences">
                ${ghost.evidence.map(ev => `
                    <span class="ev-tag ${selectedIncludes.has(ev) ? 'matched' : ''}">${ev}</span>
                `).join('')}
                ${ghost.name.includes("미믹") ? '<span class="ev-tag matched" style="border-color:#38bdf8; color:#38bdf8;">+고스트 오브(특수)</span>' : ''}
            </div>
            <details class="ghost-details">
                <summary class="ghost-summary">
                    <span>💡 상세 정보 및 특징</span>
                    <span class="more-btn">더보기 ▾</span>
                </summary>
                <div class="ghost-tip-content">
                    ${ghost.tip}
                </div>
            </details>
        </div>
    `).join('');
}

// 증거 버튼 이벤트
document.querySelectorAll('.evidence-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const ev = btn.dataset.evidence;
        if (!selectedIncludes.has(ev) && !selectedExcludes.has(ev)) {
            selectedIncludes.add(ev);
            btn.classList.add('included');
        } else if (selectedIncludes.has(ev)) {
            selectedIncludes.delete(ev);
            btn.classList.remove('included');
            selectedExcludes.add(ev);
            btn.classList.add('excluded');
        } else {
            selectedExcludes.delete(ev);
            btn.classList.remove('excluded');
        }
        renderUI();
    });
});

// 초기화
document.getElementById('reset-btn').addEventListener('click', () => {
    selectedIncludes.clear();
    selectedExcludes.clear();
    document.querySelectorAll('.evidence-btn').forEach(btn => {
        btn.classList.remove('included', 'excluded');
    });
    renderUI();
});

// ==========================================
// 상단 검색창 및 우측 슬라이드 패널 연동
// ==========================================

const panelData = {
    search: {
        title: "🔍 유령 정보 실시간 검색",
        content: `
            <input type="text" id="quick-search-input" class="search-input-box" placeholder="유령 이름 또는 특징 검색 (예: 데오겐, 향, 소금)..." onkeyup="handleQuickSearch(this.value)">
            <div id="quick-search-results">
                <p style="color: var(--text-secondary); font-size: 0.85rem;">검색어를 입력하시면 관련 유령 정보가 바로 나타납니다.</p>
            </div>
        `
    },
    news: {
        title: "📢 최신 업데이트 & 공지",
        content: `
            <div style="background: rgba(56, 189, 248, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid #38bdf8; margin-bottom: 12px;">
                <strong>치트시트 VER 1.0 오픈!</strong><br>
                파스모포비아 유령 정보 계산기가 업그레이드 되었습니다.
            </div>
            <p style="margin-bottom: 6px;">• 6 Tanglewood Drive 리워크 관련 최신 정보 반영 중</p>
            <p>• 데오겐 특수 숨소리 주파수 가이드 추가 예정</p>
        `
    },
    stream: {
        title: "📺 라이브 방송 안내",
        content: `
            <p style="margin-bottom: 12px;">라이브 방송에서 더 상세한 유령 동선 공략과 가이드를 함께 확인해보세요!</p>
            <a href="#" target="_blank" style="display: block; background: #ef4444; color: #fff; text-align: center; padding: 10px; border-radius: 6px; text-decoration: none; font-weight: bold;">방송 채널 바로가기</a>
        `
    },
    community: {
        title: "💬 커뮤니티",
        content: `
            <p>시청자 및 게이머분들과 소통하고 제보를 받는 공간입니다.</p>
        `
    },
    contact: {
        title: "✉️ 문의 및 제보",
        content: `
            <div style="background: rgba(255, 255, 255, 0.05); padding: 14px; border-radius: 8px; border: 1px solid var(--card-border);">
                <p style="font-weight: bold; margin-bottom: 8px; color: var(--accent-blue);">피드백 및 정보 제보</p>
                <p style="margin-bottom: 10px; font-size: 0.85rem; color: var(--text-secondary);">치트시트 데이터 오류 제보 및 건의사항은 아래 채널로 전달해 주세요.</p>
                <p style="margin-bottom: 6px;">📧 <strong>이메일:</strong> contact@example.com</p>
                <p>💬 <strong>방송/디스코드:</strong> 방송 중 채팅 또는 커뮤니티 제보</p>
            </div>
        `
    }
};

function toggleQuickPanel(type) {
    const panel = document.getElementById('quick-slide-panel');
    const titleEl = document.getElementById('quick-panel-title');
    const contentEl = document.getElementById('quick-panel-content');

    if (panelData[type]) {
        titleEl.innerText = panelData[type].title;
        contentEl.innerHTML = panelData[type].content;
        panel.classList.add('open');

        if (type === 'search') {
            setTimeout(() => {
                const searchInput = document.getElementById('quick-search-input');
                if (searchInput) searchInput.focus();
            }, 100);
        }
    }
}

function closeQuickPanel() {
    const panel = document.getElementById('quick-slide-panel');
    panel.classList.remove('open');
}

function openSearchPanel() {
    toggleQuickPanel('search');
}

function handleHeaderSearch(query) {
    const panel = document.getElementById('quick-slide-panel');
    if (!panel.classList.contains('open')) {
        toggleQuickPanel('search');
    }
    const panelInput = document.getElementById('quick-search-input');
    if (panelInput) {
        panelInput.value = query;
        handleQuickSearch(query);
    }
}

function handleQuickSearch(query) {
    const resultBox = document.getElementById('quick-search-results');
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
        resultBox.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.85rem;">검색어를 입력하시면 관련 유령 정보가 바로 나타납니다.</p>';
        return;
    }

    const matchedGhosts = ghosts.filter(g => 
        g.name.toLowerCase().includes(keyword) || 
        g.tip.toLowerCase().includes(keyword) ||
        g.evidence.some(ev => ev.toLowerCase().includes(keyword))
    );

    if (matchedGhosts.length === 0) {
        resultBox.innerHTML = '<p style="color: #ef4444; font-size: 0.85rem;">검색 결과가 없습니다.</p>';
        return;
    }

    resultBox.innerHTML = matchedGhosts.map(g => `
        <div class="search-result-card">
            <div class="search-result-title">${g.name}</div>
            <div style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 4px;">속도: ${g.speed} | 정신력: ${g.sanity}</div>
            <div style="font-size: 0.82rem; line-height: 1.4; color: var(--text-primary);">${g.tip}</div>
        </div>
    `).join('');
}

// 최초 실행
renderUI();
