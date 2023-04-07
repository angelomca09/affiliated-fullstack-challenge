interface ILogin {
  success: boolean,
  access?: "basic" | "admin",
  profile?: {
    username: string,
  },
  message?: string;
}

export default ILogin