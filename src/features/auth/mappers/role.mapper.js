import { ROLES } from "../../../constants/roles";
export function mapRole(dummyRole) {
    switch (dummyRole) {
        case "admin":
            return ROLES.ADMIN;
        case "moderator":
            return ROLES.MANAGER;
        default:
            return ROLES.CONTRIBUTOR;
    }
}
