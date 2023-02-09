import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

const useA2I = (setData) => {
  const [data, setTaskData] = useState({});

  useEffect(() => {
    const a2i = new AWS.A2I({ apiVersion: '2019-11-07' });

    a2i.getHumanLoop({
      HumanLoopName: process.env.REACT_APP_HUMAN_LOOP_NAME
    }).promise()
      .then(response => {
        setTaskData({
          instructions: response.HumanLoopActivationConditions,
          taskData: response
        });
      });
  }, []);

  return data;
};

const Test = () => {
  const [instructions, setInstructions] = useState('');
  const [taskData, setTaskData] = useState(null);
  const [workerAction, setWorkerAction] = useState('');

  const data = useA2I((data) => {
    setInstructions(data.instructions);
    setTaskData(data.taskData);
  });

  const handleSubmit = () => {
    const a2i = new AWS.A2I({ apiVersion: '2019-11-07' });

    a2i.sendHumanLoopActivationResponse({
      HumanLoopActivationId: taskData.HumanLoopActivationId,
      HumanLoopName: taskData.HumanLoopName,
      TaskName: taskData.TaskName,
      WorkerAction: workerAction
    }).promise();
  };

  return (
    <div>
      <h1>Instructions</h1>
      <p>{instructions}</p>

      <h2>Task Data</h2>
      <pre>{JSON.stringify(taskData, null, 2)}</pre>

      <h2>Worker Action</h2>
      <textarea value={workerAction} onChange={e => setWorkerAction(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Test;
