/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-25 14:43:07
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:59:55
 * @Description: 
 */
import tools from "../src/index";

const { byteTools } = tools
var expect = chai.expect;
describe("byteTools", () => {

    it("bytes 字节格式转化", () => {
        // 1024b
        const b = 1024
        const b2kb = byteTools.bytes(b).Byte.toKB()
        expect(b2kb).to.equal(1);
        // 5kb
        const kb = 5;
        const kb2m = byteTools.bytes(kb).KB.toMB()
        expect(kb2m).to.equal(5 / 1024);
        // 10M
        const m = 10;
        const m2gb = byteTools.bytes(m).MB.toGB()
        expect(m2gb).to.equal(10 / 1024)
        // 1Gb
        const gb = 1;
        const gb2m = byteTools.bytes(gb).GB.toMB()
        expect(gb2m).to.equal(1 * 1024)
        // 1231
        const _b2 = 1231
        const _b22mb = byteTools.bytes(_b2).Byte.toMB()
        expect(_b22mb).to.equal(0.0011739730834960938)
        // 1232 bit
        const _bit1 = 1232
        const _bit12kb = byteTools.bytes(_bit1).Bit.toKB()
        expect(_bit12kb).to.equal(0.150390625)
        // 1232.1 MB
        const _mb1 = 1232.1
        const _mb12bit = byteTools.bytes(_mb1).MB.toBit()
        expect(_mb12bit).to.equal(10335603916.8)
    })

    it("b2size 字节格式转化", () => {
        // 1024b
        const b = 1024
        const b2kb = byteTools.b2size(b)
        expect(b2kb).to.equal('1 KB');
    })
})