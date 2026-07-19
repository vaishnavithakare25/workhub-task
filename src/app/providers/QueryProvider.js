import { jsx as _jsx } from "react/jsx-runtime";
// export default function QueryProvider({children}:{children:React.ReactNode}){return <>{children}</>}
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../api/queryClient";
function QueryProvider({ children }) {
    return (_jsx(QueryClientProvider, { client: queryClient, children: children }));
}
export default QueryProvider;
