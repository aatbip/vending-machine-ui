# Vending Machine UI App

API of this application can be found [here](https://github.com/aatbip/vending-machine-server#application-state).

### How to run the project?

To run the project, follow the steps below:

- Clone this repository
- Go to the root of the project then run the command `yarn` to install packages
- Then, run `yarn run dev` command to start to development server

To run the project using docker, follow the steps below:

- In the project's root directory, run `docker build -t vending-machine-ui .`
- Then start the app using `docker run -p 8080:8080 vending-machine-ui`

### Project's structure

This application follows the following structure:

- `src/vendingMachine` folder contains the core machine logic. It has root `index.tsx` file that contains the layout of the machine. 
- Layout is further divided in two parts. 

   - `MachineItems.tsx` contains the `MachineItems` component that is responsible for rendering the current number of items (Coke, Pepsi, and Dew) inside the machine. 
   - `UserInteractionElements.tsx` contains `UserInteractionElements` component that is responsible for taking all kinds of user inputs including coins, cash, and item counts.
- `components` folder contains all the reusable components.
- Application state has been defined under the `context` folder which is passed throughout the application using the ContextAPI.
- `hoc` folder contains a simple `<When/>` HOC that is used for conditional rendering

### Procedure

- When the app is first rendered, `fetchAppState()` function is called which is responsible for fetching the current states (coin/cash counts, items count)
- `purchase()` and `refund()` functions are implemented in the `/context/index.tsx` file that are responsible for requesting the backend server to handle purchase and refund logics.
- Other states such as `errorMsg`, `change`, `refund`, `isRefundOn` are defined in the context to manage the overall application logic.
