import { error } from "console";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { email } from "zod/v4";
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "my login",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                },
            },
            async authorize(credentials) {
                const response = await fetch(
                    "https://ecommerce.routemisr.com/api/v1/auth/signin",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                        headers: {
                            "content-type": "application/json",
                        },
                    },
                );

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const payload = await response.json();
                console.log("payload", payload);
                const userData: { id: string } = jwtDecode(payload.token);
                console.log("myToken...", userData);

                return {
                    id: userData.id,
                    email: payload.user.email,
                    name: payload.user.name,
                    token: payload.token,
                };
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.token = user.token;
            }
            return token
        },
        session({session, token}){
            if (token){
                session.user.id=token.id
            }
            return session
        }
    },
    pages: {
        signIn: "/login",
    },
};
