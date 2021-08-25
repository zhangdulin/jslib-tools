export class ArrayQueue {
    private arr: any[];
    private maxLength: number | void;
    /**
     * @param {number} len 最大数据存储量
     */
    constructor(len?: number) {
        this.arr = new Array();
        this.maxLength = len;
    }
    /**
     * 入队
     * @param target 
     */
    push(target: any): boolean {
        if (this.maxLength && this.arr.length >= this.maxLength) return false;
        this.arr.push(target);
        return true;
    }
    /**出队 */
    pop(): any {
        return this.arr.shift();
    }
    /**队首 */
    getFront(): any {
        return this.arr[0];
    }
    /**队尾 */
    getRear(): any {
        if (this.size() === 0) return
        return this.arr[this.size() - 1]
    }
    clear(): void {
        this.arr = [];
    }
    size(): number {
        return this.arr.length;
    }
    _getAll(): any[] {
        return this.arr;
    }
}

class Node {

    private ele: any;
    private next: any;
    constructor(ele: any) {
        this.ele = ele;
        this.next = null
    }
    getValue(): object {
        return {
            ele:this.ele,
            next:this.next,
        }
    }
}

export class LinkedQueue {

    private length: number = 0;
    private front: any; // 队首指针
    private rear: any; // 队尾指针

    push(ele: any): boolean {
        let node = new Node(ele),
            temp;
        if (this.length == 0) this.front = node;
        else {
            temp = this.rear;
            temp.next = node;
        }
        this.rear = node;
        this.length++;
        return true;
    }

    pop(): any {
        let temp = this.front;
        this.front = this.front.next
        this.length--;
        temp.next = null
        return temp;
    }

    size(): number {
        return this.length;
    }

    getFront(): any {
        return this.front;
    }

    getRear(): any {
        return this.rear;
    }

    toString(): string {
        let string: string = '',
            temp: any = this.front;
        while (temp) {
            string += temp.ele + ' ';
            temp = temp.next;
        }
        return string;
    }

    clear(): boolean {
        this.front = null;
        this.rear = null;
        this.length = 0;
        return true
    }

}
export default {
    ArrayQueue,
    LinkedQueue
}