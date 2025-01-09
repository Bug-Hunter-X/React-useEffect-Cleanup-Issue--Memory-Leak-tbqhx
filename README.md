# React useEffect Cleanup Issue: Memory Leak

This repository demonstrates a subtle bug related to the `useEffect` hook in React. The component's `useEffect` hook doesn't properly clean up after itself, potentially leading to memory leaks or unexpected behavior when the component is unmounted.  This is a common mistake when working with effects and cleanup functions.

## Bug Description

The provided code implements a simple counter component. While it seems functional, the cleanup function within the `useEffect` is crucial.  Without appropriate cleanup, the unmount log message will not be printed, indicating that the cleanup function is not being called correctly.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs.  Mount and unmount the component to see the issue.

## Solution

The solution involves ensuring that the `useEffect` hook correctly cleans up any resources it might have acquired.  The `return` statement inside `useEffect` is where you should perform any cleanup tasks such as canceling subscriptions, clearing timers or any other operation related to the effect.