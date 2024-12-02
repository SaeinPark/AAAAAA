const images = document.querySelectorAll('.row img');

// 각 이미지에 해당하는 텍스트 데이터 배열
const imageTexts = [
    '아가씨(2016)\n\n내가 가장 좋아하는 한국 영화 중 하나다. 보통 박찬욱 감독의 최고의 작품은 올드보이라고 많이들 말하지만 나에게는 아가씨가 그렇다. 이유는 그냥 내 취향이다. 나는 시대극을 좋아하고, 히데코와 숙희의 이야기의 상호 구원 서사는 가슴을 울린다. 박찬욱식 미장센과 연출도 말할 것도 없이 좋다.',
    '아이, 토냐(2017)\n\n현실은 종종 창작물보다 더 다이나믹한 것 같다. 밑바닥에서부터 올라와 정점을 찍는 인물의 이야기는 언제나 재밌다. 특히 그것이 피겨스케이트와 같은 상류층 스포츠일 때는 더더욱 그렇다.',
    '아나스타샤(1997)\n\n어렸을 때는 재밌게 봤는데 커서 보니 묘하더라. 러시아 황실을 마냥 낭만적으로 묘사하고 소련 정부를 납작한 악마로 묘사한 것이 그렇다. 그래도 역시 노래는 좋다. Once upon a December은 불후의 명곡이다.',
    '아야와 마녀(2020)\n\n미야자키 하야오 할아버지 정말 이게 만족스러웠어요? 아들에 대한 기대치가 너무 낮았던 거 아닌가요?',
    '아이덴티티(2003)\n\n보는 내내 너무 긴장해서 좀 힘들었다. 근데 반전이 미쳤다. 사실 이런것도 스포긴 한데…',
    '아바타(2009)\n\n9살이었던 나를 극장에 10번인가 가게 만든 영화이다. 지금 봐도 재밌다. 2009년 영화인데 CG가 정말 경이롭다. 물론 내용은 꽤 전형적이지만 아는 맛이 또 좋은 거 아니겠는가. 무엇보다 그 환상적인 자연환경과 그에 걸맞는 제임스 호너의 음악은 마치 꿈 속에 있는 것처럼 느끼게 해준다. 낭만 그 자체다. 아 쓰다보니 또 보고싶다.',
    '아메리칸 사이코(2000)\n\n가끔 이런 피튀기는 블랙 코미디를 봐줘야 한다. 특히 Hip to be Square 시퀀스의 크리스찬 베일이 너무 웃겨서 종종 유튜브에서 찾아본다. 길티 플레저이긴 하지만, 납작한 인간 군상이 잔뜩 나오고 의미 없는 대화가 가득한 이런 영화가 재밌다. 그러나 “좋아하는 영화가 뭐에요?”라는 질문에 이 영화를 답하면 그 사람은 피할 것이다.',
    '아가씨(2016)\n\n내가 가장 좋아하는 한국 영화 중 하나다. 보통 박찬욱 감독의 최고의 작품은 올드보이라고 많이들 말하지만 나에게는 아가씨가 그렇다. 이유는 그냥 내 취향이다. 나는 시대극을 좋아하고, 히데코와 숙희의 이야기의 상호 구원 서사는 가슴을 울린다. 박찬욱식 미장센과 연출도 말할 것도 없이 좋다.',
    '아이, 토냐(2017)\n\n현실은 종종 창작물보다 더 다이나믹한 것 같다. 밑바닥에서부터 올라와 정점을 찍는 인물의 이야기는 언제나 재밌다. 특히 그것이 피겨스케이트와 같은 상류층 스포츠일 때는 더더욱 그렇다.',
    '아나스타샤(1997)\n\n어렸을 때는 재밌게 봤는데 커서 보니 묘하더라. 러시아 황실을 마냥 낭만적으로 묘사하고 소련 정부를 납작한 악마로 묘사한 것이 그렇다. 그래도 역시 노래는 좋다. Once upon a December은 불후의 명곡이다.',
    '아야와 마녀(2020)\n\n미야자키 하야오 할아버지 정말 이게 만족스러웠어요? 아들에 대한 기대치가 너무 낮았던 거 아닌가요?',
    '아이덴티티(2003)\n\n보는 내내 너무 긴장해서 좀 힘들었다. 근데 반전이 미쳤다. 사실 이런것도 스포긴 한데…',
    '아바타(2009)\n\n9살이었던 나를 극장에 10번인가 가게 만든 영화이다. 지금 봐도 재밌다. 2009년 영화인데 CG가 정말 경이롭다. 물론 내용은 꽤 전형적이지만 아는 맛이 또 좋은 거 아니겠는가. 무엇보다 그 환상적인 자연환경과 그에 걸맞는 제임스 호너의 음악은 마치 꿈 속에 있는 것처럼 느끼게 해준다. 낭만 그 자체다. 아 쓰다보니 또 보고싶다.',
    '아메리칸 사이코(2000)\n\n가끔 이런 피튀기는 블랙 코미디를 봐줘야 한다. 특히 Hip to be Square 시퀀스의 크리스찬 베일이 너무 웃겨서 종종 유튜브에서 찾아본다. 길티 플레저이긴 하지만, 납작한 인간 군상이 잔뜩 나오고 의미 없는 대화가 가득한 이런 영화가 재밌다. 그러나 “좋아하는 영화가 뭐에요?”라는 질문에 이 영화를 답하면 그 사람은 피할 것이다.',
    '아메리칸 셰프(2014)\n\n역시 비싸고 양 적은 고급 레스토랑보단 싸고 푸짐하고 맛있는 푸드트럭이 짱이지. 길바닥에서 먹는 그 감성도 좋다. 보다보면 배고파지고 쿠바 샌드위치가 정말 궁금해진다.',
    '아이언맨(2008)\n\n사실 아이언맨 시리즈를 그렇게 좋아하진 않는다. 토니 스타크라는 캐릭터 자체에 그렇게 애정이 없어서 그런가… 하지만 이때 마블의 감성이 좋다. 철판이 철컥거리며 조립되면서 천천히 수트를 입는 게 간지 난다. 요즘의 수트는 성의 없게 마법소녀마냥 뾰로롱 나타나지 않던가.',
    '아이언 자이언트(1999)\n\n냉전이라는 이름처럼 차가운 현실과 따뜻한 동화가 만나면 이 영화이지 않을까. 우리 자이언트와 켄트좀 행복하게 냅둬주세요!',
    '아메리칸 스나이퍼(2014)\n\n재밌게 보긴 했지만 정말로 미국 중심적이다. 트럼프가 좋아할 거 같다. 하지만 저격수는 역시 섹시하다.',
    '아이즈 와이드 셧(1999)\n\n성적인 장면이 난무하는 영화를 원래는 정말 좋아하지 않는다. 그런데 신비로운 연출과 극적인 말투가 자꾸 영화에 집중하게 만든다. 또 큐브릭 감독 특유의 색감과 미장센이 기괴하면서도 아름다워 눈을 뗄 수 없었다. 이런 정신 나간 사람이 잔뜩 나오는 영화가 재밌다.',
    '아틀란티스: 잃어버린 제국(2001)\n\n캐릭터 디자인이 정말 매력적이고 인물 한명 한명이 잘 만들어졌다. 하지만 영화는 너무 심심하다.',
    '아키라(1988)\n\n일본 애니메이션계, 사이버펑크계의 바이블이 아니던가. 말그대로 프레임마다 돈을 태웠다는 느낌으로 모션이 섬세하고 아름답다. 기괴하고 코즈믹 호러적인 분위기가 좋다.',
    '아쿠아맨(2018)\n\n사실 제이슨 모모아와 앰버 허드가 섹시하고 아름다웠던 것밖에 기억이 안 난다. 나에게는 아쿠아맨이 최고로 로맨틱한 영화다. 내 여자 기 죽지 말라고 같이 장미 먹방해주는 남자, 얼마나 설레는가.',
    '아메리칸 셰프(2014)\n\n역시 비싸고 양 적은 고급 레스토랑보단 싸고 푸짐하고 맛있는 푸드트럭이 짱이지. 길바닥에서 먹는 그 감성도 좋다. 보다보면 배고파지고 쿠바 샌드위치가 정말 궁금해진다.',
    '아이언맨(2008)\n\n사실 아이언맨 시리즈를 그렇게 좋아하진 않는다. 토니 스타크라는 캐릭터 자체에 그렇게 애정이 없어서 그런가… 하지만 이때 마블의 감성이 좋다. 철판이 철컥거리며 조립되면서 천천히 수트를 입는 게 간지 난다. 요즘의 수트는 성의 없게 마법소녀마냥 뾰로롱 나타나지 않던가.',
    '아이언 자이언트(1999)\n\n냉전이라는 이름처럼 차가운 현실과 따뜻한 동화가 만나면 이 영화이지 않을까. 우리 자이언트와 켄트좀 행복하게 냅둬주세요!',
    '아메리칸 스나이퍼(2014)\n\n재밌게 보긴 했지만 정말로 미국 중심적이다. 트럼프가 좋아할 거 같다. 하지만 저격수는 역시 섹시하다.',
    '아이즈 와이드 셧(1999)\n\n성적인 장면이 난무하는 영화를 원래는 정말 좋아하지 않는다. 그런데 신비로운 연출과 극적인 말투가 자꾸 영화에 집중하게 만든다. 또 큐브릭 감독 특유의 색감과 미장센이 기괴하면서도 아름다워 눈을 뗄 수 없었다. 이런 정신 나간 사람이 잔뜩 나오는 영화가 재밌다.',
    '아틀란티스: 잃어버린 제국(2001)\n\n캐릭터 디자인이 정말 매력적이고 인물 한명 한명이 잘 만들어졌다. 하지만 영화는 너무 심심하다.',
    '아키라(1988)\n\n일본 애니메이션계, 사이버펑크계의 바이블이 아니던가. 말그대로 프레임마다 돈을 태웠다는 느낌으로 모션이 섬세하고 아름답다. 기괴하고 코즈믹 호러적인 분위기가 좋다.',
    '아쿠아맨(2018)\n\n사실 제이슨 모모아와 앰버 허드가 섹시하고 아름다웠던 것밖에 기억이 안 난다. 나에게는 아쿠아맨이 최고로 로맨틱한 영화다. 내 여자 기 죽지 말라고 같이 장미 먹방해주는 남자, 얼마나 설레는가.'
];

images.forEach((img, index) => {
    const originalSrc = img.src;

    const alternateImages = [
        '아가씨.png', '아이, 토냐.png', '아나스타샤.png',
        '아야와 마녀.png', '아이덴티티.png', '아바타.png',
        '아메리칸 사이코.png',
        '아가씨.png', '아이, 토냐.png', '아나스타샤.png',
        '아야와 마녀.png', '아이덴티티.png', '아바타.png',
        '아메리칸 사이코.png',
        '아메리칸 셰프.png',
        '아이언맨.png', '아이언 자이언트.png',
        '아메리칸 스나이퍼.png', '아이즈 와이드 셧.png',
        '아틀란티스.png', '아키라.png', '아쿠아맨.png',
        '아메리칸 셰프.png',
        '아이언맨.png', '아이언 자이언트.png',
        '아메리칸 스나이퍼.png', '아이즈 와이드 셧.png',
        '아틀란티스.png', '아키라.png','아쿠아맨.png'
    ];

    const parentRow = img.closest('.row');

    // 마우스를 올리면 대체 이미지로 변경
    img.addEventListener('mouseenter', () => {
        const originalWidth = img.clientWidth;
        const originalHeight = img.clientHeight;
        const aspectRatio = originalWidth / originalHeight;

        parentRow.style.animationPlayState = 'paused'; // 애니메이션 멈추기

        const tempImage = new Image();
        tempImage.src = alternateImages[index];

        tempImage.onload = () => {
            img.src = tempImage.src;
            img.style.width = `${originalWidth}px`;
            img.style.height = `${originalWidth / aspectRatio}px`;
        };
    });

    // 마우스를 떼면 원래 이미지로 복원
    img.addEventListener('mouseleave', () => {
        parentRow.style.animationPlayState = 'running'; // 애니메이션 재개
        img.src = originalSrc;
        img.style.width = '';
        img.style.height = '';
    });

img.addEventListener('click', (event) => {
    event.stopPropagation(); // 클릭 이벤트 전파 방지

    // 모든 이미지 투명도를 낮춤
    images.forEach(image => {
        image.style.opacity = '0.3';
    });

    // 애니메이션 멈춤
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.style.animationPlayState = 'paused';
    });

    // 텍스트 상자 생성
    let textBox = document.querySelector('.text-box');
    if (!textBox) {
        textBox = document.createElement('div');
        textBox.className = 'text-box';
        document.body.appendChild(textBox);
    }

    // 이미지별 텍스트 설정 (줄바꿈 변환 추가)
    textBox.innerHTML = imageTexts[index]
        ? imageTexts[index].replace(/\n/g, '<br>') // \n을 <br>로 변환
        : `이미지 ${index + 1}에 대한 정보입니다.`;

    // 텍스트 상자 스타일 적용
    textBox.style.position = 'fixed';
    textBox.style.top = '50%';
    textBox.style.left = '50%';
    textBox.style.transform = 'translate(-50%, -50%)';
    textBox.style.padding = '20px';
    textBox.style.borderRadius = '10px';
    textBox.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    textBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    textBox.style.fontSize = '16px';
    textBox.style.fontWeight = 'bold';
    textBox.style.textAlign = 'center';
    textBox.style.zIndex = '1000';
    textBox.style.display = 'block';
    textBox.style.fontFamily = '"Noto Serif KR", serif';

    // 외부 클릭 이벤트 처리
    const handleClickOutside = (e) => {
        if (!textBox.contains(e.target)) {
            textBox.remove(); // 텍스트 상자 제거

            // 이미지 투명도 복원
            images.forEach(image => {
                image.style.opacity = '1';
            });

            // 애니메이션 재개
            rows.forEach(row => {
                row.style.animationPlayState = 'running';
            });

            // 이벤트 리스너 제거
            document.removeEventListener('click', handleClickOutside);
        }
    };

    // 이벤트 리스너 추가 전 중복 제거
    document.removeEventListener('click', handleClickOutside);

    // 외부 클릭 이벤트 추가
    setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 0);
});
});