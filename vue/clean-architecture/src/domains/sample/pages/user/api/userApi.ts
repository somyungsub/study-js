// 유저
const userRepository: any[] = [
  {id: 1, name: "ssss", email: "sss@aaa.com", gender: "M", userType: "GENERAL"},
  {id: 2, name: "ssss2", email: "sss2@aaa.com", gender: "M", userType: 'ADMIN'}
];

export const userApi = {
  fetchUsers(): Promise<any[]> {
    return Promise.resolve(userRepository);
  },
  save(user: any): Promise<number> {
    userRepository.push(user);
    return Promise.resolve(user.id);
  }
}