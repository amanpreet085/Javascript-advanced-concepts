const doTask1 = (init, callback) => {
  const result = init + 1;
  callback(result);
};

const doTask2 = (init, callback) => {
  const result = init + 2;
  callback(result);
};

const doTask3 = (init, callback) => {
  const result = init + 3;
  callback(result);
};

const doTasks = () => {
  doTask1(0, (result1) => {
    doTask2(result1, (result2) => {
      doTask3(result2, (result3) => console.log(result3));
    });
  });
};

doTasks();
