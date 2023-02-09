import { useEffect, useState } from 'react';
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

export default useA2I;
