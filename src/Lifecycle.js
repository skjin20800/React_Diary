import React, { useEffect, useState } from 'react';

const UnmountText = () => {
  useEffect(() => {
    console.log('Mount!');

    return () => {
      // Unmount 시점에 실행되게 됨
      console.log('Unmount!');
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(0);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountText />}
    </div>
  );
};

export default Lifecycle;
