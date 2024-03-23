function sum(a: number, b: number) {
    return a + b;
}



describe('sum', () => {

    // test block, you write your test cases inside this block
    test('adds 1 + 2 to equal 3', () => {

        // expect and toBe are Jest matchers which are used to check if value is what is expected
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 5 + 6 to equal 11', () => {
        expect(sum(5, 6)).toBe(11);
    });

});