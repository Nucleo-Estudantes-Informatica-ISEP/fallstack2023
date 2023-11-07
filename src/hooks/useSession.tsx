import { useContext } from "react";

import AuthContext, { AuthContextData } from "@/contexts/AuthContext";

const useSession = (): AuthContextData => {
  return useContext(AuthContext);
};

export default useSession;
