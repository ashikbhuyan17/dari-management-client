import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import Customers from "../views/Contacts/Customers.jsx";
// import Suppliers from "../views/Contacts/Suppliers.jsx";
// import ViewCustomer from "../views/Contacts/ViewCustomer.jsx";
// import ViewSupplier from "../views/Contacts/ViewSupplier.jsx";
import Dashboard from "../views/Dashboard/Views/Dashboard.jsx";
// import ExpenseAdd from "../views/Expense/Views/ExpenseAdd.jsx";
// import ExpenseList from "../views/Expense/Views/ExpenseList.jsx";
import AddProduct from "../views/Inventory/Views/ProductAdd.jsx";
import ProductCategories from "../views/Inventory/Views/ProductCategories.jsx";
import ProductList from "../views/Inventory/Views/ProductList.jsx";
// import ProductUnits from "../views/Inventory/Views/Units.jsx";
import ProductWarrantyList from "../views/Inventory/Views/WarrantyList.jsx";
// import PaymentAccountBalanceSheet from "../views/Payment Accounts/Views/PaymentAccountBalanceSheet.jsx";
// import PaymentAccountCashFlow from "../views/Payment Accounts/Views/PaymentAccountCashFlow.jsx";
// import PaymentAccountList from "../views/Payment Accounts/Views/PaymentAccountList.jsx";
// import PaymentAccountReport from "../views/Payment Accounts/Views/PaymentAccountReport.jsx";
// import PaymentAccountTrialBalance from "../views/Payment Accounts/Views/PaymentAccountTrialBalance.jsx";
// import POS from "../views/POS/pos.jsx";
import AddPurchase from "../views/Purchases/Views/AddPurchase.jsx";
import AddPurchaseReturn from "../views/Purchases/Views/AddPurchaseReturn.jsx";
import PurchaseList from "../views/Purchases/Views/PurchaseList.jsx";
import PurchaseReturn from "../views/Purchases/Views/PurchaseReturn.jsx";
// import RecentTransactions from "../views/RecentTransactions/RecentTransactions.jsx";
import ActivityLogReport from "../views/Reports/Views/ActivityLogReport.jsx";
import ExpenseReport from "../views/Reports/Views/ExpenseReport.jsx";
import StockAdjustmentReport from "../views/Reports/Views/StockAdjustmentReport.jsx";
// import AddDraft from "../views/Sales/Views/AddDraft.jsx";
// import AddQuotation from "../views/Sales/Views/AddQuotation.jsx";
// import AddSale from "../views/Sales/Views/AddSale.jsx";
// import Discounts from "../views/Sales/Views/Discounts.jsx";
// import DraftList from "../views/Sales/Views/DraftList.jsx";
// import PosList from "../views/Sales/Views/PostList.jsx";
// import QuotationList from "../views/Sales/Views/QuotationList.jsx";
// import SellReturnList from "../views/Sales/Views/SellReturnList.jsx";
// import Sells from "../views/Sales/Views/Sells.jsx";
// import Shipments from "../views/Sales/Views/Shipments.jsx";
// import StockAdjustmentAdd from "../views/Stock-Adjustment/Views/StockAdjustmentAdd.jsx";
// import StockAdjustmentList from "../views/Stock-Adjustment/Views/StockAdjustmentList.jsx";
// import StockTransferAdd from "../views/Stock-Transfers/Views/StockTransferAdd.jsx";
// import StockTransferList from "../views/Stock-Transfers/Views/StockTransferList.jsx";
// import UserList from "../views/User Management/UserList.jsx";
import Login from "../views/Login/login";
import AddPurchaseCategory from "../views/Purchases/Views/AddPurchaseCategory.jsx";
// import AddExpenseCategory from "../views/Expense/Views/AddExpenseCategory.jsx";
import GeneralItems from "../views/Inventory/Views/GeneralItems.jsx";
import RawMaterialStockAdjustment from "../views/Stock-Adjustment/Views/RawMaterialStockAdjustment.jsx";
import GeneralItemStockAdjustment from "../views/Stock-Adjustment/Views/GeneralItemStockAdjustment.jsx";
import RawMaterialStockAdjustmentReport from "../views/Reports/Views/RawMaterialStockAdjustmentReport.jsx";
import RawMaterialIncreaseStockReport from "../views/Reports/Views/RawMaterialIncreaseStockReport.jsx";
import GeneralItemStockAdjustmentReport from "../views/Reports/Views/GeneralItemStockAdjustmentReport.jsx";
import GeneralItemIncreaseStockAdjustmentReport from "../views/Reports/Views/GeneralItemIncreaseStockReport.jsx";
import SalesDetails from "../views/Reports/Components/Sales Report/SalesDetails.jsx";
import ItemsReport from "../views/Reports/Views/ItemsReport.jsx";
import RawMaterials from "../views/Inventory/Views/RawMaterial.jsx";
import SalesReportList from "../views/Reports/Views/SalesReportList.jsx";
import SalesItemsList from "../views/Reports/Components/Sales Report/SalesItemsList.jsx";
import SalesReport from "../views/Reports/Views/SalesReport.jsx";
import ProfitReport from "../views/Reports/Views/ProfitReport.jsx";
// import EditSupplierForm from "../views/Contacts/Components/EditSupplierForm.jsx";
import UserCreate from "../views/User Management/UserCreate.jsx";
import UserDetails from "../views/User Management/Components/UserDetails.jsx";
import UserEditForm from "../views/User Management/Components/UserEditForm.jsx";
import ItemSalesReport from "../views/Reports/Views/ItemSalesReport.jsx";
import Register from "../views/Register/Register.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "dashboards/home", exact: true, element: <Dashboard /> },
      // { path: "pos", exact: true, element: <POS /> },
      // { path: "pos/list", exact: true, element: <PosList /> },
      { path: "product/create", exact: true, element: <AddProduct /> },
      { path: "product/list", exact: true, element: <ProductList /> },

      // { path: "product/units", exact: true, element: <ProductUnits /> },
      {
        path: "product/categories",
        exact: true,
        element: <ProductCategories />,
      },
      { path: "rawmaterial/create", exact: true, element: <RawMaterials /> },
      {
        path: "product/warranties",
        exact: true,
        element: <ProductWarrantyList />,
      },
      { path: "purchase/list", exact: true, element: <PurchaseList /> },
      { path: "purchase/create", exact: true, element: <AddPurchase /> },
      { path: "purchase/return", exact: true, element: <PurchaseReturn /> },
      {
        path: "purchase/return/create",
        exact: true,
        element: <AddPurchaseReturn />,
      },
      {
        path: "purchase/category",
        exact: true,
        element: <AddPurchaseCategory />,
      },
      // { path: "sell/list", exact: true, element: <Sells /> },
      // { path: "sell/return/list", exact: true, element: <SellReturnList /> },
      // { path: "sell/create", exact: true, element: <AddSale /> },
      // { path: "draft/create", exact: true, element: <AddDraft /> },
      // { path: "draft/list", exact: true, element: <DraftList /> },
      // { path: "quotation/create", exact: true, element: <AddQuotation /> },
      // { path: "quotation/list", exact: true, element: <QuotationList /> },



      // delete
      // {
      //   path: "stock-transfer/create",
      //   exact: true,
      //   element: <StockTransferAdd />,
      // },
      // {
      //   path: "stock-adjustment/create",
      //   exact: true,
      //   element: <StockAdjustmentAdd />,
      // },
      // {
      //   path: "stock-adjustment/list",
      //   exact: true,
      //   element: <StockAdjustmentList />,
      // },
      // { path: "shipments", exact: true, element: <Shipments /> },
      // { path: "discounts", exact: true, element: <Discounts /> },
      // {
      //   path: "recent-transactions",
      //   exact: true,
      //   element: <RecentTransactions />,
      // },





      // { path: "user-list", exact: true, element: <UserList /> },
      // { path: "user/create", exact: true, element: <UserCreate /> },
      // { path: "user/:id", exact: true, element: <UserDetails /> },
      // { path: "user/edit/:id", exact: true, element: <UserEditForm /> },
      // { path: "customers", exact: true, element: <Customers /> },
      // { path: "customer/:id", exact: true, element: <ViewCustomer /> },
      // { path: "suppliers", exact: true, element: <Suppliers /> },
      // { path: "supplier/:id", exact: true, element: <ViewSupplier /> },
      // { path: "supplier/edit/:id", exact: true, element: <EditSupplierForm /> },
      // { path: "supplier/create", exact: true, element: <AddSupplier /> },
      // { path: "expense/list", exact: true, element: <ExpenseList /> },
      // { path: "expense/create", exact: true, element: <ExpenseAdd /> },
      // {
      //   path: "expense/categories",
      //   exact: true,
      //   element: <AddExpenseCategory />,
      // },
      // {
      //   path: "paymentaccount/list",
      //   exact: true,
      //   element: <PaymentAccountList />,
      // },
      // {
      //   path: "paymentaccount/balancesheet",
      //   exact: true,
      //   element: <PaymentAccountBalanceSheet />,
      // },
      // {
      //   path: "paymentaccount/trialbalance",
      //   exact: true,
      //   element: <PaymentAccountTrialBalance />,
      // },
      // {
      //   path: "paymentaccount/cashflow",
      //   exact: true,
      //   element: <PaymentAccountCashFlow />,
      // },
      // {
      //   path: "paymentaccount/report",
      //   exact: true,
      //   element: <PaymentAccountReport />,
      // },


      { path: "report/expense", exact: true, element: <ExpenseReport /> },
      {
        path: "report/stock-adjustment",
        exact: true,
        element: <StockAdjustmentReport />,
      },
      {
        path: "report/activity-log",
        exact: true,
        element: <ActivityLogReport />,
      },
      {
        path: "report/raw-material/stock/adjustment",
        exact: true,
        element: <RawMaterialStockAdjustmentReport />,
      },
      {
        path: "report/raw-material/increase",
        exact: true,
        element: <RawMaterialIncreaseStockReport />,
      },
      {
        path: "report/general-item/stock/adjustment",
        exact: true,
        element: <GeneralItemStockAdjustmentReport />,
      },
      {
        path: "report/general-item/increase",
        exact: true,
        element: <GeneralItemIncreaseStockAdjustmentReport />,
      },
      { path: "report/sales/list", exact: true, element: <SalesReportList /> },
      { path: "report/daily/sales", exact: true, element: <SalesReport /> },
      {
        path: "report/sales/order/items/:orderid",
        exact: true,
        element: <SalesItemsList />,
      },
      {
        path: "report/sales/details/:id",
        exact: true,
        element: <SalesDetails />,
      },
      { path: "report/item/sales/list", exact: true, element: <ItemsReport /> },
      { path: "report/item/sales", exact: true, element: <ItemSalesReport /> },
      { path: "generalitems/create", exact: true, element: <GeneralItems /> },
      { path: "report/profit", exact: true, element: <ProfitReport /> },
      {
        path: "stock-adjustment/raw-material",
        exact: true,
        element: <RawMaterialStockAdjustment />,
      },
      {
        path: "stock-adjustment/general-item",
        exact: true,
        element: <GeneralItemStockAdjustment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "new/register/user",
    element: <Register />,
  },
];

export default ThemeRoutes;
