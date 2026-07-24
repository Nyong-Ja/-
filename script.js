// 1. 파스모포비아 유령 데이터베이스 (주요 유령 샘플)
const GHOSTS = [
    {
        name: "스피릿 (Spirit)",
        evidence: ["EMF 5", "고스트 라이팅", "스피릿 박스"],
        sanity: "50%",
        tip: "향을 피우면 180초 동안 공격하지 못합니다. (일반 유령은 90초)"
    },
    {
        name: "레이스 (Wraith)",
        evidence: ["EMF 5", "고스트 오브", "DOTS"],
        sanity: "50%",
        tip: "소금을 밟지 않으며, 플레이어 위치로 순간이동 능력이 있습니다."
    },
    {
        name: "팬텀 (Phantom)",
        evidence: ["스피릿 박스", "손자국", "DOTS"],
        sanity: "50%",
        tip: "사진을 찍으면 모습이 사라지며, 바라볼 때 정신력이 크게 감소합니다."
    },
    {
        name: "폴터가이스트 (Poltergeist)",
        evidence: ["스피릿 박스", "손자국", "고스트 라이팅"],
        sanity: "50%",
        tip: "여러 물건을 동시에 강하게 던질 수 있습니다."
    },
    {
        name: "밴시 (Banshee)",
        evidence: ["손자국", "고스트 오브", "DOTS"],
        sanity: "50%",
        tip: "특정 타겟 한 명만 노리며, 음향 측정기로 특수 비명 소리가 들립니다."
    },
    {
        name: "진 (Jinn)",
        evidence: ["EMF 5", "손자국", "서늘함"],
        sanity: "50%",
        tip: "두꺼비집이 켜져 있을 때 먼 거리에서 플레이어에게 빠르게 돌진합니다."
    },
    {
        name: "마레 (Mare)",
        evidence: ["스피릿 박스", "고스트 오브", "고스트 라이팅"],
        sanity: "불 꺼짐 60% / 불 켜짐 40%",
        tip: "어둠 속에서 공격 확률이 높으며, 불을 즉시 끄는 능력이 있습니다."
    },
    {
        name: "레버넌트 (Revenant)",
        evidence: ["고스트 오브", "고스트 라이팅", "서늘함"],
        sanity: "50%",
        tip: "플레이어를 포착하면 시야에서 엄청난 속도로 추격합니다."
    },
    {
        name: "셰이드 (Shade)",
        evidence: ["EMF 5", "고스트 라이팅", "서늘함"],
        sanity: "35%",
        tip: "수줍음이 많은 유령으로, 같은 방에 사람이 여러 명 있으면 활동하지 않습니다."
    },
    {
        name: "데몬 (Demon)",
        evidence: ["손자국", "고스트 라이팅", "서늘함"],
        sanity: "70%",
        tip: "특수 능력으로 높은 정신력에서도 바로 헌팅을 시작할 수 있습니다."
    },
    {
        name: "유레이 (Yurei)",
        evidence: ["고스트 오브", "서늘함", "DOTS"],
        sanity: "50%",
        tip: "문 밀기 능력으로 문을 완전히 닫아 플레이어의 정신력을 15% 깎습니다."
    },
    {
        name: "오니 (Oni)",
        evidence: ["EMF 5", "서늘함", "DOTS"],
        sanity: "50%",
        tip: "사람이 근처에 있을 때 활발하게 움직이며, 공기 방울 형상을 만들지 않습니다."
    },
    {
        name: "데오겐 (Deogen)",
        evidence: ["스피릿 박스", "고스트 라이팅", "DOTS"],
        sanity: "40%",
        tip: "숨어도 타겟을 찾아내며, 가까워지면 이동 속도가 극도로 느려집니다."
    },
    {
        name: "미믹 (The Mimic)",
        evidence: ["스피릿 박스", "손자국", "서늘함"],
        sanity: "변동",
        tip: "다른 유령의 능력을 복제합니다. <strong>보너스 증거로 항상 '고스트 오브'가 나타납니다.</strong>"
    }
];

// 증거 상태 (Set 구조체로 관리)
const selectedEvidences = new Set();
const excludedEvidences = new Set();

// DOM 요소
const evidenceBtns = document.querySelectorAll('.evidence-btn');
const ghostListContainer = document.getElementById('ghost-list-container');
const ghostCountEl = document.getElementById('ghost-count');
const resetBtn = document.getElementById('reset-btn');

// 이벤트 등록
evidenceBtns.forEach(btn => {
    btn.addEventListener('click', () => handleEvidenceClick(btn));
});

resetBtn.addEventListener('click', resetAll);

// 증거 토글 로직
function handleEvidenceClick(btn) {
    const ev = btn.dataset.evidence;

    if (!selectedEvidences.has(ev) && !excludedEvidences.has(ev)) {
        // 1. 미선택 -> 포함
        selectedEvidences.add(ev);
        btn.classList.add('included');
    } else if (selectedEvidences.has(ev)) {
        // 2. 포함 -> 제외
        selectedEvidences.delete(ev);
        excludedEvidences.add(ev);
        btn.classList.remove('included');
        btn.classList.add('excluded');
    } else {
        // 3. 제외 -> 미선택
        excludedEvidences.delete(ev);
        btn.classList.remove('excluded');
    }

    renderUI();
}

// 초기화
function resetAll() {
    selectedEvidences.clear();
    excludedEvidences.clear();
    evidenceBtns.forEach(btn => {
        btn.classList.remove('included', 'excluded');
    });
    renderUI();
}

// 화면 업데이트 및 필터링
function renderUI() {
    const filtered = GHOSTS.filter(ghost => {
        // 포함된 증거를 갖고 있는지
        const hasIncluded = Array.from(selectedEvidences).every(ev => ghost.evidence.includes(ev));
        // 제외된 증거를 갖고 있지 않은지
        const hasNoExcluded = Array.from(excludedEvidences).every(ev => !ghost.evidence.includes(ev));
        return hasIncluded && hasNoExcluded;
    });

    ghostCountEl.textContent = filtered.length;

    ghostListContainer.innerHTML = filtered.map(ghost => `
        <div class="ghost-card">
            <div class="ghost-card-header">
                <span class="ghost-name">${ghost.name}</span>
                <span class="ghost-sanity">정신력 기준: ${ghost.sanity}</span>
            </div>
            <div class="ghost-evidences">
                ${ghost.evidence.map(ev => `
                    <span class="ev-tag ${selectedEvidences.has(ev) ? 'matched' : ''}">${ev}</span>
                `).join('')}
            </div>
            <div class="ghost-tip">💡 ${ghost.tip}</div>
        </div>
    `).join('');
}

// 초기 화면 렌더링
renderUI();
