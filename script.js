// 1. 유령 DB (Fandom Wiki 기준 정밀 데이터)
const ghosts = [
    { name: "스피릿 (Spirit)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "고스트 라이팅", "스피릿 박스"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "특이한 공격적 강점은 없음", weakness: "향(Incense)을 피우면 180초 동안 헌팅 차단 (일반 유령은 90초)", tip: "💡 향 차단 시간이 3분(180초)으로 매우 길기 때문에 향을 피우고 90초~180초 사이에 헌팅을 안 하면 확정 스피릿입니다." },
    { name: "레이스 (Wraith)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "고스트 오브", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: true, strength: "소금을 절대 밟지 않음, 벽을 관통해 플레이어 위치로 텔레포트", weakness: "소금 반응에 대해 치명적 약점 (소금 자외선 발자국 미발생)", tip: "💡 소금을 깔아두고 유령 상호작용이 일어났는데 발자국 흔적이 자외선으로 안 찍히면 레이스입니다." },
    { name: "팬텀 (Phantom)", speed: "1.7 m/s", sanity: "50%", evidence: ["스피릿 박스", "손자국", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: true, strength: "플레이어를 바라보면 정신력이 매우 빠르게 감소", weakness: "사진을 찍으면 순간 실체가 사라짐 (앨범엔 '유령'으로 기록)", tip: "💡 실체화 이벤트 때 카메라로 찍어서 실체가 없어졌는데 소리는 계속 나면 팬텀입니다." },
    { name: "폴터가이스트 (Poltergeist)", speed: "1.7 m/s", sanity: "50%", evidence: ["스피릿 박스", "손자국", "고스트 라이팅"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "여러 물건을 동시에 크게 던지며 주변 플레이어 정신력 대폭 감소", weakness: "던질 물건이 없는 빈 방에서는 능력이 무력화됨", tip: "💡 물건을 한곳에 쌓아두고 한 번에 물건 폭발이 일어나는지 확인해보세요." },
    { name: "밴시 (Banshee)", speed: "1.7 m/s", sanity: "타겟 50%", evidence: ["손자국", "고스트 오브", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: true, strength: "지정한 타겟 플레이어만을 쫓아 로밍하며 타겟 정신력만 측정", weakness: "음파 측정기로 33% 확률의 고유 비명 소리를 들려줌", tip: "💡 음파 측정기를 켜고 가만히 들었을 때 여성 고유의 찢어지는 비명이 들리면 밴시 확정입니다." },
    { name: "진 (Jinn)", speed: "1.7 ~ 2.5 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "서늘함"], hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false, strength: "두꺼비집이 켜져 있을 때 멀리 있는 플레이어를 보면 2.5 m/s 고속 추격", weakness: "두꺼비집을 직접 끌 수 없으며, 두꺼비집을 내리면 능력이 차단됨", tip: "💡 두꺼비집을 내렸는데 속도가 일반 유령(1.7 m/s)으로 평범해지면 진입니다." },
    { name: "마레 (Mare)", speed: "1.7 m/s", sanity: "불 꺼짐 60% / 켜짐 40%", evidence: ["스피릿 박스", "고스트 오브", "고스트 라이팅"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "어두운 곳에서 헌팅 확률 증가, 불을 켜면 즉시 스위치를 끔", weakness: "불이 켜진 방에서는 공격성이 현저히 떨어짐", tip: "💡 불을 켜자마자 0.1초 만에 바로 딸깍 끄는 행동을 자주 보입니다." },
    { name: "레버넌트 (Revenant)", speed: "1.0 / 3.0 m/s", sanity: "50%", evidence: ["고스트 오브", "고스트 라이팅", "서늘함"], hasAccel: false, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false, strength: "시야에 플레이어가 들어오는 즉시 3.0 m/s 폭속 추격", weakness: "시야에 플레이어가 없으면 1.0 m/s로 매우 둔하게 걸어다님", tip: "💡 발소리가 뚜... 뚜... 하고 느리다가 플레이어를 보자마자 타타타타 하고 미친 듯이 빨라집니다." },
    { name: "셰이드 (Shade)", speed: "1.7 m/s", sanity: "35%", evidence: ["EMF 5", "고스트 라이팅", "서늘함"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "수줍음이 많아 조사관이 같은 방에 있으면 상호작용 및 헌팅 차단", weakness: "헌팅 시작 정신력이 35%로 매우 낮음", tip: "💡 방에 여럿이 있을 때는 아무것도 안 하다가 혼자 남거나 정신력이 35% 밑으로 떨어져야 헌팅합니다." },
    { name: "데몬 (Demon)", speed: "1.7 m/s", sanity: "70% (특수 100%)", evidence: ["손자국", "고스트 라이팅", "서늘함"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "정신력과 상관없이 능력으로 언제든 즉시 헌팅 시작 가능 (쿨타임 20초)", weakness: "십자가 차단 범위가 5m로 넓음 (일반 유령 3m)", tip: "💡 게임 시작하자마자 1분도 안 돼서 헌팅이 터지면 데몬일 확률이 매우 높습니다." },
    { name: "유레이 (Yurei)", speed: "1.7 m/s", sanity: "50%", evidence: ["고스트 오브", "서늘함", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "문을 세게 쾅 닫으며 주변 조사관 정신력을 15% 기습 차감", weakness: "유레이 방에 향을 피우면 90초 동안 그 방에 갇혀 이동 못 함", tip: "💡 문이 쾅 닫히면서 정신력이 툭 떨어진다면 유레이 능력을 의심해보세요." },
    { name: "오니 (Oni)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "서늘함", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "사람이 근처에 있을 때 활성화되며 실체화 모습이 매우 선명함", weakness: "공기 방울(Ghost Mist) 이벤트를 일으킬 수 없음", tip: "💡 헌팅 중에 유령 모습이 깜빡일 때 투명한 시간이 거의 없이 계속 선명하게 보이면 오니입니다." },
    { name: "요괴 (Yokai)", speed: "1.7 m/s", sanity: "80% (목소리 반응)", evidence: ["스피릿 박스", "고스트 오브", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "근처에서 마이크로 말을 많이 하면 80% 높은 정신력에서도 헌팅", weakness: "헌팅 중 청력이 3m 이내로 제한됨", tip: "💡 헌팅 때 근처에서 말을 하거나 무전기를 켜도 날 찾지 못하고 지나쳐 가면 요괴입니다." },
    { name: "한투 (Hantu)", speed: "1.4 ~ 2.7 m/s", sanity: "50%", evidence: ["손자국", "고스트 오브", "서늘함"], hasAccel: false, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: false, strength: "추운 방(유령방/지하실)일수록 엄청나게 빠름", weakness: "시야 가속이 없으며 입에서 서늘한 입김 입자가 보임, 두꺼비집 선호", tip: "💡 시야 가속이 전혀 없는데 추운 방에서 발소리가 빠른 유령은 한투입니다. 악몽 고정증거: 서늘함" },
    { name: "고료 (Goryo)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "DOTS"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: true, hasTargetRoam: false, strength: "DOTS 증거가 맨눈으로는 안 보이고 비디오 카메라로만 관찰됨", weakness: "유령방을 거의 이사하지 않음", tip: "💡 방 안에서는 DOTS가 안 보이는데 비디오 카메라 모니터로만 보인다면 고료입니다. 악몽 고정증거: DOTS" },
    { name: "마이링 (Myling)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "고스트 라이팅"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "헌팅 시 발소리가 매우 조용함 (손전등 교란 거리 10m보다 좁은 범위에서만 들림)", weakness: "파라볼릭 마이크로 특수 중얼거림 소리를 자주 냄", tip: "💡 손전등이 깜빡거리기 시작했는데 발소리가 안 들리다가 아주 가까이 와서야 들리면 마이링입니다." },
    { name: "온료 (Onryo)", speed: "1.7 m/s", sanity: "60%", evidence: ["스피릿 박스", "고스트 오브", "서늘함"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false, strength: "불꽃(촛불)이 3번 꺼질 때마다 확정적으로 헌팅 시도", weakness: "불꽃이 근처에 있으면 십자가처럼 헌팅을 차단함", tip: "💡 촛불을 3번째 끌 때마다 십자가를 태우거나 바로 공격해오면 온료입니다." },
    { name: "라이주 (Raiju)", speed: "1.7 ~ 2.5 m/s", sanity: "65%", evidence: ["EMF 5", "고스트 오브", "DOTS"], hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false, strength: "작동 중인 전자기기 근처에서 속도가 2.5 m/s로 급상승", weakness: "전자기기 교란 범위(15m)가 다른 유령보다 넓어서 위치 파악이 쉬움", tip: "💡 바닥에 전자기기를 켜두었을 때 미친 듯이 빨라진다면 라이주입니다." },
    { name: "오바케 (Obake)", speed: "1.7 m/s", sanity: "50%", evidence: ["EMF 5", "손자국", "고스트 오브"], hasAccel: true, hasSpecialSpeed: false, hasForcedEv: true, hasTargetRoam: false, strength: "6손가락 특수 지문을 남기거나 지문을 금방 지워버림", weakness: "헌팅 중 순간적으로 다른 유령 모델로 변신(Morph)함", tip: "💡 헌팅하는 모습을 주시할 때 순간 폼이 바뀌는 것을 목격하면 오바케입니다. 악몽 고정증거: 자외선" },
    { name: "미믹 (The Mimic)", speed: "변동 (복제)", sanity: "변동", evidence: ["스피릿 박스", "손자국", "서늘함"], hasAccel: true, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: true, strength: "다른 모든 유령의 특성과 속도를 무작위로 복제함", weakness: "기본 3개 증거 외에 항상 '고스트 오브'를 4번째 거짓 증거로 보여줌", tip: "💡 전문/악몽 난이도에서 증거가 4개 이상 관찰되면 무조건 미믹입니다." },
    { name: "모로이 (Moroi)", speed: "1.5 ~ 2.25 m/s", sanity: "50%", evidence: ["스피릿 박스", "고스트 라이팅", "서늘함"], hasAccel: true, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: false, strength: "스피릿 박스 음성을 들은 조사관에게 저주를 걸어 정신력 감소 속도 2배, 정신력이 낮을수록 기본속도 증가", weakness: "향을 맞으면 12초 동안 시야가 차단됨 (일반 6초)", tip: "💡 정신력이 0%일 때 기본 속도가 매우 빠르고 시야 가속까지 중첩됩니다. 악몽 고정증거: 스피릿 박스" },
    { name: "데오겐 (Deogen)", speed: "0.4 ~ 3.0 m/s", sanity: "40%", evidence: ["스피릿 박스", "고스트 라이팅", "DOTS"], hasAccel: false, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: false, strength: "숨어있어도 플레이어 위치를 항상 알고 다가옴 (3.0 m/s)", weakness: "플레이어 2m 근처에 접근하면 0.4 m/s로 거의 멈추듯 느려짐", tip: "💡 절대로 벽장에 숨지 말고 근처에서 빙글빙글 돌면서 피하세요. 스피릿 박스 거친 숨소리 주파수 보유." },
    { name: "타에 (Thaye)", speed: "1.0 ~ 2.75 m/s", sanity: "75%", evidence: ["고스트 오브", "고스트 라이팅", "DOTS"], hasAccel: false, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false, strength: "게임 극초반 75% 높은 정신력에서 2.75 m/s 미친 속도로 헌팅", weakness: "플레이어가 근처에 머무르면 나이를 먹어(최대 10단계) 속도가 1.0 m/s로 둔해짐", tip: "💡 시야 가속이 전혀 없으며 시간이 지날수록 발소리가 확연히 느려집니다." }
];

// 2. 장비 Fandom Wiki 데이터
const equipments = [
    { name: "EMF 측정기 (EMF Reader)", category: "증거 탐지", t1: "Tier I: 아날로그 바늘형 (범위 1.5m / 오차 높음)", t2: "Tier II: 디지털 LED 수치 표시 (범위 1.7m / 정확)", t3: "Tier III: 방향 표시 및 거리 사운드 지원 (범위 3.5m / 동시에 3개 감지)" },
    { name: "D.O.T.S. 프로젝트", category: "증거 탐지", t1: "Tier I: 핸디형 손전등 형태 (범위 5m / 이동식)", t2: "Tier II: 바닥 설치형 구체 레이저 (범위 2.5m)", t3: "Tier III: 넓은 범위 스캔 설치형 (범위 7m / 회전 기능)" },
    { name: "자외선 라이트 (UV Light)", category: "증거 탐지", t1: "Tier I: UV 형광 네온등 (스캔 속도 느림)", t2: "Tier II: 손전등형 UV 라이트 (충전 빠름)", t3: "Tier III: 강력한 UV 프로젝터 (넓은 영역 즉시 감지)" },
    { name: "스피릿 박스 (Spirit Box)", category: "음성 대화", t1: "Tier I: 신호 잡음 심함 (응답률 낮음 / 오디오 범위 짧음)", t2: "Tier II: 명확한 오디오 디스플레이 (응답률 보통)", t3: "Tier III: 노이즈 필터링 적용 (응답률 매우 높음 / 노이즈 최소화)" },
    { name: "정화용 향 (Incense)", category: "생존 / 지연", t1: "Tier I: 마른 향 다발 (효과 지속 5초 / 헌팅 차단)", t2: "Tier II: 향 항아리 (효과 지속 6초 / 슬로우 효과 5초)", t3: "Tier III: 에테르 향로 (효과 지속 7초 / 유령 이동 완전 정지)" },
    { name: "십자가 (Crucifix)", category: "방어 장비", t1: "Tier I: 나무 십자가 (범위 3m / 1회 차단)", t2: "Tier II: 금속 십자가 (범위 3m / 2회 차단)", t3: "Tier III: 성물 십자가 (범위 5m / 2회 차단 / 데몬 5m+a)" }
];

// 3. 맵 Fandom Wiki 데이터
const mapsData = [
    { name: "6 Tanglewood Drive", size: "Small", rooms: "11개 방", floors: "1층 + 지하실", fuse: "차고 또는 지하실", desc: "가장 인기 있는 대표 소형 주택입니다. 리워크 업데이트로 입구 동선과 숨기 장소가 최적화되어 빠른 조사에 적합합니다." },
    { name: "4 Ridgeview Court", size: "Small", rooms: "12개 방", floors: "2층 + 지하실", desc: "복도와 계단 구조가 좁아 유령 동선 확인에 용이합니다." },
    { name: "13 Edgefield Road", size: "Small", rooms: "16개 방", floors: "2층 + 지하실", desc: "방 개수가 많아 유령방 온도 측정이 중요합니다." },
    { name: "Camp Woodwind", size: "Small", rooms: "야외 캠핑장", floors: "평지 야외", desc: "탁 트인 1층 야외 공간으로 바람 소리와 텐트 뒤 숨기 스팟을 활용해야 합니다." },
    { name: "Prison", size: "Medium", rooms: "29개 구역", floors: "2층 구조", desc: "중앙 로비와 A/B 블록 감옥동으로 구성되어 파라볼릭 마이크 필수입니다." },
    { name: "Maple Lodge Campsite", size: "Medium", rooms: "캠핑장 전역", floors: "야외 + 통나무집", desc: "호수와 낚시터, 통나무 캐빈이 위치한 대형 캠핑장입니다." },
    { name: "Sunny Meadows Mental Institution", size: "Large", rooms: "69개 구역", floors: "1층, 2층, 지하실", desc: "파스모포비아 최대 규모의 병원 맵입니다. 동선이 매우 길어 트럭 장비 배치가 핵심입니다." }
];

// 4. 공략 데이터
const guidesData = [
    { title: "🔥 향(Incense) 타임 메커니즘", desc: "향을 태웠을 때 유령이 다시 헌팅을 시작하지 못하는 봉인 시간:<br>• <strong>스피릿:</strong> 180초 (3분)<br>• <strong>데몬:</strong> 60초 (1분)<br>• <strong>일반 모든 유령:</strong> 90초 (1분 30초)" },
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

// 탭 전환 메인 함수
function switchTab(tabName) {
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    const targetContent = document.getElementById(`tab-${tabName}`);
    if (targetContent) targetContent.classList.add('active');

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
            descEl.innerText = "24종 유령의 고유 특징, 헌팅 정신력, 위키 기반 특수 능력을 확인하세요.";
            renderGhostDictionary();
            break;
        case 'equipment':
            titleEl.innerText = "장비 티어 데이터 가이드";
            descEl.innerText = "Fandom Wiki 기준 조사 및 생존 장비의 Tier I~III 스펙을 비교해보세요.";
            renderEquipmentPage();
            break;
        case 'maps':
            titleEl.innerText = "조사 구역 맵 정보";
            descEl.innerText = "맵 크기별 구조, 방 개수, 두꺼비집 스폰 장소를 파악하세요.";
            renderMapsPage('ALL');
            break;
        case 'guide':
            titleEl.innerText = "핵심 공략 & 인게임 팁";
            descEl.innerText = "위키 기반의 히든 메커니즘과 유령 판별 노하우 모음입니다.";
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

// 2. 유령 도감 렌더링 (위키 상세 도감)
function renderGhostDictionary() {
    const container = document.getElementById('ghost-dictionary-container');
    container.innerHTML = ghosts.map(g => `
        <div class="dict-card">
            <div class="dict-header">
                <span class="dict-title">${g.name}</span>
                <span class="ghost-sanity">헌팅 기준: ${g.sanity}</span>
            </div>
            <div class="dict-spec-bar">
                <div class="dict-spec-item"><strong>이동 속도:</strong> ${g.speed}</div>
                <div class="dict-spec-item"><strong>필수 증거:</strong> ${g.evidence.join(', ')}</div>
            </div>
            <div class="dict-section-title">🔴 강점 (Strengths)</div>
            <div class="dict-text">${g.strength}</div>
            <div class="dict-section-title">🟢 약점 (Weaknesses)</div>
            <div class="dict-text">${g.weakness}</div>
            <div class="dict-section-title">💡 판별 팁</div>
            <div class="dict-text" style="color:var(--text-primary);">${g.tip}</div>
        </div>
    `).join('');
}

// 3. 장비 가이드 렌더링 (티어별 스펙 카드)
function renderEquipmentPage() {
    const container = document.getElementById('equipment-container');
    container.innerHTML = equipments.map(eq => `
        <div class="eq-card">
            <div>
                <div class="eq-header">
                    <span class="eq-name">${eq.name}</span>
                    <span class="eq-category">${eq.category}</span>
                </div>
                <div class="eq-tier-box">
                    <div class="eq-tier-title"><span>Tier I</span></div>
                    <div class="eq-tier-desc">${eq.t1}</div>
                </div>
                <div class="eq-tier-box">
                    <div class="eq-tier-title"><span>Tier II</span></div>
                    <div class="eq-tier-desc">${eq.t2}</div>
                </div>
                <div class="eq-tier-box">
                    <div class="eq-tier-title"><span>Tier III</span></div>
                    <div class="eq-tier-desc">${eq.t3}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// 4. 맵 정보 렌더링 (소형/중형/대형 필터)
function renderMapsPage(filterCategory = 'ALL') {
    const container = document.getElementById('maps-container');
    const filtered = mapsData.filter(m => filterCategory === 'ALL' || m.size === filterCategory);

    container.innerHTML = filtered.map(m => `
        <div class="map-card">
            <div class="map-header">
                <span class="map-name">${m.name}</span>
                <span class="map-badge ${m.size}">${m.size}</span>
            </div>
            <div class="map-info-list">
                <div class="map-info-item"><strong>규모/구조:</strong> ${m.rooms} (${m.floors})</div>
                ${m.fuse ? `<div class="map-info-item"><strong>두꺼비집 스폰:</strong> ${m.fuse}</div>` : ''}
            </div>
            <p class="dict-text">${m.desc}</p>
        </div>
    `).join('');
}

function filterMapCategory(cat) {
    document.querySelectorAll('.map-filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderMapsPage(cat);
}

// 5. 공략 렌더링
function renderGuidePage() {
    const container = document.getElementById('guide-container');
    container.innerHTML = guidesData.map(g => `
        <div class="guide-card">
            <div class="guide-card-title">${g.title}</div>
            <div class="guide-card-body">${g.desc}</div>
        </div>
    `).join('');
}

// 필터 토글
function toggleFilter(filterKey) {
    activeSpecialFilters[filterKey] = !activeSpecialFilters[filterKey];
    renderUI();
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
            <p style="margin-bottom: 6px;">• 6 Tanglewood Drive 리워크 반영 완료</p>
            <p>• 장비 Tier I~III 및 위키 유령 스펙 데이터 구축 완료</p>
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
