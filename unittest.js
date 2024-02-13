/*
Assuming you have a component called TransactionCreateStepTwo in TransactionCreateStepTwo.js
It has two input fields, has two props sender and receiver id, a pay button 
By default the pay button should be disabled and only enabled when the two input are filled
To write a unit test for this
using react testing library
create a new file in the same folder called TransactionCreateStepTwo.test.js
*/

//Th
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("if an amount and note is entered, the pay button becomes enabled", async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />
  );

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

});


// This is a unit test testing the functionality of the TransactionCreateStepTwo component verifying that it is disabled with no inputs entered