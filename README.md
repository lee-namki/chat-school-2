node.js는 로컬에 설치가 완료되어있어야 함.
"pip install --upgrade openai"을 터미널에서 진행하여, openai 파이썬 라이브러리도 설치가 완료 되어 있어야 함.


1. 터미널에서 "git clone https://github.com/lee-namki/chat-school-2.git"을 입력하여, chat-school2 코드를 클론한다.
2. app-chat-hook-'use-gpt.ts'에서 환경 변수로 되어 있는 apikey를 본인의 것으로 수정한다.
 const apiKey = "your-direct-api-key"; // 환경 변수 대신 직접 API 키를 할당합니다.
   
3. 터미널에서 "npm install"을 통해 필요한 node 모듈을 설치한다.
4. 터미널에서 "npm run dev"을 입력한다.
5. 크롬에서 "http://localhost:3000/"에 접속한다.
6. 원하는 사상가를 선택, 단원명을 선택한다.
7. 질문을 입력하고 전송 버튼을 누른 후 답변을 받는다.
