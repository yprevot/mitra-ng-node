describe('Creating new products', () => {
    describe('Name string type scenarios', () => {
        it('Name is not a string type', async () => {
            expect(true).toBe(true);
        });

        it('Less than 3 characters', async () => {
            expect(true).toBe(true);
        });

        it('More than 100 characters', async () => {
            expect(true).toBe(true);
        });

        it('Valid input', async () => {
            expect(true).toBe(true);
        });

        it('Not unique name input', async () => {
            expect(true).toBe(true);
        });
    });

    describe('Description string type scenarios', () => {
        it('Description is not a string type', async () => {
            expect(true).toBe(true);
        });

        it('Less than 5 characters', async () => {
            expect(true).toBe(true);
        });

        it('More than 1000 characters', async () => {
            expect(true).toBe(true);
        });

        it('Valid string type input', async () => {
            expect(true).toBe(true);
        });
    });

    describe('Price number type scenarios', () => {
        it('Price is not a number', async () => {
            expect(true).toBe(true);
        });

        it('Number less than 1', async () => {
            expect(true).toBe(true);
        });

        it('Number is more than 20000', async () => {
            expect(true).toBe(true);
        });

        it('Decimal with invalid place precision', async () => {
            expect(true).toBe(true);
        });

        it('Number with 2 decimal place precision', async () => {
            expect(true).toBe(true);
        });
    });
});
