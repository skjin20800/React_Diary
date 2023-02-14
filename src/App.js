import { useState, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEdit';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    console.log(`${dataId} id값`);
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = targetId => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter(it => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(data.map(it => (it.id === targetId ? { ...it, content: newContent } : it)));
  };

  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
