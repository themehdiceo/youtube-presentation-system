/** Données chiffrées — modifier ici pour ajuster les exemples. */

import { COPY, TERMS } from "./copy";

export const EXAMPLE_METRICS = {
  lowTicketOrderValue: 10,
  highTicketOrderValue: 100,
  targetRevenue: 1000,
  exampleConversionRate: 10,
} as const;

function formatCurrency(value: number): string {
  return `${value.toLocaleString("en-US")} $`;
}

export function computeExampleMetrics() {
  const { lowTicketOrderValue, highTicketOrderValue, targetRevenue } =
    EXAMPLE_METRICS;

  const lowTicketOrders = targetRevenue / lowTicketOrderValue;
  const highTicketOrders = targetRevenue / highTicketOrderValue;

  return {
    lowTicket: {
      label: TERMS.ecommerceLowTicket,
      orders: lowTicketOrders,
      orderValue: lowTicketOrderValue,
      revenue: targetRevenue,
    },
    pasHighTicket: {
      label: TERMS.pasHighTicket,
      orders: highTicketOrders,
      orderValue: highTicketOrderValue,
      revenue: targetRevenue,
    },
    orderRatio: lowTicketOrders / highTicketOrders,
    formatted: {
      lowTicketCalculation: `${lowTicketOrders} × ${formatCurrency(lowTicketOrderValue)}`,
      highTicketCalculation: `${highTicketOrders} × ${formatCurrency(highTicketOrderValue)}`,
      revenue: formatCurrency(targetRevenue),
      orderRatioLabel: COPY.numericExample.fewerOrders,
    },
  };
}

export { formatCurrency };

export { TERMS } from "./copy";

export const EXAMPLE_LABELS = COPY.labels;

export const NEXT_VIDEO = COPY.nextVideo;

export {
  TRIED_BUSINESSES,
  COMPETITION_FLOW,
  ECOMMERCE_CHECKOUT_FLOW,
  LOW_TICKET_COMPARISON,
  PAS_HIGH_TICKET_COMPARISON,
  VOLUME_WEIGHT_ITEMS,
  TRADITIONAL_VS_PAS,
} from "./copy";
