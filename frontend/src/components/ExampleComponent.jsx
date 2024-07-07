import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setExampleData } from '../store/actions/exampleActions';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const exampleData = useSelector((state) => state.example.exampleData);

  const handleButtonClick = () => {
    dispatch(setExampleData('This is some example data!'));
  };

  return (
    <div>
      <h1>Example Component</h1>
      <p>{exampleData}</p>
      <button onClick={handleButtonClick}>Set Example Data</button>
    </div>
  );
};

export default ExampleComponent;
