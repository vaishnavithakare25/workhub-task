export const userKeys = {
    all: ["users"],
    lists: () => [...userKeys.all, "list"],
    // list: (page: number, limit: number) =>
    //   [...userKeys.lists(), page, limit] as const,
    list: (params) => [...userKeys.lists(), params],
    details: () => [...userKeys.all, "detail"],
    detail: (id) => [...userKeys.details(), id],
};
