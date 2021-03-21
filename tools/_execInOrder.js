export function _execInOrder(taskList) {
  taskList.reduce(
    (prev, next) => prev.then(() => next.call(this)),
    Promise.resolve()
  );
}
