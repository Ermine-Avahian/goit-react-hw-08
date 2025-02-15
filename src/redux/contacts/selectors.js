import { createSelector } from "@reduxjs/toolkit";
import { selectFilter, selectNumber } from "../filters/selectors";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectItems = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter, selectNumber],
  (items, name, number) => {
    return items.filter((contact) => {
      const nameMatches = name
        ? contact.name.toLowerCase().includes(name.toLowerCase())
        : true;
      const numberMatches = number ? contact.number.includes(number) : true;

      return nameMatches && numberMatches;
    });
  }
);
