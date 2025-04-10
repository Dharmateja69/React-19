import React from "react";
import NotAuthorized from "../components/NotAuthorized";
import useAuthStore from "../store/useAuthStore";
import { UserRole } from "../types/user";
interface WithAccessControlOptions {
  allowedRoles: UserRole[];
  injectPropsByRole?: Partial<Record<UserRole, any>>;
}
const withAccessControl = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithAccessControlOptions
) => {
  return function ComponentwithAcceControl(props: P) {
    const role = useAuthStore((state) => state.role);
    const { allowedRoles, injectPropsByRole = {} } = options;
    if (!allowedRoles.includes(role)) {
      return <NotAuthorized />;
    }
    const injectedProp = injectPropsByRole[role] || {};
    return <WrappedComponent {...props} {...(injectedProp as P)} />;
  };
};

export default withAccessControl;
