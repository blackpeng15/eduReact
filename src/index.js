import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import MyApp01 from './TestApp01';
// import Shopping from './Shopping';

// import ScoreTable from './ScoreTable';
// import ParentComponent from './ParentComponent';

// import LifecycleExample from './LifecycleExample';
import App from './App';

// class Student{
//   constructor(name, kor, eng, math){
//       this.name = name;
//       this.kor = kor;
//       this.eng = eng;
//       this.math = math;
//   }
// }

// var stu = [new Student('아이유', 93, 85, 100),
//   new Student('유인나', 77, 91, 92),
//   new Student('카리나', 83, 78, 95),
//   new Student('윈터', 72, 82, 87),
//   new Student('권지용', 65, 77, 83)];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ScoreTable name="OO대학교 OO학과" stu={stu} /> */}
    {/* <ParentComponent /> */}
    <App />
  </React.StrictMode>
);
