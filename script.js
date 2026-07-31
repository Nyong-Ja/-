// 나무위키(Phasmophobia/유령) 최신 데이터 기준 29종 전체 유령 DB
// youtubeUrl 항목에 유령별 유튜브 영상 주소를 넣어주시면 됩니다.
const ghosts = [
    { 
        name: "스피릿 (Spirit)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["EMF 5", "고스트 라이팅", "스피릿 박스"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "특별한 공격적 장점이나 이동 속도 변동은 없으나 가장 흔하고 전형적인 헌팅 패턴을 가짐",
        weakness: "정화 향초(Incense)를 맞으면 180초(3분) 동안 사냥을 시작할 수 없음 (일반 유령 90초, 데몬 60초)",
        tip: "💡 정화 향초를 피운 후 90초~180초 사이에 사냥이 발동하지 않는다면 스피릿 가능성이 매우 높습니다. 고난이도에서 소거법으로 판별할 때는 정신력을 0%로 만들고 3분간 타이머를 측정하며 테스트하는 것이 정석입니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "레이스 (Wraith)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["EMF 5", "스피릿 박스", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: true,
        strength: "벽과 장애물을 관통하여 거리와 층간에 상관없이 무작위 플레이어 등 뒤로 순간이동하여 EMF 2 또는 5단계 신호를 남김",
        weakness: "소금을 절대 밟지 않음 (소금 상호작용 및 자외선 발자국 미발생)",
        tip: "💡 소금을 유령 동선에 설치했을 때 유령이 위를 통과해도 소금이 흩날리지 않거나, 자외선(UV)등을 비췄을 때 발자국 흔적이 전혀 찍히지 않는다면 100% 레이스입니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "팬텀 (Phantom)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["스피릿 박스", "손자국", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: true,
        strength: "실체화 상태에서 팬텀을 바라볼 경우 주변 10m 이내 플레이어의 정신력이 초당 0.5%씩 급격히 감소함. 무작위 플레이어에게 다가가는 스토킹 능력 보유",
        weakness: "실체화 이벤트 중 유령 사진을 찍으면 순간 실체가 스르륵 사라짐 (사진첩에는 노이즈 없이 '유령'으로 정상 촬영됨)",
        tip: "💡 유령 이벤트가 떴을 때 카메라로 찍어서 모습이 완전히 사라졌는데 심장 소리나 오디오는 계속 유지된다면 팬텀입니다. 헌팅 점멸 시간(1~2초)이 길어 투명한 시간이 길어집니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "폴터가이스트 (Poltergeist)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["스피릿 박스", "손자국", "고스트 라이팅"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "주변의 여러 물건을 한 번에 크게 날려버리는 '물건 폭발' 능력을 사용하며, 던져진 물건 1개당 주변 플레이어의 정신력을 2%씩 기습 차감함",
        weakness: "던질 사물이 없는 빈 방에서는 특수 능력이 완전히 무력화됨",
        tip: "💡 물건을 한곳에 수십 개 모아두었을 때 사방으로 장풍처럼 튀어나가는지 확인하세요. 폴터가이스트가 지나간 자리는 식탁 물건이 싹 청소됩니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "밴시 (Banshee)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "목표물 50%", 
        evidence: ["손자국", "고스트 오브", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: true,
        strength: "파티원 중 오직 1명의 '목표물(타겟)'만 지정하여 스토킹하며, 오직 타겟 플레이어의 정신력만 측정하여 헌팅을 시작함 (여성 유령 모델 전용)",
        weakness: "파라볼릭 마이크 / 사운드 레코더 사용 시 33% 확률로 찢어지는 듯한 고유 여성 비명 소리를 출력함",
        tip: "💡 밴시는 타겟이 사망하거나 나가지 않는 이상 타겟을 바꾸지 않으며, 헌팅 시에도 타겟이 아니면 지나쳐 가며 죽이지 못합니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "진 (Jinn)", 
        speed: "1.7 ~ 2.5 m/s", 
        sanity: "50%", 
        evidence: ["EMF 5", "손자국", "서늘함"], 
        hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false,
        strength: "두꺼비집이 올라가 있을 때 3m 이상 떨어진 플레이어를 목격하면 2.5 m/s로 초고속 급가속하여 다가옴. 퓨즈가 켜져 있을 때 순간적으로 정신력 -25% 차감 능력 사용",
        weakness: "두꺼비집(퓨즈박스)을 내리면 특수 능력이 봉인되며, 진은 스스로 두꺼비집을 끌 수 없음",
        tip: "💡 퓨즈가 올려져 있을 때 멀리서 미친 듯이 뛰어오다가 내 앞 3m 근처에 오면 속도가 갑자기 일반 속도(1.7 m/s)로 뚝 떨어집니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "메어 (Mare)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "불 꺼짐 60% / 불 켜짐 40%", 
        evidence: ["스피릿 박스", "고스트 오브", "고스트 라이팅"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "현재 유령이 위치한 방의 전등이 꺼져 있으면 사냥 임계점이 정신력 60%로 상승하며, 전등을 끌 확률과 전구를 깨뜨릴 확률이 높음",
        weakness: "전등이 켜진 방에서는 사냥 임계점이 40%로 하락하며, 스스로 전등 스위치를 켤 수 없음",
        tip: "💡 플레이어가 전등 스위치를 켜자마자 0.1초 만에 딸깍하고 즉시 꺼버리는 쿨타임 무시 특성을 자주 보여줍니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "레버넌트 (Revenant)", 
        speed: "1.0 / 3.0 m/s (가속 X)", 
        sanity: "50%", 
        evidence: ["고스트 오브", "고스트 라이팅", "서늘함"], 
        hasAccel: false, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false,
        strength: "헌팅 중 시야에 플레이어가 들어오거나 위치를 인식하는 즉시 3.0 m/s 초폭속으로 추격함",
        weakness: "시야에 플레이어가 없거나 감지하지 못했을 때는 1.0 m/s로 매우 둔하게 배회함",
        tip: "💡 헌팅 발소리가 뚜... 뚜... 하고 느리다가, 플레이어를 목격하는 순간 타타타타! 하고 미친 듯한 폭속으로 바뀝니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "셰이드 (Shade)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "35%", 
        evidence: ["EMF 5", "고스트 라이팅", "서늘함"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "사냥 시작 임계점이 정신력 35%로 모든 유령 중 가장 낮음. 유령 이벤트 발생 확률이 정신력 저하에 비례함",
        weakness: "플레이어가 유레이와 같은 방에 단 한 명이라도 존재할 경우, 배회를 제외한 상호작용 및 헌팅이 완전히 불가능해짐",
        tip: "💡 유령방에 파티원들이 모여있을 때는 아무 반응도 안 하다가, 혼자 남거나 정신력이 35% 밑으로 떨어져야 행동하기 시작합니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "데몬 (Demon)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "70% (특수 100%)", 
        evidence: ["손자국", "고스트 라이팅", "서늘함"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "기본 사냥 임계점이 70%로 매우 높으며, 낮은 확률로 정신력 100%에서도 즉시 사냥을 발동하는 특수 능력을 가짐. 사냥 쿨타임 20초",
        weakness: "십자가의 사냥 차단 범위가 5m(+50%)로 매우 넓음. 정화 향초 피격 시 헌팅 차단 시간이 60초로 짧음",
        tip: "💡 현관문을 열고 들어간 지 1분도 채 되지 않아 사냥이 터지거나 3티어 십자가가 방 전체를 커버하며 연속으로 타버린다면 데몬 확정입니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "유레이 (Yurei)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["고스트 오브", "서늘함", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "특수 능력 사용 시 5m 이내 플레이어들의 정신력을 15% 기습 차감하며, 유령방 문을 흔들다가 천천히 느리게 닫음. 현관문 닫기 능력 보유",
        weakness: "정화 향초에 맞을 경우 60초 동안 유령방 밖으로 나가지 못하고 방 안에만 갇혀 배회함",
        tip: "💡 문이 쾅 소리와 함께 빠르게 닫히는 일반 이벤트와 달리, 문을 흔들고 나서 '천천히 느리게' 닫히면서 정신력이 툭 떨어진다면 유레이입니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "오니 (Oni)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["EMF 5", "서늘함", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "사람이 같은 방에 있을 때 활동성이 대폭 상승함. 유령 이벤트 피격 시 플레이어의 정신력을 일반 유령(10%)의 2배인 20%나 차감함",
        weakness: "공기 방울(Ghost Mist) 안개 하악질 이벤트를 일으킬 수 없으며, 사냥 중 깜빡일 때 모습을 덜 감춤",
        tip: "💡 헌팅 때 유령이 깜빡거리며 투명해지는 시간이 거의 없이 모습이 계속 선명하게 보입니다. 안개 공기방울 이벤트를 목격했다면 오니를 즉시 제외하세요.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "요괴 (Yokai)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "80% (음성 반응)", 
        evidence: ["스피릿 박스", "고스트 오브", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "요괴 근처에서 마이크로 보이스를 내거나 무전을 칠 경우, 평균 정신력이 80%인 높은 상태에서도 사냥을 시작함",
        weakness: "사냥 중 목소리 감지 및 전자기기 감지 범위가 2.5m 이내로 극히 제한됨",
        tip: "💡 헌팅 중인 요괴 근처 3m 밖에서 대놓고 목소리를 내거나 무전을 켜고 떠들어도 나를 인식하지 못하고 그냥 지나쳐서 지나갑니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "한투 (Hantu)", 
        speed: "1.4 ~ 2.7 m/s (가속 X)", 
        sanity: "50%", 
        evidence: ["손자국", "고스트 오브", "서늘함"], 
        hasAccel: false, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: false,
        strength: "방의 온도가 낮을수록 이동 속도가 급상승함 (15°C 이상 1.4 m/s ~ 3°C 이하 2.7 m/s). 퓨즈를 내릴 확률이 2배 높음",
        weakness: "시야 가속이 전혀 없으며, 두꺼비집을 스스로 올릴 수 없음. 헌팅 중 입에서 흰 입김 입자를 불어냄",
        tip: "💡 시야 가속이 전혀 없는데 추운 유령방에서는 발소리가 매우 빠른 유령입니다. 헌팅 때 손전등을 끄고 유령 입가를 보면 입김이 보입니다. 악몽 이상 고정증거: 서늘함",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "고료 (Goryo)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["EMF 5", "손자국", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: true, hasTargetRoam: false,
        strength: "D.O.T.S. 프로젝터 실루엣이 육안으로는 절대로 보이지 않고, 오직 비디오 카메라/CCTV 모니터를 통해서만 관측됨",
        weakness: "유령방을 다른 방으로 이사할 수 없음 (로밍 범위 5m 제한)",
        tip: "💡 유령방 안에 사람이 없고 밖에서 비디오 카메라 모니터로 볼 때만 D.O.T.S.가 잡힌다면 고료 확정입니다. 악몽 이상 고정증거: DOTS",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "마이링 (Myling)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["EMF 5", "손자국", "고스트 라이팅"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "헌팅 시 발소리와 목소리가 들리는 범위가 12m로 매우 좁음 (전자기기 교란 범위 10m와 비슷함)",
        weakness: "파라볼릭 마이크 / 사운드 레코더에 속삭이는 초자연적 음성을 매우 빈번하게 남김",
        tip: "💡 손전등이 깜빡거리며 전자기기가 교란되기 시작하는데도 발소리가 전혀 들리지 않다가, 내 코앞에 접근해서야 발소리가 들린다면 마이링입니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "온료 (Onryo)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "60%", 
        evidence: ["스피릿 박스", "고스트 오브", "서늘함"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "양초/라이터 불꽃을 3번 끌 때마다 정신력과 관계없이 확정적으로 사냥을 시작함 (불꽃이 없을 시 기본 사냥 임계점 60%)",
        weakness: "주변 4m 이내에 불꽃이 켜져 있으면 십자가처럼 작동하여 사냥을 완전 차단함 (불꽃 존재 시 임계점 40%)",
        tip: "💡 유령방에 촛불을 켜두었을 때 3번째 불을 끌 때마다 십자가를 태우거나 즉시 사냥을 발동하면 온료입니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "라이주 (Raiju)", 
        speed: "1.7 ~ 2.5 m/s", 
        sanity: "65% (전자기기 주변)", 
        evidence: ["EMF 5", "고스트 오브", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false,
        strength: "작동 중인 전자기기 근처에 있을 때 이동 속도가 2.5 m/s로 급상승하며 65% 높은 정신력에서 사냥 시작 가능",
        weakness: "사냥 중 전자기기를 고장 내고 교란시키는 범위가 15m로 다른 유령(10m)보다 훨씬 넓음",
        tip: "💡 바닥에 장비를 켜두었을 때 이동 속도가 미친 듯이 빨라집니다. 증거 수집 장비를 꺼두면 속도가 일반 속도(1.7 m/s)로 떨어집니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "오바케 (Obake)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["EMF 5", "손자국", "고스트 오브"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: true, hasTargetRoam: false,
        strength: "16.7% 확률로 6손가락 손자국, 스위치 2개 지문, 철창 5개 지문을 남김. 지문 지속시간을 절반으로 빠르게 지움",
        weakness: "헌팅 중 6.6% 확률로 점멸 순간 다른 유령 모델로 둔갑(Morph)했다가 돌아옴",
        tip: "💡 자외선(UV)을 비췄을 때 손가락이 6개이거나, 사냥하는 모습을 주시할 때 순간적으로 모습이 다른 유령으로 바뀐다면 오바케입니다. 악몽 이상 고정증거: 자외선",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "미믹 (The Mimic)", 
        speed: "변동 (복제)", 
        sanity: "변동", 
        evidence: ["스피릿 박스", "손자국", "서늘함"], 
        hasAccel: true, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: true,
        strength: "다른 모든 유령의 행동, 이동 속도, 특수 능력을 주기적으로 완벽하게 복제함",
        weakness: "기본 3개 증거 외에 항상 '고스트 오브'를 4번째 거짓 증거(약점)로 항상 출력함",
        tip: "💡 전문/악몽 난이도에서 증거가 4개(고스트 오브 포함) 이상 발견되거나, 증거 0개 커스텀 난이도에서 고스트 오브가 보인다면 100% 미믹입니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "모로이 (Moroi)", 
        speed: "1.5 ~ 2.25 m/s", 
        sanity: "50%", 
        evidence: ["스피릿 박스", "고스트 라이팅", "서늘함"], 
        hasAccel: true, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: false,
        strength: "스피릿 박스나 마이크로폰 오디오를 들은 조사관에게 저주를 걸어 정신력 소모 속도를 2배로 만듦. 평균 정신력이 낮을수록 기본 속도가 2.25 m/s까지 상승함",
        weakness: "정화 향초를 맞으면 12초 동안 시야 및 추격이 차단됨 (일반 유령 6초)",
        tip: "💡 정신력이 0%에 가까울 때 기본 이동 속도가 매우 빠르고 시야 가속까지 중첩되어 폭속이 됩니다. 진정제를 먹으면 저주가 해제됩니다. 악몽 이상 고정증거: 스피릿 박스",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "데오겐 (Deogen)", 
        speed: "0.4 ~ 3.0 m/s (가속 X)", 
        sanity: "40%", 
        evidence: ["스피릿 박스", "고스트 라이팅", "DOTS"], 
        hasAccel: false, hasSpecialSpeed: true, hasForcedEv: true, hasTargetRoam: false,
        strength: "벽장이나 은신처에 숨어도 위치를 항상 맵핵처럼 알고 다가옴 (멀리서 3.0 m/s 폭속)",
        weakness: "플레이어 2m 근처에 접근 시 0.4 m/s로 거의 멈추듯 극도로 느려짐. 스피릿 박스 1m 밀착 시 33% 확률로 특수 신음 숨소리 출력",
        tip: "💡 절대로 캐비닛이나 은신처에 숨지 마세요! 평지나 탁자를 끼고 빙글빙글 카이팅(뺑뺑이)하면 쉽게 살아남을 수 있습니다. 악몽 이상 고정증거: 스피릿 박스",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "타에 (Thaye)", 
        speed: "1.0 ~ 2.75 m/s (가속 X)", 
        sanity: "75% ~ 15%", 
        evidence: ["고스트 오브", "고스트 라이팅", "DOTS"], 
        hasAccel: false, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false,
        strength: "게임 극초반 75% 높인 정신력에서 2.75 m/s 폭속 및 200% 높은 상호작용 확률로 사냥을 시작함",
        weakness: "플레이어가 근처에 머무르면 2분마다 체크하여 노화(최대 10단계)하며, 최종 1.0 m/s 속도와 정신력 15%로 대폭 약화됨",
        tip: "💡 시야 가속이 전혀 없으며, 유령방에서 같이 오래 머물수록 사냥 발소리가 확연히 느려집니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "트윈스 (The Twins)", 
        speed: "1.5 m/s (본체) / 1.87 m/s (분신)", 
        sanity: "50%", 
        evidence: ["EMF 5", "스피릿 박스", "서늘함"], 
        hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false,
        strength: "유령방 내부의 본체와 16m 이내 무작위 위치의 분신이 동시에 상호작용을 일으켜 그래프에 급경사를 만듦",
        weakness: "사냥 시작 시 50% 확률로 본체(1.5 m/s 느림) 또는 분신(1.87 m/s 빠름) 위치에서 번갈아 사냥을 발동함",
        tip: "💡 사냥 시 발소리 속도가 헌팅마다 살짝 느리거나 빠른 속도로 차이를 보입니다. 본체가 있는 유령방에 십자가를 깔아두면 분신 위치의 사냥도 차단됩니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "다얀 (Dayan)", 
        speed: "1.12 / 1.7 / 2.25 m/s (가속 X)", 
        sanity: "45% | 50% | 60%", 
        evidence: ["EMF 5", "고스트 오브", "스피릿 박스"], 
        hasAccel: false, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false,
        strength: "플레이어들이 가까이서 활발히 움직이거나 '춤추면' 스스로를 보호하기 위해 힘을 얻어 속도(2.25 m/s)와 사냥 임계점(60%)이 상승함 (여성 모델 전용)",
        weakness: "가까이 있는 플레이어들이 가만히 서 있으면 힘을 잃고 약화 상태(1.12 m/s, 45%)로 전환됨",
        tip: "💡 플레이어의 움직임 유무에 따라 약화, 일반, 격노 상태로 스탯이 실시간 변동합니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "갈루 (Gallu)", 
        speed: "1.36 / 1.7 / 1.96 m/s (가속 O)", 
        sanity: "40% | 50% | 60%", 
        evidence: ["EMF 5", "손자국", "스피릿 박스"], 
        hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false,
        strength: "보호 장비(십자가, 향초)를 사용하면 유령을 격분시켜 '격노' 상태(1.96 m/s, 60%)로 만들어 사냥을 자극함",
        weakness: "격노 상태는 갈루를 지치게 만들어 이후 약화 상태(1.36 m/s, 40%)로 전환되어 보호 장비가 더 효과적으로 작용함",
        tip: "💡 약화, 일반, 격노 3가지 상태를 가지며 보호 장비 자극 여부에 따라 성능이 변합니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "오밤보 (Obambo)", 
        speed: "1.45 / 1.96 m/s (가속 O)", 
        sanity: "10% | 65%", 
        evidence: ["고스트 라이팅", "손자국", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false,
        strength: "2분마다 상태가 변경되며, 공격적인 상태일 때는 사냥 임계점 65% 및 1.96 m/s 고속으로 사냥함",
        weakness: "차분한 상태일 때는 1.45 m/s 속도와 사냥 임계점 10%로 매우 순해지며, 공격적일 때는 사냥 지속시간이 20% 짧아짐",
        tip: "💡 2분 주기로 차분함과 공격성 사이를 오가며 상태에 따라 사냥 타이밍과 속도가 완전히 바뀝니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "아스왕 (Aswang)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["서늘함", "고스트 라이팅", "DOTS"], 
        hasAccel: true, hasSpecialSpeed: true, hasForcedEv: false, hasTargetRoam: false,
        strength: "목표를 눈으로 발견하면 추격 속도가 매우 가파르게 급상승함",
        weakness: "시야 확보 전 단순 탐색보다 추격을 선호하여 시야가 가려지면 추격 지속성이 떨어짐",
        tip: "💡 야생적이면서 도시 환경에 섞여 드는 유령으로 목격 시 가속 추격 특성이 매우 강합니다.",
        youtubeUrl: "https://www.youtube.com"
    },
    { 
        name: "코르모스 (Kormos)", 
        speed: "1.7 m/s (가속 O)", 
        sanity: "50%", 
        evidence: ["고스트 오브", "스피릿 박스", "손자국"], 
        hasAccel: true, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false,
        strength: "발달한 청각으로 주변의 미세한 소음과 플레이어 목소리를 예민하게 추적함",
        weakness: "앞을 보지 못하는 시각 장애 유령으로 시각적인 탐색 및 시야 추격 능력이 거의 없음",
        tip: "💡 '보지 않는 자'라는 뜻의 유령으로 앞을 보지 못하는 대신 뛰어난 청각으로 플레이어의 소리를 추적합니다.",
        youtubeUrl: "https://www.youtube.com"
    }
];

// 2. 주간 도전 과제 DB
const weeklyChallenges = [
    {
        title: "🎯 주간 도전 과제: 감각 차단 (Sensory Deprivation)",
        desc: "<strong>특수 규칙:</strong> 모든 손전등 사용 불가, 플레이어 속도 100%, 유령 속도 100%, 십자가/향초 지급 제한.<br>• <strong>클리어 팁:</strong> 양초와 양초 라이터를 적극 활용해 유령방 동선을 밝히고, 음파 측정기/파라볼릭을 적극 활용해 위치를 특정하세요."
    },
    {
        title: "⚡ 주간 도전 과제: 스피드런 (Speedrun)",
        desc: "<strong>특수 규칙:</strong> 플레이어 이동 속도 150%, 유령 이동 속도 150%, 준비 시간 0초, 정신력 100%.<br>• <strong>클리어 팁:</strong> 시작하자마자 유령방으로 빠르게 달려가 D.O.T.S와 EMF를 설치하고 고난이도 속도 사냥을 대비해 은신처 동선을 파악해두세요."
    },
    {
        title: "🙈 주간 도전 과제: 숨바꼭질 (Hide and Seek)",
        desc: "<strong>특수 규칙:</strong> 증거 0개 (악몽/광기 이상), 은신처 100% 개방, 정신력 약물 지급 불가.<br>• <strong>클리어 팁:</strong> 유령의 고유 발소리 패턴, 향초 맞춤 피격 반응, 양초 상호작용 및 오바케 지문 등 특수 능력을 테스트하여 유령을 추론하세요."
    }
];

// 3. ID 카드 및 명예 뱃지 DB
const idCardsData = [
    {
        name: "레벨 ID 카드 프리셋",
        category: "기본 플레이어 ID 카드",
        t1: "Tier I: 프레스티지 I (기본 목재 프레임 ID 카드)",
        t2: "Tier II: 프레스티지 III (은색 광택 금속 ID 카드)",
        t3: "Tier III: 프레스티지 X (네온 바이올렛 다이아몬드 ID 카드)"
    },
    {
        name: "이벤트 한정 ID 배지",
        category: "명예 업적 배지",
        t1: "🎃 할로윈 특별 배지: 할로윈 특별 도전과제 클리어 시 해금",
        t2: "❄️ 크리스마스 특별 배지: 메리 스노우맨 이벤트 완료 시 해금",
        t3: "🏆 아포칼립스 배지: 아포칼립스 골드 (15배율 한판 클리어 시 해금)"
    }
];

// 4. 패치 소식 DB
const patchNewsData = [
    {
        title: "📢 6 Tanglewood Drive 맵 대규모 리워크 패치노트",
        desc: "• 주방 인근 뺑뺑이 루핑 스팟 보완 및 지하 입구 구조 최적화<br>• 은신처 및 수장고 인근 오브젝트 배치 변경 및 유령 상호작용 그래픽 개선"
    },
    {
        title: "📢 유령 특성 밸런스 패치 (0.14 ~ 0.15 버전 기준)",
        desc: "• <strong>밴시:</strong> 여성 유령 모델 고정 및 층간 로밍 메커니즘 개선<br>• <strong>유레이:</strong> 문 닫기 상호작용 시 정신력 차감 범위 5m 설정 및 향초 피격 시 60초 유령방 가둠 고정<br>• <strong>데오겐:</strong> 스피릿 박스 1m 이내 밀착 사용 시 33% 확률 특수 거친 숨소리 주파수 고정출력"
    }
];

// 5. 장비 Fandom Wiki 데이터
const equipments = [
    { name: "EMF 측정기 (EMF Reader)", category: "증거 탐지", t1: "Tier I: 아날로그 바늘형 (범위 1.5m / 오차 높음)", t2: "Tier II: 디지털 LED 수치 표시 (범위 1.7m / 정확)", t3: "Tier III: 방향 표시 및 거리 사운드 지원 (범위 3.5m / 동시에 3개 감지)" },
    { name: "D.O.T.S. 프로젝트", category: "증거 탐지", t1: "Tier I: 핸디형 손전등 형태 (범위 5m / 이동식)", t2: "Tier II: 바닥 설치형 구체 레이저 (범위 2.5m)", t3: "Tier III: 넓은 범위 스캔 설치형 (범위 7m / 회전 기능)" },
    { name: "자외선 라이트 (UV Light)", category: "증거 탐지", t1: "Tier I: UV 형광 네온등 (스캔 속도 느림)", t2: "Tier II: 손전등형 UV 라이트 (충전 빠름)", t3: "Tier III: 강력한 UV 프로젝터 (넓은 영역 즉시 감지)" },
    { name: "스피릿 박스 (Spirit Box)", category: "음성 대화", t1: "Tier I: 신호 잡음 심함 (응답률 낮음 / 오디오 범위 짧음)", t2: "Tier II: 명확한 오디오 디스플레이 (응답률 보통)", t3: "Tier III: 노이즈 필터링 적용 (응답률 매우 높음 / 노이즈 최소화)" },
    { name: "정화용 향 (Incense)", category: "생존 / 지연", t1: "Tier I: 마른 향 다발 (효과 지속 5초 / 헌팅 차단)", t2: "Tier II: 향 항아리 (효과 지속 6초 / 슬로우 효과 5초)", t3: "Tier III: 에테르 향로 (효과 지속 7초 / 유령 이동 완전 정지)" },
    { name: "십자가 (Crucifix)", category: "방어 장비", t1: "Tier I: 나무 십자가 (범위 3m / 1회 차단)", t2: "Tier II: 금속 십자가 (범위 3m / 2회 차단)", t3: "Tier III: 성물 십자가 (범위 5m / 2회 차단 / 데몬 5m+a)" }
];

// 6. 맵 Fandom Wiki 데이터
const mapsData = [
    { name: "6 Tanglewood Drive", size: "Small", rooms: "11개 방", floors: "1층 + 지하실", fuse: "차고 또는 지하실", desc: "가장 인기 있는 대표 소형 주택입니다. 리워크 업데이트로 입구 동선과 숨기 장소가 최적화되어 빠른 조사에 적합합니다." },
    { name: "4 Ridgeview Court", size: "Small", rooms: "12개 방", floors: "2층 + 지하실", desc: "복도와 계단 구조가 좁아 유령 동선 확인에 용이합니다." },
    { name: "13 Edgefield Road", size: "Small", rooms: "16개 방", floors: "2층 + 지하실", desc: "방 개수가 많아 유령방 온도 측정이 중요합니다." },
    { name: "Camp Woodwind", size: "Small", rooms: "야외 캠핑장", floors: "평지 야외", desc: "탁 트인 1층 야외 공간으로 바람 소리와 텐트 뒤 숨기 스팟을 활용해야 합니다." },
    { name: "Prison", size: "Medium", rooms: "29개 구역", floors: "2층 구조", desc: "중앙 로비와 A/B 블록 감옥동으로 구성되어 파라볼릭 마이크 필수입니다." },
    { name: "Maple Lodge Campsite", size: "Medium", rooms: "캠핑장 전역", floors: "야외 + 통나무집", desc: "호수와 낚시터, 통나무 캐빈이 위치한 대형 캠핑장입니다." },
    { name: "Sunny Meadows Mental Institution", size: "Large", rooms: "69개 구역", floors: "1층, 2층, 지하실", desc: "파스모포비아 최대 규모의 병원 맵입니다. 동선이 매우 길어 트럭 장비 배치가 핵심입니다." }
];

// 7. 공략 데이터
const guidesData = [
    { title: "🔥 향(Incense) 타임 메커니즘", desc: "향을 태웠을 때 유령이 다시 헌팅을 시작하지 못하는 봉인 시간:<br>• <strong>스피릿:</strong> 180초 (3분)<br>• <strong>데몬:</strong> 60초 (1분)<br>• <strong>유레이:</strong> 90초 (단, 60초 동안 유령방 강제 배회 유포)<br>• <strong>일반 모든 유령:</strong> 90초 (1분 30초)" },
    { title: "📻 데오겐 특수 숨소리 주파수 판별법", desc: "데오겐은 스피릿 박스를 들고 유령과 1m 이내 거리에서 질문할 때 <strong>33% 확률로 '후욱후욱/하악하악' 하는 거친 신음 숨소리 주파수</strong>를 출력합니다." },
    { title: "🕯️ 온료(Onryo)의 촛불 헌팅 규칙", desc: "온료는 불꽃(촛불, 라이터)을 십자가처럼 사용합니다. 촛불이 <strong>3번 꺼질 때마다 확정적으로 헌팅을 시도</strong>하며, 주변 4m 내에 켜진 불꽃이 있으면 헌팅이 차단됩니다." },
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
            titleEl.innerText = "뇽스모 - 파스모포비아 전문 정보 & 공략 사이트";
            descEl.innerText = "발견한 증거를 클릭(포함/제외)하여 남은 유령을 빠르게 추려내세요.";
            renderUI();
            break;
        case 'news':
            titleEl.innerText = "파스모포비아 패치 소식";
            descEl.innerText = "최신 개발 로드맵, 유령 밸런스 조정 및 맵 리워크 소식 모음입니다.";
            renderNewsPage();
            break;
        case 'ghosts':
            titleEl.innerText = "파스모포비아 유령 도감";
            descEl.innerText = "29종 전체 유령의 고유 특징, 헌팅 정신력, 나무위키 기반 상세 메커니즘을 확인하세요.";
            renderGhostDictionary();
            break;
        case 'equipment':
            titleEl.innerText = "장비 티어 데이터 가이드";
            descEl.innerText = "Fandom Wiki 기준 조사 및 생존 장비의 Tier I~III 스펙을 비교해보세요.";
            renderEquipmentPage();
            break;
        case 'weekly':
            titleEl.innerText = "주간 도전 과제 가이드";
            descEl.innerText = "이번 주 도전 과제의 특수 규칙과 클리어 노하우 및 팁을 안내합니다.";
            renderWeeklyPage();
            break;
        case 'idcard':
            titleEl.innerText = "ID 카드 & 명예 배지";
            descEl.innerText = "플레이어 프레스티지 레벨 카드 및 한정 수집 배지 획득 조건을 확인하세요.";
            renderIdCardPage();
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

// 1. 증거 분석 UI 렌더링
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

            <!-- 🔴 증거 아래 전면 배치 유튜브 공략 버튼 -->
            ${ghost.youtubeUrl ? `
                <div class="main-youtube-wrapper">
                    <a href="${ghost.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="yt-btn">
                        <span class="yt-icon">▶</span> 🎬 특징 & 공략 영상 보기
                    </a>
                </div>
            ` : ''}

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
            <div class="dict-section-title">💡 상세 판별법 & 가이드</div>
            <div class="dict-text" style="color:var(--text-primary);">${g.tip}</div>
            ${g.youtubeUrl ? `
                <div class="main-youtube-wrapper" style="margin-top:14px;">
                    <a href="${g.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="yt-btn">
                        <span class="yt-icon">▶</span> 🎬 특징 & 공략 영상 보기
                    </a>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// 3. 장비 가이드 렌더링
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

// 4. 주간 도전 과제 렌더링
function renderWeeklyPage() {
    const container = document.getElementById('weekly-container');
    container.innerHTML = weeklyChallenges.map(w => `
        <div class="guide-card">
            <div class="guide-card-title">${w.title}</div>
            <div class="guide-card-body">${w.desc}</div>
        </div>
    `).join('');
}

// 5. ID 카드 렌더링
function renderIdCardPage() {
    const container = document.getElementById('idcard-container');
    container.innerHTML = idCardsData.map(card => `
        <div class="eq-card">
            <div>
                <div class="eq-header">
                    <span class="eq-name">${card.name}</span>
                    <span class="eq-category">${card.category}</span>
                </div>
                <div class="eq-tier-box">
                    <div class="eq-tier-title"><span>단계 1</span></div>
                    <div class="eq-tier-desc">${card.t1}</div>
                </div>
                <div class="eq-tier-box">
                    <div class="eq-tier-title"><span>단계 2</span></div>
                    <div class="eq-tier-desc">${card.t2}</div>
                </div>
                <div class="eq-tier-box">
                    <div class="eq-tier-title"><span>단계 3</span></div>
                    <div class="eq-tier-desc">${card.t3}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// 6. 패치 소식 렌더링
function renderNewsPage() {
    const container = document.getElementById('news-container');
    container.innerHTML = patchNewsData.map(n => `
        <div class="guide-card">
            <div class="guide-card-title">${n.title}</div>
            <div class="guide-card-body">${n.desc}</div>
        </div>
    `).join('');
}

// 7. 맵 정보 렌더링
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

// 8. 공략 렌더링
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
                파스모포비아 나무위키 상세 메커니즘 정보로 완벽하게 업데이트되었습니다.
            </div>
            <p style="margin-bottom: 6px;">• 유레이 현관문/문 닫기 메커니즘 및 밴시 구분법 수록</p>
            <p>• 29종 유령 강점, 약점, 판별법 정밀 보강 완료</p>
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
        g.strength.toLowerCase().includes(keyword) ||
        g.weakness.toLowerCase().includes(keyword) ||
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
