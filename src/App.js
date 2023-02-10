import './App.css';
import DiaryEditor from './DiaryEdit';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '진경빈',
    content: '하이 2',
    emotion: 5,
    created_date: new Date().getTime(), // 현재시간 기준 생성
  },
  {
    id: 2,
    author: '홍길동',
    content: '하이 2',
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '김용관',
    content: '하이 3',
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: '이영균',
    content: '하이 4',
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DiaryEditor />
        <DiaryList diaryList={dummyList} />
      </header>
    </div>
  );
}

export default App;
