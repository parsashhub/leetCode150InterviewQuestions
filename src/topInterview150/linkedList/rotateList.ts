export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head;

  let len = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    len++;
  }

  current.next = head; // connect tail to head to make it circular

  k = k % len;
  const stepsToNewHead = len - k;

  // find the new tail and break the circle
  current = head;
  for (let i = 1; i < stepsToNewHead; i++) {
    current = current.next!;
  }

  let newHead = current.next;
  current.next = null;

  return newHead;
}
