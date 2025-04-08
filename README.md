#  Investment Portfolio Manager (Angular + LocalStorage)

A lightweight, responsive web application built with **Angular** that allows users to **add, view, and manage their investment portfolio**. This includes Stocks, Bonds, Real Estate, and Mutual Funds, with visual insights using charts and detailed form inputs.

---

##  Features

-  Add investments with:
  - Investment Type (Stocks, Bonds, etc.)
  - Amount
  - Quantity
  - Date of Investment
  - Notes
-  Store all data in `LocalStorage` (No backend required)
-  Dashboard with:
  - Asset Allocation Pie Chart
  - Portfolio Performance Line Chart
-  Persistent storage across sessions
-  Clean and dynamic form UI with validation

---

##  Project Structure

```bash
src/
├── app/
│   ├── dashboard/            # Portfolio overview (charts + summary)
│   ├── investments/          # Add, list, and manage investments
│   ├── shared/               # Models, services, and constants
│   └── app.routes.ts         # Routing configuration
│   └── app.config.ts         # App-level providers and bootstrap
├── assets/
├── index.html
└── main.ts


# for installation 
git clone https://github.com/your-username/investment-portfolio-manager.git


 Technologies Used
Angular 17 (Standalone components)

Angular Material (UI components)

ApexCharts (Pie & Line charts)

RxJS (Reactive data handling)

LocalStorage for persistent state
