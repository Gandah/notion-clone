import { ThemeProvider } from "./next-theme-provider";
import { PropsWithChildren } from "react";
import { SupabaseUserProvider } from "./supabase-user-provider";
import AppStateProvider from "./state-provider";
import { SocketProvider } from "./socket-provider";

const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
        >
                <SocketProvider>
                    <SupabaseUserProvider>     
                        <AppStateProvider>
                                    {children}
                        </AppStateProvider>
                    </SupabaseUserProvider> 
                </SocketProvider>
          
        </ThemeProvider>
    );
};

export default Providers;