const Lab = require('lab');
const Code = require('code');
const lab = exports.lab = Lab.script();
const expect = Code.expect;
const describe = lab.describe;
const it = lab.test;
const before = lab.before;
const after = lab.after;

describe("app plus test suite",function(){
    it('returns true when 1 + 1 equals 2', () => {
        expect(1 + 1).to.equal(2);
    });
    it('returns true when 2 + 1 equals 2', () => {
        expect(1 + 2).to.equal(4);
    });
})

describe("app plus2 test suite",function(){
    it('demo  1 + 1 equals 2', () => {
        expect(1 + 1).to.equal(2);
    });
    it('demo2  2 + 1 equals 2', () => {
        expect(1 + 2).to.equal(4);
    });
})