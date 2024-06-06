export type ThinkerType = {
  id: number;
  name: string;
  nameEn: string;
  desc: string;
  imgSrc: string;
  subjectList: number[];
};

export const THINKER_LIST: ThinkerType[] = [
  {
    id: 1,
    name: "간디",
    nameEn: "Mohandas Karamchand Gandhi",
    desc: "인도의 변호사, 정치인이자 독립운동가. 대영제국의 식민 통치에 비폭력주의로 저항한 것으로 유명하다.",
    imgSrc: "/asset/home/img-thinker-1.jpg",
    subjectList: [14],
  },
  {
    id: 4,
    name: "길리건",
    nameEn: "Carol Gilligan",
    desc: "미국의 철학자. 심리학과 윤리, 페미니즘을 주요 연구 분야로 삼고 있으며 현재 뉴욕 대학교의 교수로 재직하고 있다.",
    imgSrc: "/asset/home/img-thinker-4.jpg",
    subjectList: [7],
  },
  {
    id: 5,
    name: "나딩스",
    nameEn: "Nel Noddings",
    desc: "미국의 교육자, 철학자, 페미니스트. 덕과 배려 윤리를 주장한 것으로 유명한 철학자이다.",
    imgSrc: "/asset/home/img-thinker-5.jpg",
    subjectList: [7],
  },
  {
    id: 7,
    name: "노자",
    nameEn: "Laozi",
    desc: "춘추시대의 사상가이자 제자백가의 시초격인 인물로, 당대 최초로 사람이 지향해야 하는 바, 사람이 걸어가야 할 길(道)에 대한 통찰을 제시한 인물이다. 대표 저서로는《도덕경》[6]이 있으며, 이 때문에 도가의 창시자로 불린다. 도교에서는 신격화하여 태상노군이라고 부른다.",
    imgSrc: "/asset/home/img-thinker-7.jpg",
    subjectList: [2],
  },
  {
    id: 8,
    name: "노직",
    nameEn: "Robert Nozick",
    desc: "미국의 자유지상주의 정치철학자. 개인은 결코 침범받을 수 없는 자유의 권리를 가졌기 때문에, 국가는 공공선이라는 명목으로 개인의 정당한 소유권을 침해해선 안 되며, 국가는 단지 강압ㆍ절도ㆍ사기로부터의 보호, 계약 집행 등등이라는 좁은 기능들에 제한된 최소 국가의 역할만을 해야 한다고 주장하였다.",
    imgSrc: "/asset/home/img-thinker-8.jpg",
    subjectList: [11, 26],
  },
  {
    id: 9,
    name: "니부어",
    nameEn: "Reinhold Niebuhr",
    desc: "미국의 신학자이자 목사. 대표 저서로는 1932년에 발간한 ' 도덕적 인간과 비도덕적 사회' 가 있다.",
    imgSrc: "/asset/home/img-thinker-9.jpg",
    subjectList: [10],
  },
  {
    id: 10,
    name: "데이비드 소로",
    nameEn: "David Thoreau",
    desc: "미국 출신의 철학자, 시인, 수필가. 랠프 월도 에머슨과 함께 초월주의자와 생태주의자의 효시로 일컬어진다.",
    imgSrc: "/asset/home/img-thinker-10.jpg",
    subjectList: [14],
  },
  {
    id: 11,
    name: "데카르트",
    nameEn: "René Descartes",
    desc: "근대 철학의 포문을 연 프랑스의 철학자, 수학자, 과학자. 그는 방법적 회의를 통해 '나는 생각한다. 고로 존재한다'는 것이야말로 모든 것을 의심하더라도 더 이상 의심할 수 없는 진리라 확신하고는, 이를 모든 학문의 제1 원리로 정립하였다.",
    imgSrc: "/asset/home/img-thinker-11.jpg",
    subjectList: [18],
  },
  {
    id: 15,
    name: "롤스",
    nameEn: "John Rawls",
    desc: "40년 동안 '정의' 한 주제만을 파고든 정치철학자이자, 『정의론(A Theory of Justice)』의 저자.",
    imgSrc: "/asset/home/img-thinker-15.jpeg",
    subjectList: [11, 14, 26],
  },
];

export type SubjectType = {
  id: number;
  name: string;
  thinkerList: number[];
};

export const SUBJECT_LIST: SubjectType[] = [
  {
    id: 2,
    name: "동양 윤리의 접근",
    thinkerList: [3, 7, 20, 33, 35, 49],
  },
  {
    id: 7,
    name: "사랑과 성의 관계",
    thinkerList: [4, 5, 31, 42, 51],
  },
  {
    id: 10,
    name: "니부어의 사회 정의론",
    thinkerList: [9],
  },
  {
    id: 11,
    name: "분배적 정의의 의미와 윤리적 쟁점",
    thinkerList: [8, 15, 17, 18, 27, 38, 47],
  },
  {
    id: 14,
    name: "민주 시민의 참여와 시민 불복종",
    thinkerList: [10, 15, 63],
  },
  {
    id: 18,
    name: "서양 환경 윤리",
    thinkerList: [6, 11, 12, 13, 25, 27, 36, 38, 39, 51, 54, 63],
  },
  {
    id: 26,
    name: "국제 사회에 대한 책임과 기여",
    thinkerList: [8, 15, 54, 63],
  },
];
