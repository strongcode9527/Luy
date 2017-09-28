import { flattenChildren } from '../app/src/Luy/createElement';

describe('flattenChildren', () => {
    describe('give flattenChildren an array', () => {
        it('[1,2,3,4,5,67,8,8]', () => {
            const ary = flattenChildren([1, 2, 3, 4, 5, 67, 8, 8])
            expect(ary[0]).toEqual({ "key": null, "props": "123456788", "ref": null, "type": "#text" })
        });
        it('[1, 2, 3, { a: 4 }, 5, 67, 8, 8]', () => {
            const ary = flattenChildren([1, 2, 3, { a: 4 }, 5, 67, 8, 8])
            expect(ary).toEqual([{ "key": null, "props": "123", "ref": null, "type": "#text" }, { "a": 4 }, { "key": null, "props": "56788", "ref": null, "type": "#text" }])
        });
        it('1asc', () => {
            const ary = flattenChildren('1asc')
            expect(ary).toEqual({ "key": null, "props": "1asc", "ref": null, "type": "#text" }, { "a": 4 })
        });
    });
});