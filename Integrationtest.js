/*
Assuming you have a component called TransactionCreateStepTwo in TransactionCreateStepTwo.js
It has two input fields, has two props sender and receiver id, a pay button 
By default the pay button should be disabled and only enabled when the two input are filled
To write a unit test for this
using react testing library
create a new file in the same folder called TransactionCreateStepTwo.test.js
*/
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("if an amount and note is entered, the pay button becomes enabled", async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />
  );

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

// This test combines two or more unit tests, in this case testing the functionality of the TransactionCreateStepTwo component verifying that it is disabled with no inputs entered and also 
// Entering the two inputs and verifyng the the button is then enabled.