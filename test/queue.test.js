/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-08-25 15:23:13
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-08-25 15:27:21
 * @Description: 
 */
import tools from "../src/index";
const { queue } = tools;
const { ArrayQueue, LinkedQueue } = queue;

var expect = chai.expect;

describe("队列", () => {

    it("ArrayQueue", () => {
        const queue = new ArrayQueue();
        const pop = queue.pop()
        // expect(pop).toBeUndefined()
        queue.push({ a: 1 })
        const size = queue.size();
        expect(size).to.equal(1);
        const front = queue.getFront();
        expect(JSON.stringify(front)).to.equal(JSON.stringify({ a: 1 }));
    })

    it("LinkedQueue", () => {
        const myQueue = new LinkedQueue();
        myQueue.push(1)
        myQueue.push(2)
        myQueue.push(3)
        myQueue.push(4)
        const str1 = myQueue.toString()
        expect(str1.trim()).to.equal('1 2 3 4')
        const pop = myQueue.pop()
        expect(pop.ele).to.equal(1)
        const str2 = myQueue.toString()
        expect(str2.trim()).to.equal('2 3 4')
    })
})