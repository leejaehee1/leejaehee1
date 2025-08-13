// type Run = (miles: number) => boolean;
// let runner2: Run = function (miles: number): boolean {
//   if (miles > 10) {
//     return true;
//   }
//   return false;
// };
// console.log(runner2(9));

// type Greet = (name: string) => string;
// const greet2: Greet = (name) => `Hello, ${name}`;
// console.log(greet2("John"));

function log(message: string, user?: string) {
  console.log(`${user ?? "system"}: ${message}`);
}

log("Hello");
log("Hello", "John");
