import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'HyunwooLee | Developer', // e.g: 'Name | Developer'
  lang: 'KR, EN', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '안녕하세요. 저는 이현우',
  name: '배움을 좋아하는',
  subtitle: `개발자 입니다.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne: 'NAME: 이현우 / HyunwooLee',
  paragraphTwo: 'BIRTH: 1994.11.26',
  paragraphThree: 'PHONE: 010-5030-7951',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Bsetech 재고관리 시스템',
    info: '미국의 물류창고의 Samsung pannel재고를 관리하는 시스템',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '아이트래커를 활용한 시선패턴 수집 프로그램',
    info: '난독증은 정상적인 지능에도 불구하고 문장을 읽기가 어려운 독서 장애다. 난독증 진단 방법은 ADHD처럼 증상 체크리스트가 없다. 지적장애를 판정할 때 사용하는 웩슬러 지능검사 같은 전 세계인이 사용하는 아주 보편화된 심리검사도 없다. 미국 진단기준의 최신판인 DSM-5에도 어떤 검사를 해서 기준점수 아래여야 진단할 수 있다고 명확히 써놓지 않았다. 이를 해결하기 위해 글자, 단어, 문장, 문단의 단위를 설정하여 화면에 출력하고 아이트래커를 활용하여 읽기과정을 통한 읽는 사람의 시선 데이터를 수집하여 히트맵으로 분석한다.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Safty Hologram',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '아파트관리 시스템',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '마인드맵 회의록 작성 시스템',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '아사+아사=인사 프로젝트',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
