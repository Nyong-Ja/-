// ==========================================
// 파스모포비아 유령 데이터베이스 & 로직
// ==========================================

const GHOST_DATA = [
    {
        name: "스피릿",
        engName: "Spirit",
        evidences: ["EMF 5", "스피릿 박스", "고스트 라이팅"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+스피릿+공략",
        tip: "향초에 정화되면 180초 동안 헌팅을 시작하지 못합니다.",
        huntSanity: "50%",
        specialTrait: "향초 방어 시간이 기본(90초)의 2배인 180초입니다.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "레이스",
        engName: "Wraith",
        evidences: ["EMF 5", "스피릿 박스", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+레이스+공략",
        tip: "소금을 절대 밟지 않으며 플레이어 위치로 순간이동 능력을 사용합니다.",
        huntSanity: "50%",
        specialTrait: "소금을 밟지 않으며 순간이동 후 근처 플레이어에게 EMF 2/5 발생.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: true
    },
    {
        name: "팬텀",
        engName: "Phantom",
        evidences: ["스피릿 박스", "손자국", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+팬텀+공략",
        tip: "바라볼 때 정신력이 크게 깎이며 사진을 찍으면 모습이 사라집니다.",
        huntSanity: "50%",
        specialTrait: "사진 촬영 시 모습이 지워지고 깜빡임 주기가 매우 깁니다(Invisible 타임이 긺).",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: true
    },
    {
        name: "폴터가이스트",
        engName: "Poltergeist",
        evidences: ["스피릿 박스", "손자국", "고스트 라이팅"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+폴터가이스트+공략",
        tip: "물건을 한꺼번에 멀리 던지는 폭발 능력을 사용합니다.",
        huntSanity: "50%",
        specialTrait: "여러 물건을 동시에 투척하며 물건 1개당 정신력 2% 차감.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "벤시",
        engName: "Banshee",
        evidences: ["손자국", "고스트 오브", "DOTS"],
        sanity: "타겟 정신력 50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+벤시+공략",
        tip: "특정 플레이어 1명을 지정해 추적하며 마이크로폰 고유 비명 소리가 존재합니다.",
        huntSanity: "타겟 정신력 50%",
        specialTrait: "지향성 마이크 사용 시 특수 비명(Wail)을 들려줌.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: true
    },
    {
        name: "진",
        engName: "Jinn",
        evidences: ["EMF 5", "손자국", "서늘함"],
        sanity: "50%",
        speed: "1.7 ~ 2.5 m/s",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+진+공략",
        tip: "두꺼비집이 켜져 있고 플레이어가 멀리 있으면 빠르게 가속합니다.",
        huntSanity: "50%",
        specialTrait: "두꺼비집을 내리지 못하며 플레이어가 시야에 있으면 멀리서 2.5m/s로 급가속.",
        forcedEvidence: "없음",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "메어",
        engName: "Mare",
        evidences: ["스피릿 박스", "고스트 오브", "고스트 라이팅"],
        sanity: "불 꺼짐 60% / 불 켜짐 40%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+메어+공략",
        tip: "어둠 속에서 더 강해지며 불을 즉시 끄는 능력이 있습니다.",
        huntSanity: "불 꺼짐 60% / 켜짐 40%",
        specialTrait: "전등을 켜두면 헌팅 확률이 줄어들며 켜진 불을 즉시 끄는 능력 보유.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "레버넌트",
        engName: "Revenant",
        evidences: ["고스트 오브", "고스트 라이팅", "서늘함"],
        sanity: "50%",
        speed: "평소 1.0 m/s / 추적 3.0 m/s",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+레버넌트+공략",
        tip: "평소에는 굼벵이처럼 느리지만 시야에 타겟이 들어오면 폭발적으로 빨라집니다.",
        huntSanity: "50%",
        specialTrait: "시야 추적 시 3.0m/s 급가속, 시야에서 벗어나면 다시 1.0m/s 감속.",
        forcedEvidence: "없음",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "쉐이드",
        engName: "Shade",
        evidences: ["EMF 5", "고스트 라이팅", "서늘함"],
        sanity: "35%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+쉐이드+공략",
        tip: "수줍음이 많은 유령으로 플레이어가 같은 방에 있으면 상호작용 및 헌팅을 꺼립니다.",
        huntSanity: "35%",
        specialTrait: "같은 방에 사람이 있으면 헌팅 불가, 실체화 시 그림자/투명 형태 선호.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "데몬",
        engName: "Demon",
        evidences: ["손자국", "고스트 라이팅", "서늘함"],
        sanity: "기본 70% (특수능력 100%)",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+데몬+공략",
        tip: "가장 공격적인 유령으로 높은 정신력에서도 무차별 헌팅을 시작합니다.",
        huntSanity: "70% (특수 능력 시 100%)",
        specialTrait: "향초 재사용 쿨타임이 60초로 짧으며 십자가 범위를 넓게 받음.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "요괴",
        engName: "Yokai",
        evidences: ["스피릿 박스", "고스트 오브", "DOTS"],
        sanity: "근처 대화 시 80% / 기본 50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+요괴+공략",
        tip: "유령 근처에서 음성 대화를 나누면 정신력이 높아도 헌팅에 노출됩니다.",
        huntSanity: "근처 대화 시 80%",
        specialTrait: "헌팅 중 감지할 수 있는 음성/전자기기 범위가 2m 이내로 제한됨.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "한투",
        engName: "Hantu",
        evidences: ["손자국", "고스트 오브", "서늘함"],
        sanity: "50%",
        speed: "온도에 따라 1.4 ~ 2.7 m/s (시야가속 X)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+한투+공략",
        tip: "추운 곳에서 매우 빠르고 따뜻한 곳에서 느려지며 입김을 내뿜습니다.",
        huntSanity: "50%",
        specialTrait: "시야 가속이 없으며 헌팅 중 입김 입자 가시화, 서늘함 고정 증거.",
        forcedEvidence: "서늘함",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: true,
        hasTargetRoam: false
    },
    {
        name: "고료",
        engName: "Goryo",
        evidences: ["EMF 5", "손자국", "DOTS"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+고료+공략",
        tip: "DOTS 프로젝터 영상은 비디오 카메라를 통해서만 육안 확인이 가능합니다.",
        huntSanity: "50%",
        specialTrait: "사람이 방에 없어야 카메라로 DOTS 확인 가능, 고스트 룸 이탈률이 낮음.",
        forcedEvidence: "DOTS",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: true,
        hasTargetRoam: false
    },
    {
        name: "묠링",
        engName: "Myling",
        evidences: ["EMF 5", "손자국", "고스트 라이팅"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+묠링+공략",
        tip: "헌팅 시 발소리가 매우 조용하여 가까이 접근해야만 들립니다.",
        huntSanity: "50%",
        specialTrait: "발소리가 전자기기 교란 범위(약 10m) 안에서만 들릴 정도로 정숙함.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "온료",
        engName: "Onryo",
        evidences: ["스피릿 박스", "고스트 오브", "서늘함"],
        sanity: "60%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+온료+공략",
        tip: "양초 불빛을 두려워하며 불이 꺼질 때 헌팅이 유발될 수 있습니다.",
        huntSanity: "60%",
        specialTrait: "불이 꺼질 때마다 십자가 대용으로 간주되지만 3번째 불이 꺼지면 즉시 헌팅.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "트윈스",
        engName: "The Twins",
        evidences: ["EMF 5", "스피릿 박스", "서늘함"],
        sanity: "50%",
        speed: "본체 1.5 m/s / 분신 1.87 m/s",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+트윈스+공략",
        tip: "본체와 분신이 서로 다른 위치에서 동시에 상호작용을 일으킵니다.",
        huntSanity: "50%",
        specialTrait: "어느 쪽이 헌팅을 시작했는지에 따라 발소리 속도가 미세하게 다름.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "라이주",
        engName: "Raiju",
        evidences: ["EMF 5", "고스트 오브", "DOTS"],
        sanity: "근처 전자기기 켜짐 65% / 기본 50%",
        speed: "전자기기 근처 2.5 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+라이주+공략",
        tip: "작동 중인 전자기기가 주변에 있으면 대폭 가속하고 일찍 헌팅합니다.",
        huntSanity: "전자기기 근처 65%",
        specialTrait: "켜진 전자장비 근처에서 2.5m/s 이동, 전자기기 교란 범위가 넓음(15m).",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false
    },
    {
        name: "오바케",
        engName: "Obake",
        evidences: ["EMF 5", "손자국", "고스트 오브"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+오바케+공략",
        tip: "6손가락 손자국을 남기거나 헌팅 중 다른 유령 모습으로 순간 변신합니다.",
        huntSanity: "50%",
        specialTrait: "손자국이 빨리 사라지거나 6손가락 표식 생성, 헌팅 시 모습 변신(Shape-shift).",
        forcedEvidence: "손자국",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: true,
        hasTargetRoam: false
    },
    {
        name: "미믹",
        engName: "The Mimic",
        evidences: ["스피릿 박스", "손자국", "서늘함", "고스트 오브(가짜 증거)"],
        sanity: "복제 유령 상태에 따라 다름",
        speed: "복제 유령 상태에 따라 다름",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+미믹+공략",
        tip: "모든 유령의 특성을 복사하며 항상 가짜 고스트 오브를 내뿜습니다.",
        huntSanity: "복제 유령에 따름",
        specialTrait: "증거 3개 외 추가로 항상 고스트 오브가 관찰되는 4증거 유령.",
        forcedEvidence: "고스트 오브(가짜)",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: true,
        hasTargetRoam: false
    },
    {
        name: "모로이",
        engName: "Moroi",
        evidences: ["스피릿 박스", "고스트 라이팅", "서늘함"],
        sanity: "50%",
        speed: "정신력 저하 시 1.5 ~ 2.25 m/s",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+모로이+공략",
        tip: "스피릿 박스로 저주를 걸며 플레이어의 정신력이 낮을수록 이동 속도가 극도로 빨라집니다.",
        huntSanity: "50%",
        specialTrait: "스피릿 박스 반응 수신 시 저주 부여(정신력 감소 속도 2배), 향초 실명 시간 12초.",
        forcedEvidence: "스피릿 박스",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: true,
        hasTargetRoam: false
    },
    {
        name: "데오겐",
        engName: "Deogen",
        evidences: ["스피릿 박스", "고스트 라이팅", "DOTS"],
        sanity: "40%",
        speed: "원거리 3.0 m/s / 근접 0.4 m/s",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+데오겐+공략",
        tip: "숨어도 항상 위치를 파악하고 찾아오지만, 가까이 오면 걸어서 피할 정도로 매우 느려집니다.",
        huntSanity: "40%",
        specialTrait: "스피릿 박스 특수 중저음 거친 숨소리 반응(후욱후욱), 캐비닛/장롱 은신 불가.",
        forcedEvidence: "스피릿 박스",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: true,
        hasTargetRoam: true
    },
    {
        name: "타에",
        engName: "Thaye",
        evidences: ["고스트 오브", "고스트 라이팅", "DOTS"],
        sanity: "초기 75% -> 나이듦에 따라 15%",
        speed: "초기 2.75 m/s -> 나이듦에 따라 1.0 m/s (시야가속 X)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+타에+공략",
        tip: "초반에는 엄청 빠르고 공격적이지만, 플레이어가 부근에 상주하면 나이를 먹고 약해집니다.",
        huntSanity: "초기 75% -> 15%",
        specialTrait: "시간이 지남에 따라 헌팅 정신력/속도가 감소함, 시야 가속 없음.",
        forcedEvidence: "없음",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false
    }
];

// 장비 가이드 데이터
const EQUIPMENT_DATA = [
    { name: "EMF 측정기", category: "정보 수집", t1: "T1: 아날로그 바늘형 (범위 좁음)", t2: "T2: 디지털 수치형 (소리 명확)", t3: "T3: 3D 서라운드 다중 탐지기" },
    { name: "DOTS 프로젝터", category: "증거 확인", t1: "T1: 손전등형 수동 거치", t2: "T2: 고정 설치 레이저 그리드", t3: "T3: 광범위 회전형 스캔 레이저" },
    { name: "자외선 라이트", category: "증거 확인", t1: "T1: 형광봉 (시간 경과 시 빛 약해짐)", t2: "T2: 손전등형 UV 라이트", t3: "T3: 광범위 UV 차징 랜턴" },
    { name: "비디오 카메라", category: "증거 확인", t1: "T1: 구형 흑백 비디오", t2: "T2: HD 컬러 카메라", t3: "T3: 고화질 스마트 노이즈 캔슬링 카메라" },
    { name: "스피릿 박스", category: "음성 대화", t1: "T1: 라디오 신호 혼선형 (노이즈 심함)", t2: "T2: 스피커 탑재 오디오 박스", t3: "T3: 고성능 노이즈 필터링 스피릿 박스" },
    { name: "향초 (정화)", category: "방어/안전", t1: "T1: 일반 향초 (범위 좁음)", t2: "T2: 정화 향 스틱 (이동 시용)", t3: "T3: 훈증용 연막 향초 (유령 정지 효과)" }
];

// 맵 정보 데이터
const MAP_DATA = [
    { name: "6 Tanglewood Drive", category: "Small", rooms: "11개 방", size: "소형 주택", tip: "가장 기본이 되는 표준 조사 맵입니다." },
    { name: "42 Edgefield Road", category: "Small", rooms: "16개 방", size: "2층 주택", tip: "복도가 길고 문이 많아 유령 상호작용 체크에 용이합니다." },
    { name: "10 Ridgeview Court", category: "Small", rooms: "12개 방", size: "2층 주택", tip: "지하실과 지하 차고 간의 연결 동선을 파악해야 합니다." },
    { name: "Grafton Farmhouse", category: "Small", rooms: "13개 방", size: "목조 농가", tip: "나무 바닥이라 발소리가 또렷하게 울립니다." },
    { name: "Camp Woodwind", category: "Small", rooms: "야외 캠핑장", size: "소형 야외", tip: "동선이 매우 짧아 빠른 파밍과 테스트에 적합합니다." },
    { name: "Prison", category: "Medium", rooms: "29개 방", size: "중형 교도소", tip: "A동/B동 수감구역의 중앙 전원 확보가 중요합니다." },
    { name: "Maple Lodge Campsite", category: "Medium", rooms: "야외 캠핑장", size: "중형 야외", tip: "날씨(비/안개)에 따른 시야 확보에 주의하세요." },
    { name: "Sunny Meadows", category: "Large", rooms: "60개 이상의 방", size: "대형 정신병원", tip: "중앙 홀을 중심으로 각 구역별 사전 탐색이 필수적입니다." }
];

// 핵심 공략 데이터
const GUIDE_DATA = [
    { title: "헌팅 속도로 유령 구분하기 (BPM 스피드 팁)", body: "기본 1.7m/s보다 또렷하게 빠른 경우: 진(두꺼비집 켜짐), 라이주(전자기기 근처), 모로이(저정신력), 데오겐(원거리). 기본보다 느린 경우: 레버넌트(시야 밖), 데오겐(근접)." },
    { title: "십자가 및 향초 방어 활용 법", body: "십자가는 유령이 헌팅을 시작하려는 '지점'이 범위를 덮어야 작동합니다. 향초는 유령 근처에서 피우면 시야를 6초간 마비시키고 안전지대로 이탈할 수 있게 해줍니다." },
    { title: "정신력 관리와 커스텀 아이템 활용", body: "양초 불빛 아래 있으면 정신력이 감소하지 않습니다. 타로 카드, 위자드 보드 등 커스텀 아이템 사용 시 즉시 헌팅 위험에 노출되므로 주의하세요." }
];

// 탭 상태 관리
let includedEvidences = [];
let excludedEvidences = [];
let activeFilters = {
    hasAccel: false,
    hasSpecialSpeed: false,
    hasForcedEv: false,
    hasTargetRoam: false
};

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    initEvidenceButtons();
    renderGhostList();
    renderGhostDictionary();
    renderEquipment();
    renderMaps('ALL');
    renderGuides();
});

// 1. 증거 버튼 클릭 상태 토글 (미선택 -> 포함 -> 제외 -> 미선택)
function initEvidenceButtons() {
    const buttons = document.querySelectorAll('.evidence-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const ev = btn.getAttribute('data-evidence');
            if (!includedEvidences.includes(ev) && !excludedEvidences.includes(ev)) {
                // 포함 상태로 변경
                includedEvidences.push(ev);
                btn.classList.add('included');
            } else if (includedEvidences.includes(ev)) {
                // 제외 상태로 변경
                includedEvidences = includedEvidences.filter(e => e !== ev);
                btn.classList.remove('included');
                excludedEvidences.push(ev);
                btn.classList.add('excluded');
            } else {
                // 미선택 상태로 초기화
                excludedEvidences = excludedEvidences.filter(e => e !== ev);
                btn.classList.remove('excluded');
            }
            renderGhostList();
        });
    });

    // 선택 초기화 버튼
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            includedEvidences = [];
            excludedEvidences = [];
            buttons.forEach(btn => {
                btn.classList.remove('included', 'excluded');
            });
            // 필터 칩 해제
            activeFilters = { hasAccel: false, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false };
            document.querySelectorAll('.filter-chip input').forEach(input => input.checked = false);
            renderGhostList();
        });
    }
}

// 필터 토글
function toggleFilter(filterKey) {
    activeFilters[filterKey] = !activeFilters[filterKey];
    renderGhostList();
}

// 2. 유령 메인 추론 목록 렌더링
function renderGhostList() {
    const container = document.getElementById('ghost-list-container');
    const countEl = document.getElementById('ghost-count');
    if (!container) return;

    container.innerHTML = '';

    const filtered = GHOST_DATA.filter(ghost => {
        // 포함 증거 체크
        for (let ev of includedEvidences) {
            if (!ghost.evidences.includes(ev)) return false;
        }
        // 제외 증거 체크
        for (let ev of excludedEvidences) {
            if (ghost.evidences.includes(ev)) return false;
        }
        // 특별 필터 조건
        if (activeFilters.hasAccel && !ghost.hasAccel) return false;
        if (activeFilters.hasSpecialSpeed && !ghost.hasSpecialSpeed) return false;
        if (activeFilters.hasForcedEv && !ghost.hasForcedEv) return false;
        if (activeFilters.hasTargetRoam && !ghost.hasTargetRoam) return false;

        return true;
    });

    if (countEl) countEl.innerText = filtered.length;

    filtered.forEach(ghost => {
        const card = document.createElement('div');
        card.className = 'ghost-card';

        const evidencesHtml = ghost.evidences.map(ev => {
            const isMatched = includedEvidences.includes(ev) ? 'matched' : '';
            return `<span class="ev-tag ${isMatched}">${ev}</span>`;
        }).join(' ');

        card.innerHTML = `
            <div class="ghost-card-header">
                <img src="images/ghosts/skull.png" onerror="this.src='https://api.iconify.design/game-icons:declared-identity.svg?color=%23b49eff'" class="ghost-icon" alt="유령">
                <div class="ghost-name">${ghost.name}</div>
                <div class="ghost-badge-group">
                    <span class="ghost-speed">속도: ${ghost.speed}</span>
                    <span class="ghost-sanity">정신력: ${ghost.sanity}</span>
                </div>
            </div>
            <div class="ghost-evidences">${evidencesHtml}</div>
            <div class="main-youtube-wrapper">
                <a href="${ghost.ytUrl}" target="_blank" class="yt-btn">
                    <span class="yt-icon">▶</span> 특징 & 공략 영상 보기
                </a>
            </div>
            <details class="ghost-details">
                <summary class="ghost-summary">
                    <span>💡 상세 정보 및 특징</span>
                    <span class="more-btn">더보기 ▾</span>
                </summary>
                <p class="ghost-tip-content">${ghost.tip}</p>
            </details>
        `;
        container.appendChild(card);
    });
}

// 3. 유령 도감 렌더링
function renderGhostDictionary() {
    const container = document.getElementById('ghost-dictionary-container');
    if (!container) return;
    container.innerHTML = '';

    GHOST_DATA.forEach(ghost => {
        const card = document.createElement('div');
        card.className = 'dict-card';
        card.innerHTML = `
            <div class="dict-header">
                <div class="dict-title">${ghost.name} (${ghost.engName})</div>
            </div>
            <div class="dict-spec-bar">
                <div class="dict-spec-item"><strong>헌팅 정신력:</strong> ${ghost.huntSanity}</div>
                <div class="dict-spec-item"><strong>이동 속도:</strong> ${ghost.speed}</div>
                <div class="dict-spec-item"><strong>고정 증거:</strong> ${ghost.forcedEvidence}</div>
            </div>
            <div class="dict-section-title">증거 목록</div>
            <p class="dict-text">${ghost.evidences.join(', ')}</p>
            <div class="dict-section-title">고유 특성 & 대응법</div>
            <p class="dict-text">${ghost.specialTrait}</p>
        `;
        container.appendChild(card);
    });
}

// 4. 장비 가이드 렌더링
function renderEquipment() {
    const container = document.getElementById('equipment-container');
    if (!container) return;
    container.innerHTML = '';

    EQUIPMENT_DATA.forEach(eq => {
        const card = document.createElement('div');
        card.className = 'eq-card';
        card.innerHTML = `
            <div class="eq-header">
                <div class="eq-name">${eq.name}</div>
                <span class="eq-category">${eq.category}</span>
            </div>
            <div class="eq-tier-box">
                <div class="eq-tier-title">Tier 1</div>
                <div class="eq-tier-desc">${eq.t1}</div>
            </div>
            <div class="eq-tier-box">
                <div class="eq-tier-title">Tier 2</div>
                <div class="eq-tier-desc">${eq.t2}</div>
            </div>
            <div class="eq-tier-box">
                <div class="eq-tier-title">Tier 3</div>
                <div class="eq-tier-desc">${eq.t3}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 5. 맵 정보 렌더링 및 카테고리 필터링
function renderMaps(category = 'ALL') {
    const container = document.getElementById('maps-container');
    if (!container) return;
    container.innerHTML = '';

    const filtered = category === 'ALL' ? MAP_DATA : MAP_DATA.filter(m => m.category === category);

    filtered.forEach(map => {
        const card = document.createElement('div');
        card.className = 'map-card';
        card.innerHTML = `
            <div class="map-header">
                <div class="map-name">${map.name}</div>
                <span class="map-badge ${map.category}">${map.category}</span>
            </div>
            <div class="map-info-list">
                <div class="map-info-item"><strong>구조:</strong> ${map.size} (${map.rooms})</div>
            </div>
            <p class="dict-text">💡 ${map.tip}</p>
        `;
        container.appendChild(card);
    });
}

function filterMapCategory(cat) {
    document.querySelectorAll('.map-filter-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.getElementById(`map-btn-${cat}`);
    if (targetBtn) targetBtn.classList.add('active');
    renderMaps(cat);
}

// 6. 핵심 공략 렌더링
function renderGuides() {
    const container = document.getElementById('guide-container');
    if (!container) return;
    container.innerHTML = '';

    GUIDE_DATA.forEach(g => {
        const card = document.createElement('div');
        card.className = 'guide-card';
        card.innerHTML = `
            <div class="guide-card-title">🔥 ${g.title}</div>
            <div class="guide-card-body">${g.body}</div>
        `;
        container.appendChild(card);
    });
}

// 탭 전환 함수 (맵 정보 클릭 시 바로 '전체 맵' 렌더링 적용)
function switchTab(tabId) {
    // 버튼 활성화 스타일
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // 탭 컨텐츠 보이기
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    // 맵 탭 선택 시 즉시 '전체 맵' 필터 렌더링 수행
    if (tabId === 'maps') {
        filterMapCategory('ALL');
    }
}

// 우측 슬라이드 패널 토글
function toggleQuickPanel(panelType) {
    const panel = document.getElementById('quick-slide-panel');
    const titleEl = document.getElementById('quick-panel-title');
    const contentEl = document.getElementById('quick-panel-content');

    if (!panel) return;

    if (panel.classList.contains('open') && panel.getAttribute('data-type') === panelType) {
        panel.classList.remove('open');
        return;
    }

    panel.setAttribute('data-type', panelType);
    panel.classList.add('open');

    if (panelType === 'search') {
        titleEl.innerText = "🔍 빠른 단어 검색";
        contentEl.innerHTML = `
            <input type="text" class="search-input-box" placeholder="검색어를 입력하세요..." onkeyup="handleQuickSearch(this.value)">
            <div id="quick-search-results"></div>
        `;
    } else if (panelType === 'news') {
        titleEl.innerText = "📢 최근 패치 안내";
        contentEl.innerHTML = "<p>패치 소식 탭에서 상세 내역을 확인하실 수 있습니다.</p>";
    } else if (panelType === 'stream') {
        titleEl.innerText = "📺 방송 정보";
        contentEl.innerHTML = "<p>치트시트 개발 및 피드백 제보는 뇽자 방송/커뮤니티를 통해 진행됩니다.</p>";
    } else if (panelType === 'contact') {
        titleEl.innerText = "✉️ 제보 및 문의";
        contentEl.innerHTML = "<p>버그 및 정보 제보는 언제나 환영합니다!</p>";
    }
}

function closeQuickPanel() {
    const panel = document.getElementById('quick-slide-panel');
    if (panel) panel.classList.remove('open');
}

function handleQuickSearch(query) {
    const resultsContainer = document.getElementById('quick-search-results');
    if (!resultsContainer || !query.trim()) {
        if (resultsContainer) resultsContainer.innerHTML = '';
        return;
    }

    const q = query.toLowerCase();
    const matched = GHOST_DATA.filter(g => g.name.toLowerCase().includes(q) || g.tip.toLowerCase().includes(q));

    resultsContainer.innerHTML = matched.map(g => `
        <div class="search-result-card">
            <div class="search-result-title">${g.name}</div>
            <div style="font-size:0.9rem; color:#a3a6c9;">${g.tip}</div>
        </div>
    `).join('');
}
