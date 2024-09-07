import { ListNode } from "./linkedListCycle";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let temp = new ListNode();
  let current = temp;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If there are remaining nodes in either list, link them to the merged list
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  return temp.next;
}

export default function mergeTwoSortedLists(
  list1: number[],
  list2: number[],
): string | null {
  function createLinkedList(arr: number[]) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i <= arr.length; i++) {
      const newNode = new ListNode(arr[i]);
      current.next = newNode;
      current = newNode;
    }

    return head;
  }

  let linkedList1 = createLinkedList(list1);
  let linkedList2 = createLinkedList(list2);

  return mergeTwoLists(linkedList1, linkedList2)?.printList() ?? null;
}
