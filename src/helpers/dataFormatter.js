export function formatUserData(data) {
  return {
    address: data.address,
    name: data.name,
    email: data.email,
    phone: data.phone,
    roles: data.roles,
    createdAt: data.createdAt,
    id: data.id,
  };
}
