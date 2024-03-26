

import { unstable_noStore as noStore } from 'next/cache';

import { formatCurrency } from './utils';
// import revenue from '../../../scripts/revenue';
// import  invoicesData  from '../../../scripts/invoices';
// import  customersData   from '../../../scripts/customers';

import  placeholderData   from '../../../scripts/placeholder-data'



export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {

       console.log('Fetching revenue data...');
       await new Promise((resolve) => setTimeout(resolve, 3000));
       console.log('Fetching revenue data...');
      //  await new Promise((resolve) => setTimeout(resolve, 3000));
       const data = placeholderData.revenue;

       return data;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  
  noStore();
  try {
    console.log('Fetching Invoices data...');
    const data = placeholderData.updatedInvoices;
     const latestInvoices = data.map((invoice) => ({
       ...invoice,
       amount: formatCurrency(invoice.amount),
     }));
    return latestInvoices;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  
  noStore();
  try {

    const totalInvoices = placeholderData.updatedInvoices.length;
    const totalCustomers = placeholderData.customers.length
    const customerCountTotalPaid = placeholderData.total_paid_invoices; 
    const customerCountTotalPending = placeholderData.total_pending_invoices; 

     const data = await Promise.all([
       totalCustomers,
       totalInvoices,
       customerCountTotalPaid,
       customerCountTotalPending,
    ]);

    const dataObject = {
      totalCustomers: data[0],
      totalInvoices: data[1],
      customerCountTotalPaid: data[2],
      customerCountTotalPending: data[3]
  };

    return dataObject;


  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}









