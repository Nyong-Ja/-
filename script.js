// 1. 유령 기본 데이터 (증거 계산기용)
const ghosts = [
    { name: "스피릿 (Spirit)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "고스트 라이팅", "스피릿 박스"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 향을 피우면 180초 동안 공격하지 못합니다. (일반 유령은 90초)" },
    { name: "레이스 (Wraith)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "고스트 오브", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: true, tip: "💡 소금을 절대 밟지 않으며, 벽을 관통하여 플레이어 위치로 텔레포트할 수 있습니다." },
    { name: "팬텀 (Phantom)", speed: "1.7 m/s", sanity: "50%", evidence: ["스피릿 박스", "손자국", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: true, tip: "💡 사진을 찍으면 실체가 실시간으로 사라지며, 플레이어 위치로 걸어오는 특성이 있습니다." },
    { name: "폴터가이스트 (Poltergeist)", speed: "1.7 m/s", sanity: "50%", evidence: ["스피릿 박스", "손자국", "고스트 라이팅"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 여러 물건을 한 번에 날려 정신력을 대폭 감소시키는 폭발 능력이 있습니다." },
    { name: "밴시 (Banshee)", speed: "1.7 m/s", sanity: "50%", evidence: ["손자국", "고스트 오브", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: true, tip: "💡 타겟으로 지정한 1명을 쫓아 로밍하며, 음파 측정기로 고유 비명을 들려줍니다." },
    { name: "진 (Jinn)", speed: "1.7 ~ 2.5 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "서늘함"], hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false, tip: "💡 두꺼비집이 켜져 있을 때 멀리 있는 플레이어를 보면 빠른 속도로 가속 추격합니다." },
    { name: "마레 (Mare)", speed: "1.7 m/s", sanity: "불 꺼짐 60% / 불 켜짐 40%", evidence: ["스피릿 박스", "고스트 오브", "고스트 라이팅"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 어둠 속에서 공격성이 증가하며, 불을 켜면 즉시 스위치를 꺼버리는 특성이 있습니다." },
    { name: "레버넌트 (Revenant)", speed: "1.0 / 3.0 m/s", sanity: "50%", evidence: ["고스트 오브", "고스트 라이팅", "서늘함"], hasAccel: false, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false, tip: "💡 시야 가속이 없지만, 시야에 플레이어가 없을 때는 1.0 m/s, 목격 즉시 3.0 m/s로 고정 가속합니다." },
    { name: "셰이드 (Shade)", speed: "1.7 m/s", sanity: "35%", evidence: ["EMF 5", "고스트 라이팅", "서늘함"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 수줍음이 많아 같은 방에 사람이 많으면 행동을 멈추고 헌팅 기준 정신력이 매우 낮습니다." },
    { name: "데몬 (Demon)", speed: "1.7 m/s", sanity: "70%", evidence: ["손자국", "고스트 라이팅", "서늘함"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 정신력과 상관없이 특수 능력으로 헌팅을 시작할 수 있으며, 십자가 영향 범위가 넓습니다." },
    { name: "유레이 (Yurei)", speed: "1.7 m/s", sanity: "50%", evidence: ["고스트 오브", "서늘함", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 문을 세게 닫으며 주변 플레이어의 정신력을 대폭 깎는 능력이 있습니다." },
    { name: "오니 (Oni)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "서늘함", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 활동성이 매우 높으며 실체화 시 모습이 거의 투명해지지 않고 선명하게 보입니다." },
    { name: "요괴 (Yokai)", speed: "1.7 m/s", sanity: "80% (목소리 반응)", evidence: ["스피릿 박스", "고스트 오브", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 근처에서 목소리를 내면 높은 정신력에서도 헌팅하며, 헌팅 중 청력이 매우 둔합니다." },
    { name: "한투 (Hantu)", speed: "1.4 ~ 2.7 m/s", sanity: "50%", evidence: ["손자국", "고스트 오브", "서늘함"], hasAccel: false, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: false, tip: "💡 시야 가속이 없지만, 온도가 낮은 방일수록 독자적으로 속도가 빨라집니다." },
    { name: "고료 (Goryo)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: true, hasTargetRoam: false, tip: "💡 DOTS 증거는 비디오 카메라로만 관찰되며, 악몽 이상 난이도에서 'DOTS'가 고정 증거입니다." },
    { name: "마이링 (Myling)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "고스트 라이팅"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 헌팅 시 발소리가 매우 조용하여 가까이 접근할 때까지 잘 들리지 않습니다." },
    { name: "온료 (Onryo)", speed: "1.7 m/s", sanity: "60%", evidence: ["스피릿 박스", "고스트 오브", "서늘함"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, tip: "💡 불꽃(촛불)을 두려워하며, 촛불이 3번 꺼질 때마다 확정적으로 헌팅을 시도합니다." },
    { name: "라이주 (Raiju)", speed: "1.7 ~ 2.5 m/s", sanity: "65%", evidence: ["EMF 5", "고스트 오브", "DOTS"], hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false, tip: "💡 작동 중인 전자제품 근처에서 가속도가 크게 증가하며 속도가 2.5 m/s로 급상승합니다." },
    { name: "오바케 (Obake)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "고스트 오브"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: true, hasTargetRoam: false, tip: "💡 6손가락 지문 확률이 있으며, 악몽 이상 난이도에서 '자외선(손자국)'이 고정 증거입니다." },
    { name: "미믹 (The Mimic)", speed: "변동 (복제)", sanity: "변동", evidence: ["스피릿 박스", "손자국", "서늘함"], hasAccel: true, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: true, tip: "💡 다른 유령의 속도를 복제하며, 항상 거짓 증거로 '고스트 오브'가 고정 관찰됩니다." },
    { name: "모로이 (Moroi)", speed: "1.5 ~ 2.25 m/s", sanity: "50%", evidence: ["스피릿 박스", "고스트 라이팅", "서늘함"], hasAccel: true, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: false, tip: "💡 평균 정신력이 낮을수록 기본 속도가 빨라지며, 시야 가속도 함께 적용됩니다." },
    { name: "데오겐 (Deogen)", speed: "0.4 ~ 3.0 m/s", sanity: "40%", evidence: ["스피릿 박스", "고스트 라이팅", "DOTS"], hasAccel: false, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: false, tip: "💡 시야 가속이 없지만, 먼 거리에서는 3.0 m/s, 가까워질수록 0.4 m/s로 속도가 변합니다." },
    { name: "타에 (Thaye)", speed: "1.0 ~ 2.75 m/s", sanity: "75%", evidence: ["고스트 오브", "고스트 라이팅", "DOTS"], hasAccel: false, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false, tip: "💡 시야 가속이 없습니다. 시간이 지나고 나이를 먹을수록 2.75 m/s에서 1.0 m/s까지 느려집니다." }
];

// 2. 장비 가이드 데이터
const equipments = [
    { name: "EMF 측정기 (EMF Reader)", tier: "Tier I ~ III", type: "증거 탐지 장비", desc: "유령이 상호작용하거나 이벤트를 일으킨 장소의 전자기장 신호를 측정합니다. EMF 5단계 신호는 유령 증거로 인정됩니다." },
    { name: "D.O.T.S. 프로젝트", tier: "Tier I ~ III", type: "증거 탐지 장비", desc: "녹색 레이저를 조사하여 유령의 실체를 가시화합니다. 고료의 경우 카메라를 통해서만 관찰이 가능합니다." },
    { name: "자외선 라이트 (UV Light)", tier: "Tier I ~ III", type: "증거 탐지 장비", desc: "문, 창문, 스위치 등에 남은 손자국이나 발자국을 확인합니다. 오바케는 6손가락 지문을 남길 수 있습니다." },
    { name: "스피릿 박스 (Spirit Box)", tier: "Tier I ~ III", type: "음성 대화 장비", desc: "불이 꺼진 방에서 음성 질문 시 유령의 답변을 듣습니다. 데오겐은 33% 확률로 특수 거친 숨소리를 냅니다." },
    { name: "십자가 (Crucifix)", tier: "Tier I ~ III", type: "방어 장비", desc: "유령이 헌팅을 시작하려는 범위 내에 위치할 경우 헌팅을 차단하고 타버립니다. 데크는 5m, 일반 유령은 3m 범위입니다." },
    { name: "정화용 향 (Incense / Smudge)", tier: "Tier I ~ III", type: "생존 / 지연 장비", desc: "유령 근처에서 사용 시 일정 시간 공격을 방지합니다. 스피릿은 180초, 데몬은 60초, 일반 유령은 90초간 차단됩니다." }
];

// 3. 맵 정보 데이터
const mapsData = [
    { name: "6 Tanglewood Drive", size: "소형 (Small)", rooms: "11개 방", desc: "파스모포비아의 대표적인 소형 주택 맵입니다. 차고, 지하실, 마스터 베드룸 등이 있으며 동선이 짧아 빠른 증거 수집이 가능합니다." },
    { name: "4 Ridgeview Court", size: "소형 (Small)", rooms: "12개 방", desc: "2층 구조의 현대식 주택입니다. 계단 부근 상호작용과 지하실 입구 위치 파악이 핵심입니다." },
    { name: "13 Edgefield Road", size: "소형 (Small)", rooms: "16개 방", desc: "많은 방과 복도가 얽혀 있어 유령방을 찾기 위한 온도계 및 음파 측정기 활용이 유용합니다." },
    { name: "Camp Woodwind", size: "소형 (Small)", rooms: "야외 캠핑장", desc: "탁 트인 야외 공간으로 바람 소리와 날씨 영향이 크며 텐트와 나무 뒤 숨기 장소가 배치되어 있습니다." },
    { name: "Prison", size: "중형 (Medium)", rooms: "감옥 파트", desc: "A/B 수용동과 중앙 로비 구조로 이루어져 있어 음파 측정기 및 비디오 카메라 세팅이 필수적입니다." },
    { name: "Sunny Meadows Mental Institution", size: "대형 (Large)", rooms: "병원 전역", desc: "최대 규모의 병원 맵입니다. 각 구역별 원장실, 수술실, 지하 동 등이 분리되어 있어 장비 수송 전략이 중요합니다." }
];

// 4. 핵심 공략 / 정보 데이터
const guidesData = [
    { title: "🔥 정화용 향(Smudge Stick) 타임 메커니즘", desc: "향을 태웠을 때 유령이 다시 헌팅할 수 없는 봉인 시간:<br>• <strong>스피릿:</strong> 180초 (3분)<br>• <strong>데몬:</strong> 60초 (1분)<br>• <strong>일반 모든 유령:</strong> 90초 (1분 30초)" },
    { title: "📻 데오겐 특수 숨소리 주파수 판별법", desc: "데오겐은 스피릿 박스를 들고 유령과 1m 이내 거리에서 질문할 때 <strong>33% 확률로 '후욱후욱/하악하악' 하는 거친 숨소리 주파수</strong>를 출력합니다." },
    { title: "🕯️ 온료(Onryo)의 촛불 헌팅 규칙", desc: "온료는 불꽃(촛불, 라이터)을 십자가처럼 사용합니다. 촛불이 <strong>3번 꺼질 때마다 확정적으로 헌팅을 시도</strong>하며, 주변에 불꽃이 있으면 헌팅이 차단됩니다." },
    { title: "🧂 레이스(Wraith)의 소금 판별법", desc: "레이스는 유일하게 <strong>소금을 절대 밟지 않는 유령</strong>입니다. 소금을 깔아두어도 발자국 자외선 흔적이 남지 않는다면 레이스입니다." },
    { title: "👁️ 팬텀 vs 오니 실체화 비교", desc: "• <strong>팬텀:</strong> 사진을 찍으면 순간 사라지며 깜빡이는 주기가 깁니다.<br>• <strong>오니:</strong> 실체화 시 모습이 거의 투명해지지 않고 선명하게 보입니다." },
    { title: "📌 악몽 이상 난이도 고정 증거", desc: "증거가 일부만 나오는 고난이도에서 반드시 나오는 확정 증거:<br>• <strong>고료:</strong> DOTS 프로젝트<br>• <strong>한투:</strong> 서늘함<br>• <strong>모로이/데오겐:</strong> 스피릿 박스<br>• <strong>오바케:</strong> 자외선(손자국)<br>• <strong>미믹:</strong> 고스트 오브 (거짓 증거)" }
];

const selectedIncludes = new Set();
const selectedExcludes = new Set();

const activeSpecialFilters = {
    hasAccel: false,
    hasSpecialSpeed: false,
    hasForcedEv: false,
    hasTargetRoam: false
};

// 탭 전환 메인 함수 (Single Page Application 방식)
function switchTab(tabName) {
    // 1. 탭 버튼 활성화 변경
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // 2. 컨텐츠 뷰 전환
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    const targetContent = document.getElementById(`tab-${tabName}`);
    if (targetContent) targetContent.classList.add('active');

    // 3. 상단 헤더 타이틀 & 설명 동적 변경
    const titleEl = document.getElementById('page-main-title');
    const descEl = document.getElementById('page-main-desc');

    switch(tabName) {
        case 'evidence':
            titleEl.innerText = "파스모포비아 증거 계산기";
            descEl.innerText = "발견한 증거를 클릭(포함/제외)하여 남은 유령을 빠르게 추려내세요.";
            renderUI();
            break;
        case 'ghosts':
            titleEl.innerText = "파스모포비아 유령 도감";
            descEl.innerText = "24종 유령의 고유 특징, 헌팅 정신력, 특수 능력을 확인하세요.";
            renderGhostDictionary();
            break;
        case 'equipment':
            titleEl.innerText = "장비 데이터 가이드";
            descEl.innerText = "조사 및 생존 장비의 티어별 기능과 특성을 안내합니다.";
            renderEquipmentPage();
            break;
        case 'maps':
            titleEl.innerText = "조사 구역 맵 정보";
            descEl.innerText = "맵 크기별 방 개수 및 두꺼비집, 동선 특성을 파악하세요.";
            renderMapsPage();
            break;
        case 'guide':
            titleEl.innerText = "핵심 공략 & 인게임 팁";
            descEl.innerText = "파스모포비아 위키 기반의 히든 메커니즘과 노하우 모음입니다.";
            renderGuidePage();
            break;
    }
}

// 1. 증거 계산기 UI 렌더링
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
        if (activeSpecialFilters.hasAccel && !ghost.hasAccel) return false;
        if (activeSpecialFilters.hasSpecialSpeed && !ghost.hasSpecialSpeed) return false;
        if (activeSpecialFilters.hasForcedEv && !ghost.hasForcedEv) return false;
        if (activeSpecialFilters.hasTargetRoam && !ghost.hasTargetRoam) return false;

        return true;
    });

    countBadge.innerText = filtered.length;

    container.innerHTML = filtered.map(ghost => `
        <div class="ghost-card">
            <div class="ghost-card-header">
                <span class="ghost-name">${ghost.name}</span>
                <div class="ghost-badge-group">
                    <span class="ghost-speed">속도: ${ghost.speed}</span>
                    <span class="ghost-sanity">정신력: ${ghost.sanity}</span>
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

// 2. 유령 도감 렌더링
function renderGhostDictionary() {
    const container = document.getElementById('ghost-dictionary-container');
    container.innerHTML = ghosts.map(g => `
        <div class="detail-card">
            <div class="card-title">
                <span>${g.name}</span>
                <span class="card-tag-inline">${g.sanity}</span>
            </div>
            <div class="card-body">
                <p><strong>이동 속도:</strong> ${g.speed}</p>
                <p><strong>필수 증거:</strong> ${g.evidence.join(', ')}</p>
                <p style="margin-top:10px;">${g.tip}</p>
            </div>
        </div>
    `).join('');
}

// 3. 장비 가이드 렌더링
function renderEquipmentPage() {
    const container = document.getElementById('equipment-container');
    container.innerHTML = equipments.map(eq => `
        <div class="detail-card">
            <div class="card-title">
                <span>${eq.name}</span>
                <span class="card-tag-inline">${eq.tier}</span>
            </div>
            <div class="card-body">
                <p><strong>분류:</strong> ${eq.type}</p>
                <p style="margin-top:10px;">${eq.desc}</p>
            </div>
        </div>
    `).join('');
}

// 4. 맵 정보 렌더링
function renderMapsPage() {
    const container = document.getElementById('maps-container');
    container.innerHTML = mapsData.map(m => `
        <div class="detail-card">
            <div class="card-title">
                <span>${m.name}</span>
                <span class="card-tag-inline">${m.size}</span>
            </div>
            <div class="card-body">
                <p><strong>구조:</strong> ${m.rooms}</p>
                <p style="margin-top:10px;">${m.desc}</p>
            </div>
        </div>
    `).join('');
}

// 5. 공략 / 정보 렌더링
function renderGuidePage() {
    const container = document.getElementById('guide-container');
    container.innerHTML = guidesData.map(g => `
        <div class="detail-card">
            <div class="card-title">
                <span>${g.title}</span>
            </div>
            <div class="card-body">
                <p style="line-height:1.7;">${g.desc}</p>
            </div>
        </div>
    `).join('');
}

// 특수 필터 토글
function toggleFilter(filterKey) {
    activeSpecialFilters[filterKey] = !activeSpecialFilters[filterKey];
    renderUI();
}

// 증거 버튼 클릭
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
    activeSpecialFilters.hasAccel = false;
    activeSpecialFilters.hasSpecialSpeed = false;
    activeSpecialFilters.hasForcedEv = false;
    activeSpecialFilters.hasTargetRoam = false;

    document.querySelectorAll('.evidence-btn').forEach(btn => {
        btn.classList.remove('included', 'excluded');
    });
    document.querySelectorAll('.special-filters input[type="checkbox"]').forEach(chk => {
        chk.checked = false;
    });

    renderUI();
});

// ==========================================
// 슬라이드 패널 및 퀵 검색 연동
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
            <p>• 데오겐 특수 숨소리 주파수 가이드 추가 완료</p>
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
                <p style="font-weight: bold; margin-bottom: 8px; color: var(--accent-light);">피드백 및 정보 제보</p>
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
