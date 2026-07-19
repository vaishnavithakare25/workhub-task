export function mapUserDtoToModel(dto) {
    return {
        id: dto.id,
        firstName: dto.firstName,
        lastName: dto.lastName,
        fullName: `${dto.firstName} ${dto.lastName}`,
        email: dto.email,
        username: dto.username,
        age: dto.age,
        gender: dto.gender,
        role: dto.role === "admin" ||
            dto.role === "moderator" ||
            dto.role === "user"
            ? dto.role
            : "user",
        image: dto.image,
    };
}
export function mapUsersDtoToModel(users) {
    return users.map(mapUserDtoToModel);
}
