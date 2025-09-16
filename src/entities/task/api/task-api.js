export const fetchNotReadyTasks = ({ onSuccess, onError }) =>
  fetch("http://192.168.50.195:3000/task/not-ready")
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onError);
