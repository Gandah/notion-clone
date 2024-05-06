import { PropsWithChildren } from "react"
import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider"

import { getActiveProductsWithPrice } from "@/lib/supabase/queries"

type LayoutProps = PropsWithChildren & {
    params: any;
}

const WorkspaceLayout = async ({ children, params }: LayoutProps) => {
  const { data: products, error } = await  getActiveProductsWithPrice();

  if(error) throw new Error();



  return (
    <main className="flex over-hidden h-screen">
      <SubscriptionModalProvider products={products}>
            {children}
      </SubscriptionModalProvider>
     </main>
  )
}

export default WorkspaceLayout;