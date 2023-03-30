import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Calendar from "../components/calendar";
import "@testing-library/jest-dom";

describe("Calendar", () => {
  it("should display the correct month and year", () => {
    const date = new Date("2022-03-15");
    render(<Calendar date={date} />);
    expect(screen.getByText("March 2022")).toBeInTheDocument();
  });

  it("should display the weekdays", () => {
    const date = new Date("2022-03-15");
    render(<Calendar date={date} />);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekdays.forEach((weekday) => {
      expect(screen.getByText(weekday)).toBeInTheDocument();
    });
  });

  it("should display the correct dates for the month", () => {
    const date = new Date("2022-03-15");
    render(<Calendar date={date} />);
    expect(screen.getByText("28")).toBeInTheDocument();
    expect(screen.getByText("29")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("31")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("11")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("13")).toBeInTheDocument();
    expect(screen.getByText("14")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();
    expect(screen.getByText("16")).toBeInTheDocument();
    expect(screen.getByText("17")).toBeInTheDocument();
    expect(screen.getByText("18")).toBeInTheDocument();
    expect(screen.getByText("19")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByText("21")).toBeInTheDocument();
    expect(screen.getByText("22")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("26")).toBeInTheDocument();
    expect(screen.getByText("27")).toBeInTheDocument();
  });

  it("should highlight the current date", () => {
    const date = new Date();
    render(<Calendar date={date} />);
    const today = screen.getByText(date.getDate().toString());
    expect(today).toBeInTheDocument();
    expect(today).toHaveClass("today");
  });
});
