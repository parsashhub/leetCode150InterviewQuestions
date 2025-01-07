export function evalRPN(tokens: string[]): number {
  let operands = ["+", "-", "*", "/"];

  let stack: number[] = [];
  tokens.forEach((token: string) => {
    if (operands.includes(token)) {
      let second = stack.pop();
      let first = stack.pop();
      stack.push(
        parseInt(
          eval(`${first}
                    ${token}
                    ${second}`),
        ),
      );
    } else stack.push(parseInt(token));
  });

  return stack[0];
}

// export function evalRPN(tokens: string[]): number {
//   let stack: number[] = [];
//
//   tokens.forEach((token: string) => {
//     if (["+", "-", "*", "/"].includes(token)) {
//       let second = stack.pop();
//       let first = stack.pop();
//       if (first && second) {
//         token === "+" ? stack.push(first + second) : null;
//         token === "*" ? stack.push(first * second) : null;
//       }
//     }
//     if (token === "+") {
//       stack.push(stack.pop() + stack.pop());
//     } else if (token === "-") {
//       let second = stack.pop();
//       let first = stack.pop();
//       second && first ? stack.push(first - second) : null;
//     } else if (token === "*") {
//       stack.push(stack.pop() * stack.pop());
//     } else if (token === "/") {
//       let second = stack.pop();
//       let first = stack.pop();
//       stack.push(parseInt(first / second));
//     } else stack.push(parseInt(token));
//   });
//
//   return stack[0];
// }
