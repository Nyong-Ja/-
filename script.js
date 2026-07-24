// 파스모포비아 전체 30종 유령 데이터베이스 (속도 정보 포함)
const GHOSTS = [
    {
        name: "스피릿 (Spirit)",
        evidence: ["EMF 5", "고스트 라이팅", "스피릿 박스"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "향을 피우면 180초 동안 공격하지 못합니다. (일반 유령은 90초)"
    },
    {
        name: "레이스 (Wraith)",
        evidence: ["EMF 5", "고스트 오브", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "소금을 절대 밟지 않으며, 플레이어 위치로 순간이동 능력이 있습니다."
    },
    {
        name: "팬텀 (Phantom)",
        evidence: ["스피릿 박스", "손자국", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "사진을 찍으면 모습이 사라지며, 바라볼 때 정신력이 빠르게 감소합니다."
    },
    {
        name: "폴터가이스트 (Poltergeist)",
        evidence: ["스피릿 박스", "손자국", "고스트 라이팅"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "여러 물건을 동시에 강하게 던질 수 있으며, 물건을 던질 때 정신력을 깎습니다."
    },
    {
        name: "밴시 (Banshee)",
        evidence: ["손자국", "고스트 오브", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "특정 타겟 한 명만 노리며, 지향성 마이크로 특수 비명 소리(곡소리)가 들립니다."
    },
    {
        name: "진 (Jinn)",
        evidence: ["EMF 5", "손자국", "서늘함"],
        sanity: "50%",
        speed: "1.7 ~ 2.5 m/s",
        tip: "두꺼비집이 켜져 있을 때 먼 거리에서 플레이어에게 빠르게 돌진합니다."
    },
    {
        name: "마레 (Mare)",
        evidence: ["스피릿 박스", "고스트 오브", "고스트 라이팅"],
        sanity: "불 꺼짐 60% / 불 켜짐 40%",
        speed: "1.7 m/s",
        tip: "어둠 속에서 공격 확률이 높으며, 불을 즉시 끄는 특수 능력이 있습니다."
    },
    {
        name: "레버넌트 (Revenant)",
        evidence: ["고스트 오브", "고스트 라이팅", "서늘함"],
        sanity: "50%",
        speed: "1.0 / 3.0 m/s",
        tip: "플레이어를 포착하면 시야에서 엄청난 속도(3.0m/s)로 추격하지만, 놓치면 매우 느려집니다."
    },
    {
        name: "셰이드 (Shade)",
        evidence: ["EMF 5", "고스트 라이팅", "서늘함"],
        sanity: "35%",
        speed: "1.7 m/s",
        tip: "수줍음이 많은 유령으로, 같은 방에 사람이 있으면 헌팅을 하지 않습니다."
    },
    {
        name: "데몬 (Demon)",
        evidence: ["손자국", "고스트 라이팅", "서늘함"],
        sanity: "70%",
        speed: "1.7 m/s",
        tip: "특수 능력으로 높은 정신력에서도 즉시 헌팅을 시작할 수 있습니다."
    },
    {
        name: "유레이 (Yurei)",
        evidence: ["고스트 오브", "서늘함", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "문 상호작용 능력으로 문을 완전히 닫으며 플레이어의 정신력을 15% 깎습니다."
    },
    {
        name: "오니 (Oni)",
        evidence: ["EMF 5", "서늘함", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "사람이 근처에 있을 때 활발하게 움직이며, 공기 방울(연기) 형상을 만들지 않습니다."
    },
    {
        name: "요괴 (Yokai)",
        evidence: ["스피릿 박스", "고스트 오브", "DOTS"],
        sanity: "목소리 사용 시 80%",
        speed: "1.7 m/s",
        tip: "근처에서 마이크로 말하거나 음성 채팅을 할 때 헌팅 확률이 급격히 올라갑니다."
    },
    {
        name: "한투 (Hantu)",
        evidence: ["손자국", "고스트 오브", "서늘함"],
        sanity: "50%",
        speed: "1.4 ~ 2.7 m/s",
        tip: "온도가 낮은 곳일수록 속도가 증가하며, 가속하지 않고 입김을 내뿜습니다."
    },
    {
        name: "고료 (Goryo)",
        evidence: ["EMF 5", "손자국", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "D.O.T.S 프로젝터 모습이 비디오 카메라인 육안이 아닌 화면으로만 보입니다."
    },
    {
        name: "마일링 (Myling)",
        evidence: ["EMF 5", "손자국", "고스트 라이팅"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "헌팅 중 발소리가 매우 조용하며, 지향성 마이크로 초자연적 소리가 자주 들립니다."
    },
    {
        name: "온료 (Onryo)",
        evidence: ["스피릿 박스", "고스트 오브", "서늘함"],
        sanity: "60%",
        speed: "1.7 m/s",
        tip: "불꽃(양초)을 3번 꺼트릴 때마다 헌팅을 시도하는 특성을 가집니다."
    },
    {
        name: "라이주 (Raiju)",
        evidence: ["EMF 5", "고스트 오브", "DOTS"],
        sanity: "전자장비 근처 65%",
        speed: "1.7 / 2.5 m/s",
        tip: "켜진 전자장비 근처에서 이동 속도가 2.5m/s로 급증하고 헌팅 기준이 높아집니다."
    },
    {
        name: "오바케 (Obake)",
        evidence: ["EMF 5", "손자국", "고스트 오브"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "6손가락 손자국을 남길 확률이 있으며, 손자국을 빠르게 지우는 능력이 있습니다."
    },
    {
        name: "트윈스 (The Twins)",
        evidence: ["EMF 5", "스피릿 박스", "서늘함"],
        sanity: "50%",
        speed: "1.5 / 1.87 m/s",
        tip: "본체(1.5m/s)와 분신(1.87m/s)이 각각 다른 속도로 헌팅을 진행합니다."
    },
    {
        name: "미믹 (The Mimic)",
        evidence: ["스피릿 박스", "손자국", "서늘함"],
        sanity: "변동",
        speed: "변동 (복제)",
        tip: "다른 유령의 특성을 복제합니다. <strong>보너스 증거로 항상 '고스트 오브'가 나타납니다.</strong>"
    },
    {
        name: "모로이 (Moroi)",
        evidence: ["스피릿 박스", "고스트 라이팅", "서늘함"],
        sanity: "50%",
        speed: "1.5 ~ 2.25 m/s",
        tip: "평균 정신력이 낮을수록 이동 속도가 빨라지며, 저주를 걸어 정신력을 깎습니다."
    },
    {
        name: "데오겐 (Deogen)",
        evidence: ["스피릿 박스", "고스트 라이팅", "DOTS"],
        sanity: "40%",
        speed: "0.4 ~ 3.0 m/s",
        tip: "멀리서는 3.0m/s로 돌진하나 플레이어 근처에서는 0.4m/s로 극도로 느려집니다. (중저음 특수 숨소리)"
    },
    {
        name: "타예 (Thaye)",
        evidence: ["고스트 오브", "고스트 라이팅", "DOTS"],
        sanity: "초기 75% ~ 나중 15%",
        speed: "1.0 ~ 2.75 m/s",
        tip: "초기에는 2.75m/s로 매우 빠르나, 플레이어가 근처에 머물수록 나이를 먹어 1.0m/s로 느려집니다."
    },
    {
        name: "아스왕 (Aswang)",
        evidence: ["EMF 5", "손자국", "스피릿 박스"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "플레이어의 모습을 변형하여 위장하거나 특수한 상호작용을 일으킵니다."
    },
    {
        name: "다얀 (Dayan)",
        evidence: ["고스트 라이팅", "서늘함", "DOTS"],
        sanity: "50%",
        speed: "1.7 ~ 2.3 m/s",
        tip: "특정 조건 및 공격성 변화에 따라 이동 속도가 가변합니다."
    },
    {
        name: "바일데가스트 (Deildegast)",
        evidence: ["EMF 5", "고스트 오브", "고스트 라이팅"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "경계 지역이나 특정 공간에서 특수한 이동 및 추격 패턴을 보입니다."
    },
    {
        name: "갈루 (Gallu)",
        evidence: ["손자국", "스피릿 박스", "서늘함"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "보호 장비나 정화 소금/향 등에 반응하여 특수한 패턴을 보입니다."
    },
    {
        name: "코르모스 (Kormos)",
        evidence: ["EMF 5", "서늘함", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "시야 관련 특성과 독특한 추격 메커니즘을 가집니다."
    },
    {
        name: "오밤보 (Obambo)",
        evidence: ["고스트 오브", "손자국", "스피릿 박스"],
        sanity: "50%",
        speed: "1.7 m/s",
        tip: "주위 환경 및 전자장비와 특이한 상호작용을 일으킵니다."
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
        selectedEvidences.add(ev);
        btn.classList.add('included');
    } else if (selectedEvidences.has(ev)) {
        selectedEvidences.delete(ev);
        excludedEvidences.add(ev);
        btn.classList.remove('included');
        btn.classList.add('excluded');
    } else {
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
        const hasIncluded = Array.from(selectedEvidences).every(ev => ghost.evidence.includes(ev));
        const hasNoExcluded = Array.from(excludedEvidences).every(ev => !ghost.evidence.includes(ev));
        return hasIncluded && hasNoExcluded;
    });

    ghostCountEl.textContent = filtered.length;

ghostListContainer.innerHTML = filtered.map(ghost => `
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
                <span class="ev-tag ${selectedEvidences.has(ev) ? 'matched' : ''}">${ev}</span>
            `).join('')}
        </div>

        <!-- 💡 접이식 더보기 세팅 -->
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

// 초기 화면 렌더링
renderUI();
