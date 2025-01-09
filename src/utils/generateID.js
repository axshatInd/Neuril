/* 
Generates a unique ID by combining the current timestamp and a random number.
This function creates an identifier using the current time in milliseconds
(converted to base-36 string) concatenated with a random number
also converted to a base-36 string and sliced to remove unnecessary characters. 
@returns {string} A unique identifier string
*/

export default function generateID() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
