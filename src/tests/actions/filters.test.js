// export const setTextFilter = (text = '') => ({
//     type: "SET_TEXT_FILTER",
//     text
// });
// export const sortByAmount = () => ({
//     type: "SORT_BY_AMOUNT"
// })
// export const sortByDate = () => ({
//     type: "SORT_BY_DATE"
// })
// export const setStartDate = (startDate) => ({
//     type: "SET_START_DATE",
//     startDate
// })
// export const setEndDate = (endDate) => ({
//     type: "SET_END_DATE",
//     endDate
// })

import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";
import moment from "moment";

test("should generate set start date action object", () => {

    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })


});

test("should generate set end date action object", () => {
    const action =setEndDate(moment(0));

    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});

// 2 for set text filter 

test("should generate set text filter action object with provided values", ()=>{

    const action = setTextFilter("rent");

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "rent"
    })
})


test("should generate set text filter action object with default values", ()=>{

    const action = setTextFilter();

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    });

})


test("should generate sort by amount filter action object with provided values", ()=>{

    const action = sortByAmount();

    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });

})


test("should generate sort by date filter action object with provided values", ()=> {

    const action = sortByDate();

    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })

})