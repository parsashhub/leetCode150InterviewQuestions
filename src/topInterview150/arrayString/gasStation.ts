// time Complexity => O(n^2)
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let n = gas.length;
  for (let i = 0; i < n; i++) {
    let fuel = 0;
    let stopCount = 0;
    let j = i;
    while (stopCount < n) {
      fuel += gas[j % n] - cost[j % n];
      if (fuel < 0) break;
      stopCount++;
      j++;
    }

    if (stopCount === n && fuel >= 0) return i;
  }

  return -1;
}

export function canCompleteCircuitII(gas: number[], cost: number[]): number {
  let n = gas.length;
  let totalFuel = 0; // it will give us a difference gas & cost
  let fuel = 0; // our tank
  let start = 0; // the index of gas station

  for (let i = 0; i < n; i++) {
    totalFuel += gas[i] - cost[i];
    fuel += gas[i] - cost[i];
    if (fuel < 0) {
      fuel = 0; // reset our tank
      start = i + 1; // update the stating gas station
    }
  }

  return totalFuel < 0 ? -1 : start;
}
