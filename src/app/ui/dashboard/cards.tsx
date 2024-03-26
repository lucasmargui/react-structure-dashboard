"use client"

import React, { useState, useEffect } from 'react';

import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { fetchCardData } from '@/app/lib/data';
import {
  CardsSkeleton,
} from '@/app/ui/skeletons';



const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default function CardWrapper() {

  const dataObject = {
    totalCustomers: 0,
    totalInvoices: 0,
    customerCountTotalPaid: 0,
    customerCountTotalPending: 0
};

  const [data, setData] = useState<typeof dataObject | null>(null);

  useEffect(() => {
    async function fetchData() {
      const cardsData = await fetchCardData();
      setData(cardsData);
    }

    fetchData();
  }, []);

  if (!data ) {
    return <CardsSkeleton />;
  }


  return (
    <>
     <Card title="Collected" value={data.customerCountTotalPaid} type="collected" />
        <Card title="Pending" value={data.customerCountTotalPending} type="pending" />
        <Card title="Total Invoices" value={data.totalInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={data.totalCustomers}
          type="customers"
        />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
