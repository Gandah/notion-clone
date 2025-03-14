import { PropsWithChildren } from "react"
import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider"

import { getActiveProductsWithPrice } from "@/lib/supabase/queries"

type LayoutProps = PropsWithChildren & {
    params: any;
}

const WorkspaceLayout = async ({ children, params }: LayoutProps) => {
  const { data: products, error } = await  getActiveProductsWithPrice();

  if (error) {
    console.error('Product fetching error:', error);
    throw new Error(`Failed to fetch active products with prices: ${error || 'Unknown error'}`, { cause: error });
  }
  return (
    <main className="flex over-hidden h-screen">
      <SubscriptionModalProvider products={products}>
            {children}
      </SubscriptionModalProvider>
     </main>
  )
}

export default WorkspaceLayout;