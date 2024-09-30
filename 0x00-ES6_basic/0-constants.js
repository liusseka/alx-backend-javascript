/**
 * Creates a constant and a variable using const and let.
 *
 * @returns {string} The task statement.
 */
export function taskFirst() {
  const task = "I prefer const when I can.";
  return task;
}

/**
 * Returns a string to be used in combination.
 *
 * @returns {string} The string ' is okay'.
 */
export function getLast() {
  return " is okay";
}

/**
 * Combines two strings to form a complete statement.
 *
 * @returns {string} The combined statement.
 */
export function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();
  return combination;
}
