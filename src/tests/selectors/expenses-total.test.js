import selectExpenseTotals from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";


test('should return 0 if no expenses', ()=>{

    const res = selectExpenseTotals([]);

    expect(res).toBe(0);

});

test('should correctly add up a single expense', ()=> {

    const res = selectExpenseTotals([expenses[0]]);

    expect(res).toBe(195);

});

test('should correctly add up expenses',()=> {

    const res = selectExpenseTotals(expenses);

    expect(res).toBe(174195);

});
