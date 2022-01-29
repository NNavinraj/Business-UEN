import { render, screen, cleanup, fireEvent, queryByPlaceholderText } from '@testing-library/react';
import App from '../../App';

test('Should Render ', () => {
  render(<App />);
  const linkElement = screen.getByTestId('unitTest1');
  expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
  cleanup();
})




afterEach(() => {
  cleanup();
})

test('Should Display Incorrect w 1st Option of DropDown.Incorrect Format ', () => {
  const {queryByTestId, queryByLabelText} = render(<App />);
  const searchInput = queryByLabelText('Business UEN')
  fireEvent.click(screen.getByText("Businesses registered with ACRA"));
  
  fireEvent.change(searchInput, {target: {value: "123456X"}})
  expect(searchInput.value).toMatch(/[0-9]{8}[A-Za-z]{1}/)
});


afterEach(() => {
  cleanup();
})


test('Should Display Correct w 1st Option of DropDown ', () => {
  const {queryByTestId, queryByLabelText} = render(<App />);
  const searchInput = queryByLabelText('Business UEN')
  fireEvent.click(screen.getByText("Businesses registered with ACRA"));
  
  fireEvent.change(searchInput, {target: {value: "12345678X"}})
  expect(searchInput.value).toMatch(/[0-9]{8}[A-Za-z]{1}/)
});


afterEach(() => {
  cleanup();
})


it('Should Display Incorrect w 2nd Option of DropDown', () => {
  const {queryByTestId, queryByLabelText} = render(<App />);
  const searchInput = queryByLabelText('Business UEN')
  fireEvent.change(queryByTestId("unitTest3"),  {target: {MenuItem: "B"}} );



  fireEvent.change(searchInput, {target: {value: "202354321X"}})
  expect(parseInt(searchInput.value.substring(0, 4)) > 2022).toBeFalsy();
  expect(searchInput.value).toMatch(/(18|19|20)[0-9]{2}[0-9]{5}[A-Za-z]{1}/);


})

afterEach(() => {
  cleanup();
})

it('Should Display Incorrect w 2nd Option of DropDown. Incorrect Format', () => {
  const {queryByTestId, queryByLabelText} = render(<App />);
  const searchInput = queryByLabelText('Business UEN')
  fireEvent.change(queryByTestId("unitTest3"),  {target: {MenuItem: "B"}} );

  fireEvent.change(searchInput, {target: {value: "2022254321X"}})
  expect(searchInput.value).toMatch(/(18|19|20)[0-9]{2}[0-9]{5}[A-Za-z]{1}/)


})

afterEach(() => {
  cleanup();
})

it('Should Display Correct w 2nd Option of DropDown ', () => {
  const {queryByTestId, queryByLabelText} = render(<App />);
  const searchInput = queryByLabelText('Business UEN')
  fireEvent.change(queryByTestId("unitTest3"),  {target: {MenuItem: "B"}} );

  fireEvent.change(searchInput, {target: {value: "201254321X"}})
  expect(searchInput.value).toMatch(/(18|19|20)[0-9]{2}[0-9]{5}[A-Za-z]{1}/)


})

afterEach(() => {
  cleanup();
})



it('Should Display Correct w 3rd Option of DropDown. ', () => {
  const {queryByTestId, queryByLabelText} = render(<App />);
  const searchInput = queryByLabelText('Business UEN')
  const validnewUENType = ["LP", "LL", "FC", "PF", "RF" , "MQ", "MM", "NB" ,"CC", "CS", "MB",  
"FM", "GS", "DP", "CP", "NR", "CM","CD", "MD", "HS", "VH", "CH", "MH" , "CL", "XL", "CX", "HC",
"RP", "TU", "TC", "FB", "FN", "PA", "PB", "SS", "MC", "SM", "GA", "GB"]; 
  fireEvent.change(queryByTestId("unitTest3"),  {target: {MenuItem: "C"}} );

  fireEvent.change(searchInput, {target: {value: "T01LP12345X"}})
  expect(searchInput.value.substring(0,3)).toMatch(/R[0-9]{2}|S[0-9]{2}|T[0-1]{1}[0-9]{1}|T2[0-2]{1}/)
  expect(validnewUENType.indexOf(searchInput.value.substring(3,5)) == -1).toBeFalsy();
  expect(searchInput.value.substring(5)).toMatch(/[0-9]{4}[A-Za-z]{1}/)


})

afterEach(() => {
  cleanup();
})


it('Should Display Incorrect w 3rd Option of DropDown. ', () => {
  const {queryByTestId, queryByLabelText} = render(<App />);
  const searchInput = queryByLabelText('Business UEN')
const validnewUENType = ["LP", "LL", "FC", "PF", "RF" , "MQ", "MM", "NB" ,"CC", "CS", "MB",  
"FM", "GS", "DP", "CP", "NR", "CM","CD", "MD", "HS", "VH", "CH", "MH" , "CL", "XL", "CX", "HC",
"RP", "TU", "TC", "FB", "FN", "PA", "PB", "SS", "MC", "SM", "GA", "GB"]; 

  fireEvent.change(queryByTestId("unitTest3"),  {target: {MenuItem: "C"}} );

  fireEvent.change(searchInput, {target: {value: "T23LP123499X"}})
  expect(searchInput.value.substring(0,3)).toMatch(/R[0-9]{2}|S[0-9]{2}|T[0-1]{1}[0-9]{1}|T2[0-2]{1}/)
  expect(validnewUENType.indexOf(searchInput.value.substring(3,5)) == -1).toBeFalsy();
  expect(searchInput.value.substring(5)).toMatch(/[0-9]{4}[A-Za-z]{1}/)

})

afterEach(() => {
  cleanup();
})
