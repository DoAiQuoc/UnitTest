//Often while writing tests you have some setup work that needs to happen before tests run,
// and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this.
const initializeCityDatabase = () => {
    // Initialize
}

const initializeFoodDatabase = () => {
    // Initialize
}

const clearCityDatabase = () => {
    // Clear
}

const isCity = (city) => {
    return true
}

const isValidCityFoodPair =(a,b) => {
    return true
}


//Repeating Setup
beforeEach(() => {
    initializeCityDatabase();
  });
  
  afterEach(() => {
    clearCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });

  //One-Time Setup
  //In some cases, you only need to do setup once, at the beginning of a file
  //Jest provides beforeAll and afterAll hooks to handle this situation.

  beforeAll(() => {
    return initializeCityDatabase();
  });
  
  afterAll(() => {
    return clearCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });

  //The top level before* and after* hooks apply to every test in a file.
  // The hooks declared inside a describe block apply only to the tests within that describe block.
  // Applies to all tests in this file
beforeEach(() => {
    return initializeCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
  
  describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
      return initializeFoodDatabase();
    });
  
    test('Vienna <3 veal', () => {
      expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });
  
    test('San Juan <3 plantains', () => {
      expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
  });

  //Note that the top-level beforeEach is executed before the beforeEach inside the describe block
    beforeAll(() => console.log('1 - beforeAll'));
    afterAll(() => console.log('1 - afterAll'));
    beforeEach(() => console.log('1 - beforeEach'));
    afterEach(() => console.log('1 - afterEach'));

    test('', () => console.log('1 - test'));

    describe('Scoped / Nested block', () => {
        beforeAll(() => console.log('2 - beforeAll'));
        afterAll(() => console.log('2 - afterAll'));
        beforeEach(() => console.log('2 - beforeEach'));
        afterEach(() => console.log('2 - afterEach'));

        test('', () => console.log('2 - test'));
    });

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll