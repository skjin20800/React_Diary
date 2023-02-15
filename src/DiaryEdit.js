import React, { useContext, useRef, useState } from 'react';
import { DiaryDispatchContext } from './App';

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const authorInput = useRef();
  const contentInput = useRef();

  //DiaryEdix의 input을 관리하는 객체
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const handleChangeState = e => {
    setState({
      ...state, //기존의 값은 원본을 유지함 state의 값을 넣음 [값 변경 x]
      [e.target.name]: e.target.value, //새로운 값만 변경 [값 변경 O]
    });
  };

  const handleSumbit = () => {
    console.log(state);
    if (state.author.length < 1) {
      alert('작성자는 최소 1글자 이상 입력해주세요');
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      alert('일기 본문은 최소 5글자 이상 입력해주세요');
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert('저장 성공');
    setState({ author: '', content: '', emotion: 1 });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          //input 값이 변경되었을때 실행되는 메서드
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea name="content" value={state.content} ref={contentInput} onChange={handleChangeState} />
      </div>
      <div>
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>``
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSumbit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default React.memo(DiaryEditor);
