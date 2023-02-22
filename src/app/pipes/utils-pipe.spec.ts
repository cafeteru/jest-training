import { firstLetterUppercase } from "./utils-pipe";

describe('UtilsPipe', () => {
    describe('firstLetterUppercase', () => {
        it('Check with a string', () => {
            expect(firstLetterUppercase('hello')).toBe('Hello');
        });
    });
}
);