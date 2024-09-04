// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  printList(): string {
    let current: ListNode | null = this;
    const values: number[] = [];

    while (current !== null) {
      values.push(current.val);
      current = current.next;
    }

    return values.join(" -> ");
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false;

  // Init two pointers, slow and fast
  let slowPointer: ListNode | null = head;
  let fastPointer: ListNode | null = head;

  // Traverse the linked list
  // Continue moving the slow pointer by one step and the fast pointer by two steps
  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer?.next ?? null;
    fastPointer = fastPointer.next.next;

    // If at any point slow and fastPointer pointers meet,
    // it means there's a cycle in the linked list.
    if (slowPointer === fastPointer) return true;
  }

  return false;
}

export default function hasCycleInit(arr: number[], pos: number): boolean {
  function createLinkedList(arr: number[], pos: number): ListNode | null {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode: ListNode | null = null;
    for (let i = 1; i <= arr.length; i++) {
      const newNode = new ListNode(arr[i]);
      current.next = newNode;
      current = newNode;

      // Save the cycle node if `i` matches `pos`
      if (i === pos) cycleNode = current;
    }

    // Create a cycle if `pos` is valid
    if (pos !== -1) current.next = cycleNode;

    return head;
  }

  return hasCycle(createLinkedList(arr, pos));
}
