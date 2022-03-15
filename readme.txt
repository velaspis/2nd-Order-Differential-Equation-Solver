# 2nd-Order Differential Equation Solver

This repository provides a basic implementation of a 2nd-order differential equation solver. The equation solver can be used to solve a wide range of equations with varying types of initial conditions.

## Requirements

This implementation requires Python 3.6 or higher. Additionally, the following packages are required:

- NumPy
- SciPy

## Usage

To use the equation solver, you must provide the equation to solve as well as the initial conditions. The equation should be written in standard form and should include the second-order differential term.

Once the equation is provided, the solver can be used in one of two ways:

1. To solve for a single value:
   `solver.solve(t)`
2. To solve for a range of values:
   `solver.solve_range(start, end, step)`

The results are returned as an array of values.

## Examples

The following examples show how the equation solver can be used to solve simple equations.

### Example 1

Solve the equation *y'' + y = 0*