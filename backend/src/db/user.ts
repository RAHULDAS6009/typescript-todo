import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}


interface UpdateParams {
  firstName:string,
  lastName:string
}
export async function updateUser(username:string,{firstName,lastName}:UpdateParams){
  const res=await prisma.user.update({
    where:{username},
    data:{
      firstName,lastName
    }
  });
  console.log(res);
}
interface User {
  username:string;
  password:string;
  firstName:string;
  lastName:string;
}
export async function getUser(username:string){
  const res=await prisma.user.findFirst({
    where:{username}
  });
}


