// Task First Function
export function taskFirst() {
  const task = "I prefer const when I can.";
  return task;
}

// Get Last function
export function getLast() {
  return " is okay";
}

// Task Next Function
export function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}
